//React
import React, {useState} from "react";

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
    function clickedBomb(setSquareArray) {
        console.log("clicked bomb!")
        setMessage('You lose, click emoji to restart')
        setEmoji('./Svgs/deademoji.svg')
        new GameOver()
    }
    function restartGame() {
        setGameStart(false)
        // setSquareArray((prevState) => {
        //     console.log("restart", prevState)
        //     prevState = new InitCells(config)
        // })
    }

    return (
        <div id="canvas">
            <InfoPanel
                message={message}
                emoji={emoji}
                lose={lose}
                restartGame={restartGame}
            />
            <Board
                clickedBomb={clickedBomb}
                setLose={setLose}
                setGameStart={setGameStart}
                gameStart={gameStart}
                squareArray={squareArray}
                setSquareArray={setSquareArray}
            />
            {/*<Test />*/}
        </div>

    );
}

export default App;
