import Utility from "./Utility";
import config from "./Config";

class Game {
    constructor(gameStart, setSquareArray, props) {
        this.gameBoard = config.gameBoard
        this.gameStart = gameStart
        this.setSquareArray = setSquareArray
        this.props = props
        this.init()
        this.showParamter()
    }
    // beforeStartedGameCells(cells, noStartGameArray, row, col) {
    //     var m = 0
    //     for (let i = 0; i < row * col; i++) {
    //         cells.push(m)
    //     }
    //     for (let i = 0; i < col; i ++) {
    //         let sub = cells.splice(0, row)
    //         noStartGameArray.push(sub)
    //     }
    //     return noStartGameArray
    // }

    beforeStartedGameCells() {
        var cells = this.gameBoard.cells
        var row = this.gameBoard.row
        var col = this.gameBoard.col
        var noStartGameArray = this.gameBoard.noStartGameArray
        var m = 0
        for (let i = 0; i < row * col; i++) {
            cells.push(m)
        }
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            noStartGameArray.push(sub)
        }
        console.log("this.gameBoard: ", this.gameBoard)
        return noStartGameArray
    }
    // startGame(clickedCellIndex, coordIndex, setSquareArray, gameStart, row, col, cells, mines, startSquareArray) {
    //     console.log('clickedCellIndex: ', clickedCellIndex)
    //     if (gameStart === false) {
    //         Game.prototype.createCells(clickedCellIndex, coordIndex, row, col, cells, mines, startSquareArray)
    //         setSquareArray(startSquareArray)
    //     }
    // }

    startGame() {
        this.createCells()
        this.setSquareArray(this.gameBoard.startSquareArray)
    }

    createCells() {
        this.gameBoard.cells = []
        var row = this.gameBoard.row
        var col = this.gameBoard.col
        var cells = this.gameBoard.cells
        var mines = this.gameBoard.mines
        var noMines = row * col - mines - 1
        for (let i = 0; i < noMines; i++) {
            const numberOfNoMines = 0
            cells.push(numberOfNoMines)
        }
        for (let i = 0; i < mines; i++) {
            const numberOfMines = 9
            cells.push(numberOfMines)
        }
        this.shuffle()
    }

    // random the mines
    shuffle() {
        var cells = this.gameBoard.cells
        for (let i = cells.length - 1; i >= 0; i --) {
            let randomIndex = Math.floor(Math.random() * (i + 1))
            let itemIndex = cells[randomIndex]
            cells[randomIndex] = cells[i]
            cells[i] = itemIndex
        }
        //cells.splice(clickedCellIndex, 0, 0)
        this.squareArraySplite()
        return cells
    }

    //init squareArray
    squareArraySplite(cells, row, col, startSquareArray, coordIndex) {
        //console.log("Game.startSquareArray: ", startSquareArray)
        for (let i = 0; i < col; i ++) {
            let sub = cells.splice(0, row)
            startSquareArray.push(sub)
        }
        //set number around the mines
        Utility.prototype.markedSquare(startSquareArray, coordIndex)
    }

    init() {
        if (this.gameStart === true) {
            console.log('this.gameStart: ', this.gameStart)
            console.log("this.props: ", this.props)
            this.startGame()
            this.gameStart = ""
        } else {
            this.beforeStartedGameCells()
        }
    }
    showParamter() {
        //console.log("this.gameStart: ", this.gameStart, "this.setSquareArray: ", this.setSquareArray, "this.props: ", this.props)
        console.log("this.props: ", this.props)
    }
}

export default Game