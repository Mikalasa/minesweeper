class GameOver {
    constructor() {
        this.allCells = document.querySelectorAll('.cell')
        this.banClick()
        this.banRightClick()
        this.showNoFlagBomb()
    }
    banClick() {
        this.allCells.forEach( (item) => {
            item.classList.add('ban')
        })
    }
    cleanClasses() {
        console.log('i am cleaning')
        this.allCells.forEach((item) => {
            if (item.classList.contains('cell-opened')) {
                item.classList.remove('cell-opened')
            }
            if (item.classList.contains('ban')) {
                item.classList.remove('ban')
            }
        })
        var openedFlags = document.querySelectorAll('.flag-open')
        openedFlags.forEach((item) => {
            item.classList.remove('flag-open')
        })
    }
    banRightClick() {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
    showNoFlagBomb() {
        this.allCells.forEach((item) => {
            if (item.classList.contains('bomb')) {
                let bomb = item.children[0]
                let flag = item.children[2]
                if (!flag.classList.contains('flag-open')) {
                    bomb.classList.remove('bomb-hide')
                }
            }
        })
    }
}

export default GameOver