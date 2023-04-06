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
            //console.log("in init loop times:", i)
            cells.push(m)
        }
        for (let j = 0; j < col; j ++) {
            let sub = cells.splice(0, row)
            //console.log("in init sub:", sub, "col:", col)
            noStartGameArray.push(sub)
        }
        //console.log("in init noStartGameArray:", noStartGameArray)
        return noStartGameArray
    }

    init() {
        //console.log("noStartGameArray in Init:", this.gameBoard.noStartGameArray)
        this.beforeStartedGameCells()
    }
}

export default InitCells