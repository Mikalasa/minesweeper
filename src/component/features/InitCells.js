class InitCells {
    constructor(config) {
        this.gameBoard = config.gameBoard
        this.init()
    }

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
        //console.log("this.gameBoard: ", this.gameBoard)
        return noStartGameArray
    }

    init() {
        this.beforeStartedGameCells()
    }
}

export default InitCells