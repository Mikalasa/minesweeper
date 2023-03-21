import React from "react";

//custom
import "../index.css"
import Cells from "./Cell";
import Utility from "./Utility";

function Board() {
    var R=9
    var L=9
    var M=10

    var cells = []
    var row = R
    var col = L
    var mines = M
    var squareArray = []

    function createCells() {
        var noMines = row * col - mines
        for (let i = 0; i < noMines; i++) {
            const numberOfNoMines = 0
            cells.push(numberOfNoMines)
        }
        for (let i = 0; i < mines; i++) {
            const numberOfMines = 9
            cells.push(numberOfMines)
        }
        shuffle(row, col, cells)
    }

    // random the mines
    function shuffle(row, col, cells) {
        for (let i = cells.length - 1; i >= 0; i --) {
            let randomIndex = Math.floor(Math.random() * (i + 1))
            let itemIndex = cells[randomIndex]
            cells[randomIndex] = cells[i]
            cells[i] = itemIndex
        }
        console.log("cells: ", cells, 'cellsLength: ', cells.length)
        squareArraySplite(cells, row, col)
        return cells
    }

    //init squareArray
    function squareArraySplite(cells, row, col) {
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            squareArray.push(sub)
        }
        //set number around the mines
        Utility.prototype.markedSquare(squareArray)
    }

    console.log("squareArray: ", squareArray, 'squareArrayLength: ', squareArray.length)
    createCells()

    return(
        <div className="board">
            {squareArray.map((value, index) => {
                console.log("value: ", value, "index: ", index)
                var times = index
                return(
                    value.map((number, index)=> {
                        return(
                            <Cells
                                number={number}
                                index={times * value.length + index}
                            />
                        )
                    })
                )
            })}
        </div>
    );
}

export default Board