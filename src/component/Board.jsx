import React, { useState } from "react";

//custom
import "../index.css"
import Cells from "./Cell";
import Game from "./features/Game";
import Utility from "./features/Utility";
import InitCells from "./features/InitCells";
import config from "./features/Config";

function Board() {

    const [gameStart, setGameStart] = useState(false);
    const [squareArray, setSquareArray] = useState(config.gameBoard.noStartGameArray);
    new InitCells(config)

    function leftClicks(clicked, props) {
        if (clicked === true) {
            setGameStart(true)
        }
        new Game(gameStart, setSquareArray, props, config, Utility)
    }
    console.log("gameStart: ", gameStart, "updateSquareArray: ", squareArray)

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
                            />
                        )
                    })
                )
            })}
        </div>
    );
}

export default Board