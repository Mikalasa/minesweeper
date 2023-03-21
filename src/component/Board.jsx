import React, { useState } from "react";

//custom
import "../index.css"
import Cells from "./Cell";
import Utility from "./Utility";

function Board() {
    const [squareArray, setSquareArray] = useState([]);
    var initClick = 0

    var R=9
    var L=9
    var M=10

    var row = R
    var col = L
    var mines = M
    var cells = []
    var startSquareArray = []

    function beforeStartedCells() {
        var m = 0
        for (let i = 0; i < row * col; i++) {
            cells.push(m)
        }
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            squareArray.push(sub)
        }
        console.log("initSquareArray: ", squareArray)
    }

    function createCells(clickedCellIndex) {
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
        shuffle(row, col, cells, clickedCellIndex)
    }

    // random the mines
    function shuffle(row, col, cells, clickedCellIndex) {
        for (let i = cells.length - 1; i >= 0; i --) {
            let randomIndex = Math.floor(Math.random() * (i + 1))
            let itemIndex = cells[randomIndex]
            cells[randomIndex] = cells[i]
            cells[i] = itemIndex
        }
        cells.splice(clickedCellIndex, 0, 0)
        console.log("cells: ", cells, 'cellsLength: ', cells.length)
        squareArraySplite(cells, row, col)
        return cells
    }

    //init squareArray
    function squareArraySplite(cells, row, col) {
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            startSquareArray.push(sub)
        }
        //set number around the mines
        Utility.prototype.markedSquare(startSquareArray)
        console.log("MarkedStartSquareArray: ", startSquareArray, 'MarkedStartSquareArray: ', startSquareArray.length)
    }

    beforeStartedCells()
    function countClicks(clicked, clickedCellIndex) {
        if (clicked === true) {
            initClick = initClick + 1
        }
        if (initClick === 1) {
            createCells(clickedCellIndex)
            setSquareArray(startSquareArray)
        }
        console.log("numberOfClicked: ", initClick, "clicked: ", clicked, "clickedCellIndex: ", clickedCellIndex, "updateSquareArray: ", squareArray)
    }

    return(
        <div className="board">
            {squareArray.map((value, index) => {
                //console.log("value: ", value, "index: ", index)
                var times = index
                return(
                    value.map((number, index)=> {
                        return(
                            <Cells
                                number={number}
                                index={times * value.length + index}
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