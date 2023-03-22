import Utility from "./Utility";

class Game {
    constructor() {
        this.startSquareArray = []
    }
    createCells(clickedCellIndex, coordIndex, row, col, cells, mines, startSquareArray) {
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
        this.shuffle(row, col, cells, startSquareArray, clickedCellIndex, coordIndex)
    }

    // random the mines
    shuffle(row, col, cells, startSquareArray, clickedCellIndex, coordIndex) {
        for (let i = cells.length - 1; i >= 0; i --) {
            let randomIndex = Math.floor(Math.random() * (i + 1))
            let itemIndex = cells[randomIndex]
            cells[randomIndex] = cells[i]
            cells[i] = itemIndex
        }
        cells.splice(clickedCellIndex, 0, 0)
        this.squareArraySplite(cells, row, col, startSquareArray, coordIndex)
        return cells
    }

    //init squareArray
    squareArraySplite(cells, row, col, startSquareArray, coordIndex) {
        console.log("Game.startSquareArray: ", startSquareArray)
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            startSquareArray.push(sub)
        }
        //set number around the mines
        Utility.prototype.markedSquare(startSquareArray, coordIndex)
    }

}

export default Game