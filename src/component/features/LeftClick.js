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
                    //console.log('here is ', index)
                    let number = item.dataset.number
                    if (number === '0') {
                        item.classList.add('cell-opened')
                        let x = Number(this.props.x)
                        let y = Number(this.props.y)
                        this.openAround(x, y)
                    } else if (number !== '9') {
                        item.classList.add('cell-opened')
                    } else {
                        //console.log('bomb! you clicked!')
                    }
                    if (number === '9') {
                        //console.log("clicked bomb!")
                    }
                }
            })
        }
    }
    async openAround(x, y) {
        let aroundCells = []
        //upper left
        if (x - 1 > -1 && y - 1 > -1) {
            let newCellClass = '.index-' + ((x - 1) * Config.gameBoard.row + (y - 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //left
        if (x - 1 > -1) {
            let newCellClass = '.index-' + ((x - 1) * Config.gameBoard.row + y)
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //lower left
        if (x - 1 > -1 && y + 1 < 9) {
            let newCellClass = '.index-' + ((x - 1) * Config.gameBoard.row + (y + 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //upper
        if (y - 1 > -1) {
            let newCellClass = '.index-' + (x * Config.gameBoard.row + (y - 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //lower
        if (y + 1 < 9) {
            let newCellClass = '.index-' + (x * Config.gameBoard.row + (y + 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //upper right
        if (x + 1 < 9 && y - 1 > -1) {
            let newCellClass = '.index-' + ((x + 1) * Config.gameBoard.row + (y - 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //right
        if (x + 1 < 9) {
            let newCellClass = '.index-' + ((x + 1) * Config.gameBoard.row + y)
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //lower right
        if (x + 1 < 9 && y + 1 < 9) {
            let newCellClass = '.index-' + ((x + 1) * Config.gameBoard.row + (y + 1))
            let newCell = document.querySelector(`${newCellClass}`)
            aroundCells.push(newCell)
        }
        //console.log('aroundCells:', aroundCells)
        aroundCells.forEach( (item) => {
            var newAroundZeroCells = []
            let number = item.dataset.number
            if (number !== '9' && !item.classList.contains('cell-opened')) {
                //console.log('if in', 'item:', item)
                item.classList.add('cell-opened')
                if (number === '0') {
                    newAroundZeroCells.push(item)
                }
            }
            //console.log('newAroundZeroCells: ', newAroundZeroCells, 'newAroundZeroCells length: ', newAroundZeroCells.length)
            newAroundZeroCells.forEach( (item) => {
                let cell = item
                let x = Number(cell.dataset.x)
                let y = Number(cell.dataset.y)
                this.openAround(x, y)
            })
        })

    }
}

export default LeftClick