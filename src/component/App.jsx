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
import Game from "./Game";

function App() {
    const [reKey, setReKey] = useState(1000)
    const handleGameReset = () => {
        console.log('here i am')
        setReKey((prevKey) => prevKey + 1);
    }
    // const [configGame, setConfigGame] = useState(config.est);
    // const [message, setMessage] = useState('Mine Sweeper');
    // const [emoji, setEmoji] = useState('./svg/emoji.svg');
    // const [squareArray, setSquareArray] = useState(configGame.noStartGameArray);
    // const [initGameEnable, setInitGameEnable] = useState(true);
    // const [lose, setLose] = useState(false);
    // const [gameStart, setGameStart] = useState(false);
    // const [clickedBomb, setClickedBomb] = useState(false);
    // const [flagFlicker, setFlagFlicker] = useState(false);
    // const [resetKey1, setResetKey1] = useState(0)
    // const [resetKey2, setResetKey2] = useState(1)
    //
    //
    // const handleReset = () => {
    //     setResetKey1((prevKey) => prevKey + 1);
    //     setResetKey2((prevKey) => prevKey + 1);
    // }
    //
    // function initGame() {
    //     if (initGameEnable === true && gameStart === false) {
    //         new InitCells(configGame)
    //         setInitGameEnable(false)
    //     }
    // }
    // function gameOver() {
    //     setMessage('Game lose, click emoji to restart')
    //     setEmoji('./svg/deadEmoji.svg')
    //     setLose(true)
    //     setGameStart(false)
    //     setFlagFlicker(true)
    //     new GameOver()
    // }
    // async function restartGame() {
    //     configGame.noStartGameArray = []
    //     await setMessage('Mine Sweeper')
    //     await setEmoji('./svg/emoji.svg')
    //     await setLose(false)
    //     await setInitGameEnable(true)
    //     await setClickedBomb(false)
    //     await setFlagFlicker(false)
    //     await setGameStart(false)
    //     await setSquareArray(configGame.noStartGameArray)
    //     await new GameOver().cleanClasses()
    //     await handleReset()
    // }
    //
    // function winTheGame() {
    //     setMessage('Game win!, click emoji to play!')
    //     setEmoji('./svg/emojiWin.svg')
    //     setGameStart(false)
    // }
    //
    // function checkWin() {
    //     let allInsertFlags = document.querySelectorAll('.flag-open')
    //     let allBombs = document.querySelectorAll('.bomb')
    //     let allInsertedOnBombFlag = []
    //     allInsertFlags.forEach((item) => {
    //         let flagParent = item.parentElement
    //         if (flagParent.classList.contains('bomb') && item.classList.contains('flag-open')) {
    //             allInsertedOnBombFlag.push(item)
    //         }
    //     })
    //     if (allInsertedOnBombFlag.length === allBombs.length / 2 && allBombs.length !== 0) {
    //         new GameOver()
    //         winTheGame()
    //     }
    // }
    //
    // function level(target) {
    //     if (target.classList.contains('easiest')) {
    //         setConfigGame(config.est)
    //         restartGame()
    //     }
    //     if (target.classList.contains('normal')) {
    //         setConfigGame(config.nor)
    //         restartGame()
    //     }
    //     if (target.classList.contains('intermediate')) {
    //         setConfigGame(config.int)
    //         restartGame()
    //     }
    //     if (target.classList.contains('expert')) {
    //         setConfigGame(config.exp)
    //         restartGame()
    //     }
    //     console.log("Target:", target)
    // }
    //
    // initGame()
    //
    // return (
    //     <div id="canvas">
    //         <Level
    //             // setConfigGame={setConfigGame}
    //             // handleReset={handleReset}
    //             // restartGame={restartGame}
    //             // setSquareArray={setSquareArray}
    //             level={level}
    //         />
    //         <InfoPanel
    //             key={resetKey1}
    //
    //             restartGame={restartGame}
    //
    //             message={message}
    //             emoji={emoji}
    //             lose={lose}
    //             gameStart={gameStart}
    //             configGameFlags={configGame.flags}
    //
    //         />
    //         <Board
    //             key={resetKey2}
    //
    //             gameOver={gameOver}
    //             checkWin={checkWin}
    //
    //             gameStart={gameStart}
    //             squareArray={squareArray}
    //             lose={lose}
    //             clickedBomb={clickedBomb}
    //             flagFlicker={flagFlicker}
    //             configGame={configGame}
    //             configGameFlags={configGame.flags}
    //
    //             setClickedBomb={setClickedBomb}
    //             setLose={setLose}
    //             setGameStart={setGameStart}
    //             setSquareArray={setSquareArray}
    //         />
    //     </div>
    // );
    return(
        <Game
            Key={reKey}
            handleGameReset={handleGameReset}
        />
    )
}

export default App;
