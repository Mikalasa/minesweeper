import config from "./Config";
class LeftClick{
    constructor(clicked, props, event) {
        this.clicked = clicked
        this.props = props
        this.event = event

        //this.checkLeftClick()
        this.check()
    }
    check() {
        let target = this.event.target
        if (!target.classList.contains('flag')) {
            this.checkLeftClick()
        }
    }
    checkLeftClick() {
        let target = this.event.target
        let flag = target.children[2]
        //console.log('left click flag:', flag)
        if (this.clicked === true && flag.classList.contains('flag-hide')) {
            let number = target.dataset.number
            if (number === '0') {
                target.classList.add('cell-opened')
                let x = Number(this.props.x)
                let y = Number(this.props.y)
                this.openAround(x, y)
            } else if (number !== '9' && flag.classList.contains('flag-hide')) {
                target.classList.add('cell-opened')
            } else {
                //console.log('bomb! you clicked!')
            }
            if (number === '9' && flag.classList.contains('flag-hide')) {
                target.classList.add('bomb-clicked')
            }
        }
    }
    openAround(x, y) {
        let aroundCells = [];
        function processCell(dx, dy) {
            if (dx >= 0 && dx < config.gameBoard.row && dy >= 0 && dy < config.gameBoard.col) {
                let newCellClass = '.index-' + (dx * config.gameBoard.row + dy);
                let newCell = document.querySelector(`${newCellClass}`);
                aroundCells.push(newCell);
            }
        }
        processCell(x - 1, y - 1);
        processCell(x - 1, y);
        processCell(x - 1, y + 1);
        processCell(x, y - 1);
        processCell(x, y + 1);
        processCell(x + 1, y - 1);
        processCell(x + 1, y);
        processCell(x + 1, y + 1);

        aroundCells.forEach((item) => {
            let newAroundZeroCells = [];
            let number = item.dataset.number;
            let itemFlag = item.children[2];
            if (number !== '9' && !item.classList.contains('cell-opened') && itemFlag.classList.contains('flag-hide')) {
                item.classList.add('cell-opened');
                if (number === '0') {
                    newAroundZeroCells.push(item);
                }
            }

            newAroundZeroCells.forEach((item) => {
                let cell = item;
                let x = Number(cell.dataset.x);
                let y = Number(cell.dataset.y);
                this.openAround(x, y);
            });
        });
    }
}

export default LeftClick