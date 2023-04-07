//React
import React, {useState, useEffect} from "react";

//custom
import Board from "./Board"
import InfoPanel from "./InfoPanel";
import Test from "./test";

//custom JS
import GameOver from "./features/Gameover";
import config from "./features/Config";
import InitCells from "./features/InitCells";

function App() {
    const [message, setMessage] = useState('Mine Sweeper');
    const [emoji, setEmoji] = useState('./Svgs/emoji.svg');
    const [lose, setLose] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [squareArray, setSquareArray] = useState(config.gameBoard.noStartGameArray);
    const [initEnable, setInitEnable] = useState(true);
    const [startTimer, setStartTimer] = useState(false);
    const [timer, setTimer] = useState(config.gameBoard.timer);
    const [clickedBomb, setClickedBomb] = useState(false);
    const [flagCounter, setFlagCounter] = useState(config.gameBoard.flags);

    function gameOver() {
        console.log("clicked bomb!")
        setMessage('You lose, click emoji to restart')
        setEmoji('./Svgs/deademoji.svg')
        setLose(true)
        setGameStart(false)
        setStartTimer(false)
        new GameOver()
    }
    function restartGame() {
        config.gameBoard.noStartGameArray = []
        console.log("restart squareArray", config.gameBoard.noStartGameArray)
        setInitEnable(true)
        setMessage('Mine Sweeper')
        setEmoji('./Svgs/emoji.svg')
        setLose(false)
        setSquareArray(config.gameBoard.noStartGameArray)
        setTimer(config.gameBoard.timer)
        setClickedBomb(false)
        setFlagCounter(config.gameBoard.flags)
        new GameOver().cleanClasses(config.gameBoard.flags)
        new GameOver().stopShowFlagNoBomb()
    }

    if (initEnable === true) {
        new InitCells(config)
        setInitEnable(false)
    }
    function onTimeUp() {
        gameOver()
    }

    return (
        <div id="canvas">
            <InfoPanel
                message={message}
                emoji={emoji}
                lose={lose}
                restartGame={restartGame}
                startTimer={startTimer}
                onTimeUp={onTimeUp}
                timer={timer}
                setTimer={setTimer}
                flagCounter={flagCounter}
            />
            <Board
                gameOver={gameOver}
                setLose={setLose}
                setGameStart={setGameStart}
                gameStart={gameStart}
                squareArray={squareArray}
                setSquareArray={setSquareArray}
                setStartTimer={setStartTimer}
                clickedBomb={clickedBomb}
                setClickedBomb={setClickedBomb}
                setFlagCounter={setFlagCounter}
            />
            {/*<Test />*/}
        </div>

    );
}

export default App;
