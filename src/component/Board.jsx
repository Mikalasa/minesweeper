import React, { useState } from "react";

//custom
import "../index.css"
import Cells from "./Cell";
import Utility from "./Utility";
import Game from "./Game";

function Board() {
    var R=9
    var L=9
    var M=10

    var row = R
    var col = L
    var mines = M
    var cells = []
    var noStartGameArray = []
    var startSquareArray = []

    function beforeStartedGameCells() {
        var m = 0
        for (let i = 0; i < row * col; i++) {
            cells.push(m)
        }
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            noStartGameArray.push(sub)
        }
    }

    beforeStartedGameCells()

    const [squareArray, setSquareArray] = useState(noStartGameArray);
    const [gameStart, setGameStart] = useState(false);

    function startGame(clickedCellIndex, coordIndex) {
        console.log('clickedCellIndex: ', clickedCellIndex)
        if (gameStart === false) {
            Game.prototype.createCells(clickedCellIndex, coordIndex, row, col, cells, mines, startSquareArray)
            setSquareArray(startSquareArray)
        }
    }

    function leftClicks(clicked, clickedCellIndex, coordIndex) {
        if (clicked === true) {
            setGameStart(true)
        }
        startGame(clickedCellIndex, coordIndex)
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