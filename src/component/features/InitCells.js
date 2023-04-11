class InitCells {
    constructor(config) {
        this.gameBoard = config
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
        for (let j = 0; j < col; j ++) {
            let sub = cells.splice(0, row)
            noStartGameArray.push(sub)
        }
        //return noStartGameArray
    }
    init() {
        this.beforeStartedGameCells()
    }
}

export default InitCells