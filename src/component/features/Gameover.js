class GameOver {
    constructor() {
        this.allCell = document.querySelectorAll('.cell')
        this.flagedNoBombCell = []
        this.shouldStopFlick = false;
        this.banClick()
        this.banRightClick()
        this.showFlagNoBomb()

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
        var flags = document.querySelectorAll('.flag')
        flags.forEach((item) => {
            if (!item.classList.contains('flag-hide')) {
                item.classList.add('flag-hide')
            }
        })
    }
    banRightClick() {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
    showFlagNoBomb() {
        this.allCell.forEach((item) => {
            let itemFlag = item.children[2]
            if (!item.classList.contains('bomb') && !itemFlag.classList.contains('flag-hide')) {
                this.flagedNoBombCell.push(item)
            }
        })
        const flick = () => {
            if (this.flagedNoBombCell.length === 0 || this.shouldStopFlick) {
                console.log('jsinter:', this.flagedNoBombCell.length);
                return;
            }
            console.log('im am flicking')
            this.flagedNoBombCell.forEach((item) => {
                console.log('jsinter:', this.flagedNoBombCell);
                item.children[2].classList.add('flag-hide');
                item.classList.add('cell-opened');
                setTimeout(() => {
                    item.classList.remove('cell-opened');
                    item.children[2].classList.remove('flag-hide');
                }, 500);
            });

            setTimeout(flick, 1000);
        };

        flick();
    }
    stopShowFlagNoBomb() {
        this.flagedNoBombCell = [];
        console.log('stopShowFlagNoBomb:', this.flagedNoBombCell);
        this.shouldStopFlick = true;
        this.showFlagNoBomb()
    }
}

export default GameOver