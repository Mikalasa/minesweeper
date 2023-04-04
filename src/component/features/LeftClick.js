import Config from "./Config";
class LeftClick{
    constructor(clicked, props) {
        this.clicked = clicked
        this.props = props

        this.checkLeftClick()
    }
    checkLeftClick() {
        if (this.clicked === true) {
            let indexNumber = this.props.index
            let index = 'index-' + indexNumber
            let allCells = document.querySelectorAll('.cell')
            allCells.forEach((item) => {
                if (item.classList.contains(index)) {
                    console.log('here is ', index)
                    let number = item.dataset.number
                    if (number == 0) {
                        item.classList.add('cell-opened')
                        let x = Number(this.props.x)
                        let y = Number(this.props.y)
                        this.openAround(x, y)
                    } else if (number != 9) {
                        item.classList.add('cell-opened')
                    } else {
                        console.log('bomb! you clicked!')
                    }
                }
            })
        }
    }
    openAround(x, y) {
        let aroundZeroCells = []
        let newAroundZeroCells = []
        //upper left
        if (x - 1 > -1 && y - 1 > -1) {
            let newCellClass = '.index-' + ((x - 1) * Config.gameBoard.row + (y - 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        //left
        if (x - 1 > -1) {
            let newCellClass = '.index-' + ((x - 1) * Config.gameBoard.row + y)
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        //lower left
        if (x - 1 > -1 && y + 1 < 9) {
            let newCellClass = '.index-' + ((x - 1) * Config.gameBoard.row + (y + 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        //upper
        if (y - 1 > -1) {
            let newCellClass = '.index-' + (x * Config.gameBoard.row + (y - 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        //lower
        if (y + 1 < 9) {
            let newCellClass = '.index-' + (x * Config.gameBoard.row + (y + 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        //upper right
        if (x + 1 < 9 && y - 1 > -1) {
            let newCellClass = '.index-' + ((x + 1) * Config.gameBoard.row + (y - 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        //right
        if (x + 1 < 9) {
            let newCellClass = '.index-' + ((x + 1) * Config.gameBoard.row + y)
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        //lower right
        if (x + 1 < 9 && y + 1 < 9) {
            let newCellClass = '.index-' + ((x + 1) * Config.gameBoard.row + (y + 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundZeroCells.push(newCell)
        }
        for (let i = 0; i < aroundZeroCells.length; i++) {
            //console.log('aroundZeroCells: ', aroundZeroCells)
            let cell = aroundZeroCells[i]
            let number = cell.dataset.number
            console.log("number: ", number, "type of number: ", typeof number, 'cell: ', cell)
            // if(number === '0'){
            //     console.log('cell = 0: ', cell)
            //     //console.log("number = 0: ", cell, "number: ", number, "type of number: ", typeof number)
            //     newAroundZeroCells.push(cell)
            // }
            // if (number === '9' || cell.classList.contains('cell-opened')) {
            //
            // } else {
            //     cell.classList.add('cell-opened')
            // }

        }
        console.log('newAroundZeroCells: ', newAroundZeroCells)
    }
}

export default LeftClick