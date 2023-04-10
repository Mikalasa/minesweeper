import React, {useEffect} from "react";

//custom
import Cells from "./Cell";

//custom JS
import config from "./features/Config";
import Game from "./features/Game";
import Utility from "./features/Utility";
import LeftClick from "./features/LeftClick";
import GameOver from "./features/Gameover";

function Board(appProps) {

    async function leftClicks (clicked, props, event, clickedIndex) {
        let target = event.target
        let flag = target.children[2]
        if (clicked === true) {
            await appProps.setGameStart(true)
        }
        config.gameBoard.startSquareArray = []
        await new Game(appProps.gameStart, appProps.setSquareArray, props, config, Utility, clickedIndex)
        await new LeftClick(clicked, props, event)
        if (props.number === 9 && !flag.classList.contains('flag-open')) {
            appProps.setClickedBomb(true)
            appProps.gameOver()
        }
    }

    function checkWinCallback() {
        //console.log('appProps.callbackFunction():', appProps.callbackFunction())
        appProps.checkWin()
    }

    useEffect(() => {
        if (appProps.flagFlicker === false) {
            return
        }
        if (appProps.initEnable === true) {
            new GameOver().cleanClasses()
        }
        let allCells = document.querySelectorAll('.cell')
        let flagedNoBombCell =[]
        allCells.forEach((item) => {
            let itemFlag = item.children[2]
            if (!item.classList.contains('bomb') && itemFlag.classList.contains('flag-open')) {
                flagedNoBombCell.push(item)
            }
        })
        const showNoBombFlagFlick = setInterval(() => {
            flagedNoBombCell.forEach((item) => {
                item.children[2].classList.remove('flag-open');
                item.classList.add('cell-opened');
                setTimeout(() => {
                    item.classList.remove('cell-opened');
                    item.children[2].classList.add('flag-open');
                }, 500);
            });
        }, 1000);

        return () => {
            clearInterval(showNoBombFlagFlick);
        };
    }, [appProps.flagFlicker, appProps.initEnable]);

    //console.log("gameStarted: ", appProps.gameStart, "currentSquareArray: ", appProps.squareArray)

    return(
        <div className="board">
            {appProps.squareArray.map((value, rowIndex) => {
                var times = rowIndex
                return(
                    <div className={"row" + " " + "row-" + rowIndex}>
                        {
                            value.map((number, colIndex)=> {
                                return(
                                    <Cells
                                        number={number}
                                        index={times * value.length + colIndex}
                                        coordIndex={{rowIndex, colIndex}}
                                        leftClick={leftClicks}
                                        x={rowIndex}
                                        y={colIndex}
                                        startGame={appProps.gameStart}
                                        clickedBomb={appProps.clickedBomb}
                                        checkWinCallback={checkWinCallback}
                                    />
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Board


//
