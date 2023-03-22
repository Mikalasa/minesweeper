import React, { useState } from "react";

//custom
import "../index.css"
import Cells from "./Cell";
import Utility from "./Utility";

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

    function createCells(clickedCellIndex, coordIndex) {
        cells = []
        var noMines = row * col - mines - 1
        for (let i = 0; i < noMines; i++) {
            const numberOfNoMines = 0
            cells.push(numberOfNoMines)
        }
        for (let i = 0; i < mines; i++) {
            const numberOfMines = 9
            cells.push(numberOfMines)
        }
        shuffle(row, col, cells, clickedCellIndex, coordIndex)
    }

    // random the mines
    function shuffle(row, col, cells, clickedCellIndex, coordIndex) {
        for (let i = cells.length - 1; i >= 0; i --) {
            let randomIndex = Math.floor(Math.random() * (i + 1))
            let itemIndex = cells[randomIndex]
            cells[randomIndex] = cells[i]
            cells[i] = itemIndex
        }
        cells.splice(clickedCellIndex, 0, 0)
        squareArraySplite(cells, row, col, coordIndex)
        return cells
    }

    //init squareArray
    function squareArraySplite(cells, row, col, coordIndex) {
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            startSquareArray.push(sub)
        }
        //set number around the mines
        Utility.prototype.markedSquare(startSquareArray, coordIndex)
    }

    function startGame(clickedCellIndex, coordIndex) {
        console.log('clickedCellIndex: ', clickedCellIndex)
        if (gameStart === false) {
            createCells(clickedCellIndex, coordIndex)
            setSquareArray(startSquareArray)
        }
    }

    function countClicks(clicked, clickedCellIndex, coordIndex) {
        if (clicked === true) {
            setGameStart(true)
        }
        startGame(clickedCellIndex, coordIndex)
    }
    console.log("gameStart: ", gameStart, "updateSquareArray: ", squareArray)

    return(
        <div className="board">
            {squareArray.map((value, rowIndex) => {
                //console.log("value: ", value, "index: ", index)
                var times = rowIndex
                return(
                    value.map((number, colIndex)=> {
                        return(
                            <Cells
                                number={number}
                                index={times * value.length + colIndex}
                                coordIndex={{rowIndex, colIndex}}
                                countClick={countClicks}
                            />
                        )
                    })
                )
            })}
        </div>
    );
}

export default Board