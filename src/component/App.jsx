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
    const [configGame, setConfigGame] = useState(config.gameBoard);
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
        if (initGameEnable === true && gameStart === false) {
            new InitCells(config)
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
    async function restartGame() {
        config.gameBoard.noStartGameArray = []
        await setMessage('Mine Sweeper')
        await setEmoji('./svg/emoji.svg')
        await setLose(false)
        await setInitGameEnable(true)
        await setClickedBomb(false)
        await setFlagFlicker(false)
        await setSquareArray(config.gameBoard.noStartGameArray)
        await new GameOver().cleanClasses()
        await handleReset()
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
                setConfigGame={setConfigGame}
            />
            <InfoPanel
                key={resetKey1}

                restartGame={restartGame}

                message={message}
                emoji={emoji}
                lose={lose}
                gameStart={gameStart}

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

                setClickedBomb={setClickedBomb}
                setLose={setLose}
                setGameStart={setGameStart}
                setSquareArray={setSquareArray}
            />
        </div>
    );
}

export default App;
