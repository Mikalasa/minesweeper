import React, { useState } from "react";

//custom
import "../index.css"
import Cells from "./Cell";
import Game from "./features/Game";
import Utility from "./features/Utility";
import InitCells from "./features/InitCells";
import LeftClick from "./features/LeftClick";
import config from "./features/Config";

function Board() {

    const [gameStart, setGameStart] = useState(false);
    const [squareArray, setSquareArray] = useState(config.gameBoard.noStartGameArray);
    //const [cellHide, setCellHide] = useState('cell-hide')
    new InitCells(config)

    async function leftClicks (clicked, props) {
        if (clicked === true) {
            setGameStart(true)
            //setCellHide('cell-opened')
        }
        await new Game(gameStart, setSquareArray, props, config, Utility)
        await new LeftClick(clicked, props)
    }

    console.log("gameStarted: ", gameStart, "updateSquareArray: ", squareArray)

    return(
        <div className="board">
            {squareArray.map((value, rowIndex) => {
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