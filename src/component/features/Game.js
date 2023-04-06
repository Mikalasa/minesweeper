import config from "./Config";

class Game {
    constructor(gameStart, setSquareArray, props, config, Utility) {
        this.gameBoard = config.gameBoard
        this.props = props
        this.gameStart = gameStart
        this.setSquareArray = setSquareArray
        this.coordIndex = this.props.coordIndex
        this.clickedCellIndex = this.props.clickedCellIndex
        this.cells = this.gameBoard.cells
        this.row = this.gameBoard.row
        this.col = this.gameBoard.col
        this.mines = this.gameBoard.mines
        this.startSquareArray = this.gameBoard.startSquareArray
        this.Utility = Utility

        this.startGame()
    }

    startGame() {
        if (this.gameStart === false) {
            this.createCells()
            this.setSquareArray(this.gameBoard.startSquareArray)
        }
    }

    createCells() {
        var noMines = this.row * this.col - this.mines - 1
        for (let i = 0; i < noMines; i++) {
            const numberOfNoMines = 0
            this.cells.push(numberOfNoMines)
        }
        for (let i = 0; i < this.mines; i++) {
            const numberOfMines = 9
            this.cells.push(numberOfMines)
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
        cells.splice(this.clickedCellIndex, 0, 0)
        this.squareArraySplite()
        return cells
    }

    //init squareArray
    squareArraySplite() {
        for (let i = 0; i < this.col; i ++) {
            let sub = this.cells.splice(0, this.row)
            this.startSquareArray.push(sub)
        }
        //set number around the mines
        this.Utility.prototype.markedSquare(this.startSquareArray, this.coordIndex)
    }
}

export default Game