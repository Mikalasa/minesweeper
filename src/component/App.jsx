import React, {useEffect, useState} from "react";

//custom React
import Board from "./Board"
import InfoPanel from "./InfoPanel";

//custom JS
import config from "./features/Config";
import InitCells from "./features/InitCells";
import GameOver from "./features/Gameover";

//custom css
import "../index.css"
import Level from "./Level";

function App() {

    const [configGame, setConfigGame] = useState(config.est);
    const [message, setMessage] = useState('Mine Sweeper');
    const [emoji, setEmoji] = useState('./svg/emoji.svg');
    const [squareArray, setSquareArray] = useState(configGame.noStartGameArray);
    const [initGameEnable, setInitGameEnable] = useState(true);
    const [lose, setLose] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [clickedBomb, setClickedBomb] = useState(false);
    const [flagFlicker, setFlagFlicker] = useState(false);
    const [resetKey1, setResetKey1] = useState(0)
    const [resetKey2, setResetKey2] = useState(1)


    const handleReset = () => {
        setResetKey1((prevKey) => prevKey + 1);
        setResetKey2((prevKey) => prevKey + 1);
    }

    function initGame() {
        console.log('im in initing above:', initGameEnable, gameStart)
        console.log('configGame in initing above:', configGame)
        if (initGameEnable === true && gameStart === false) {
            console.log('im initing')
            new InitCells(configGame)
            setInitGameEnable(false)
        }
    }
    function gameOver() {
        setMessage('Game lose, click emoji to restart')
        setEmoji('./svg/deadEmoji.svg')
        setLose(true)
        setGameStart(false)
        setFlagFlicker(true)
        new GameOver()
    }
    function restartGame() {
        console.log("configGame.noStartGameArray:", configGame.noStartGameArray)
        console.log("configGame:", configGame)
        //configGame.noStartGameArray = []
        //await setInitGameEnable(true)
        setMessage('Mine Sweeper')
        setEmoji('./svg/emoji.svg')
        setLose(false)
        setClickedBomb(false)
        setFlagFlicker(false)
        setGameStart(false)
        setSquareArray(configGame.noStartGameArray)
        new GameOver().cleanClasses()
        handleReset()
    }

    function winTheGame() {
        setMessage('Game win!, click emoji to play!')
        setEmoji('./svg/emojiWin.svg')
        setGameStart(false)
    }

    function checkWin() {
        let allInsertFlags = document.querySelectorAll('.flag-open')
        let allBombs = document.querySelectorAll('.bomb')
        let allInsertedOnBombFlag = []
        allInsertFlags.forEach((item) => {
            let flagParent = item.parentElement
            if (flagParent.classList.contains('bomb') && item.classList.contains('flag-open')) {
                allInsertedOnBombFlag.push(item)
            }
        })
        if (allInsertedOnBombFlag.length === allBombs.length / 2 && allBombs.length !== 0) {
            new GameOver()
            winTheGame()
        }
    }

    initGame()

    return (
        <div id="canvas">
            <Level
                handleReset={handleReset}
                restartGame={restartGame}
                initGame={initGame}

                setConfigGame={setConfigGame}
                setSquareArray={setSquareArray}

                setInitGameEnable={setInitGameEnable}
            />
            <InfoPanel
                key={resetKey1}

                restartGame={restartGame}

                message={message}
                emoji={emoji}
                lose={lose}
                gameStart={gameStart}
                configGameFlags={configGame.flags}
            />
            <Board
                key={resetKey2}

                gameOver={gameOver}
                checkWin={checkWin}

                gameStart={gameStart}
                squareArray={squareArray}
                lose={lose}
                clickedBomb={clickedBomb}
                flagFlicker={flagFlicker}
                configGame={configGame}
                configGameFlags={configGame.flags}

                setClickedBomb={setClickedBomb}
                setLose={setLose}
                setGameStart={setGameStart}
                setSquareArray={setSquareArray}
            />
        </div>
    );
}

export default App;
