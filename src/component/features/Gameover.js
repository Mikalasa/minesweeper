class GameOver {
    constructor() {
        this.banClick()
    }
    banClick() {
        var allCells = document.querySelectorAll('.cell')
        allCells.forEach( (item) => {
            item.classList.add('ban')
        })
    }
    cleanClasses() {
        console.log('i am cleaning')
        var cells = document.querySelectorAll('.cell')
        cells.forEach((item) => {
            if (item.classList.contains('cell-opened')) {
                item.classList.remove('cell-opened')
            }
            if (item.classList.contains('ban')) {
                item.classList.remove('ban')
            }
        })
    }
}

export default GameOver