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
    reloadPage() {
        window.location.reload()
    }
}

export default GameOver