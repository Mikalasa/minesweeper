import Utility from "./Utility";
import config from "./Config";

class Game {
    constructor() {
        this.row = config.gameBoard.row
    }
    beforeStartedGameCells(cells, noStartGameArray, row, col) {
        console.log("config: ", config)
        var m = 0
        for (let i = 0; i < row * col; i++) {
            cells.push(m)
        }
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            noStartGameArray.push(sub)
        }
        return noStartGameArray
    }
    startGame(clickedCellIndex, coordIndex, setSquareArray, gameStart, row, col, cells, mines, startSquareArray) {
        console.log('clickedCellIndex: ', clickedCellIndex)
        if (gameStart === false) {
            Game.prototype.createCells(clickedCellIndex, coordIndex, row, col, cells, mines, startSquareArray)
            setSquareArray(startSquareArray)
        }
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