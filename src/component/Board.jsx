import React from "react";

//custom
import Cells from "./Cell";

//custom JS
import config from "./features/Config";
import Game from "./features/Game";
import Utility from "./features/Utility";
import LeftClick from "./features/LeftClick";

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
        await appProps.setStartTimer(true)
        if (props.number === 9 && flag.classList.contains('flag-hide')) {
            appProps.setClickedBomb(true)
            appProps.gameOver()
        }
    }

    function checkWinCallback() {
        //console.log('appProps.callbackFunction():', appProps.callbackFunction())
        appProps.checkWin()
    }

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
                                        //setFlagCounter={appProps.setFlagCounter}
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
