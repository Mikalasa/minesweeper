//React
import React, {useEffect, useState} from "react";

//custom
import Board from "./Board"
import InfoPanel from "./InfoPanel";

//custom JS
import config from "./features/Config";
import InitCells from "./features/InitCells";
import GameOver from "./features/Gameover";

//custom css
import "../index.css"

function App() {
    const [message, setMessage] = useState('Mine Sweeper');
    const [emoji, setEmoji] = useState('./svg/emoji.svg');
    const [squareArray, setSquareArray] = useState(config.gameBoard.noStartGameArray);
    //const [timer, setTimer] = useState(config.gameBoard.timer);
    //const [flagCounter, setFlagCounter] = useState(config.gameBoard.flags);
    const [initEnable, setInitEnable] = useState(true);
    const [lose, setLose] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [startTimer, setStartTimer] = useState(false);
    const [clickedBomb, setClickedBomb] = useState(false);
    const [flagFlicker, setFlagFlicker] = useState(false);


    function initGame() {
        if (initEnable === true) {
            new InitCells(config)
            setInitEnable(false)
        }
    }
    function gameOver() {
        console.log("clicked bomb!")
        setMessage('Game lose, click emoji to restart')
        setEmoji('./svg/deadEmoji.svg')
        setLose(true)
        setGameStart(false)
        setStartTimer(false)
        setFlagFlicker(true)
        new GameOver()
    }
    async function restartGame() {
        config.gameBoard.noStartGameArray = []
        await setMessage('Mine Sweeper')
        await setEmoji('./svg/emoji.svg')
        await setLose(false)
        await setInitEnable(true)
        await setClickedBomb(false)
        await setFlagFlicker(false)
        await setSquareArray(config.gameBoard.noStartGameArray)
        //await setTimer(config.gameBoard.timer)
        //await setFlagCounter(config.gameBoard.flags)
        await new GameOver().cleanClasses(config.gameBoard.flags)
    }

    function onTimeUp() {
        gameOver()
        setFlagFlicker(true)
    }

    function winTheGame() {
        setMessage('Game win!, click emoji to play!')
        setEmoji('./svg/emojiWin.svg')
        setGameStart(false)
        setStartTimer(false)
    }

    function checkWin() {
        let allFlags = document.querySelectorAll('.flag')
        let allBombs = document.querySelectorAll('.bomb')
        let allInsertedOnBombFlag = []
        allFlags.forEach((item) => {
            let flagParent = item.parentElement
            if (flagParent.classList.contains('bomb') && !item.classList.contains('flag-hide')) {
                allInsertedOnBombFlag.push(item)
            }
        })
        if (allInsertedOnBombFlag.length === allBombs.length / 2 && allBombs.length !== 0) {
            new GameOver()
            winTheGame()
        }
    }

    useEffect(() => {
        if (flagFlicker === false) {
            return
        }
        let allCells = document.querySelectorAll('.cell')
        let flagedNoBombCell =[]
        allCells.forEach((item) => {
            let itemFlag = item.children[2]
            if (!item.classList.contains('bomb') && !itemFlag.classList.contains('flag-hide')) {
                flagedNoBombCell.push(item)
            }
        })
        const showNoBombFlagFlick = setInterval(() => {
            flagedNoBombCell.forEach((item) => {
                item.children[2].classList.add('flag-hide');
                item.classList.add('cell-opened');
                setTimeout(() => {
                    item.classList.remove('cell-opened');
                    item.children[2].classList.remove('flag-hide');
                }, 500);
            });
        }, 1000);

        return () => {
            clearInterval(showNoBombFlagFlick);
        };
    }, [flagFlicker]);

    initGame()

    return (
        <div id="canvas">
            <InfoPanel
                restartGame={restartGame}
                onTimeUp={onTimeUp}

                message={message}
                emoji={emoji}
                lose={lose}
                //timer={timer}
                //flagCounter={flagCounter}
                startTimer={startTimer}

                //setTimer={setTimer}
            />
            <Board
                gameOver={gameOver}
                checkWin={checkWin}
                //callbackFunction={callbackFunction}

                gameStart={gameStart}
                squareArray={squareArray}
                lose={lose}
                clickedBomb={clickedBomb}

                setClickedBomb={setClickedBomb}
                //setFlagCounter={setFlagCounter}
                setLose={setLose}
                setGameStart={setGameStart}
                setSquareArray={setSquareArray}
                setStartTimer={setStartTimer}
            />
        </div>
    );
}

export default App;
