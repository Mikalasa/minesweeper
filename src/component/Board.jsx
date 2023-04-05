import React, { useState } from "react";

//custom
import "../index.css"
import Cells from "./Cell";

//custom JS
import Game from "./features/Game";
import Utility from "./features/Utility";
import InitCells from "./features/InitCells";
import LeftClick from "./features/LeftClick";
import config from "./features/Config";

function Board(appProps) {

    if (appProps.gameStart === false) {
        new InitCells(config)
    }
    async function leftClicks (clicked, props) {
        if (clicked === true) {
            appProps.setGameStart(true)
            //setCellHide('cell-opened')
        }
        await new Game(appProps.gameStart, appProps.setSquareArray, props, config, Utility)
        await new LeftClick(clicked, props)
        if (props.number === 9) {
            appProps.setLose(true)
            appProps.clickedBomb(appProps.setSquareArray)
        }
    }

    console.log("gameStarted: ", appProps.gameStart, "updateSquareArray: ", appProps.squareArray)

    return(
        <div className="board">
            {appProps.squareArray.map((value, rowIndex) => {
                var times = rowIndex
                return(
                    value.map((number, colIndex)=> {
                        return(
                            <Cells
                                number={number}
                                index={times * value.length + colIndex}
                                coordIndex={{rowIndex, colIndex}}
                                leftClick={leftClicks}
                                x={rowIndex}
                                y={colIndex}
                                //hide={cellHide}
                            />
                        )
                    })
                )
            })}
        </div>
    );
}

export default Board