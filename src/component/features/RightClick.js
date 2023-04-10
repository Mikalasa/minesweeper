import config from "./Config";
class RightClick {
    constructor(event) {
        this.event = event
        this.countFlag()
    }
    countFlag() {
        let allFlags = document.querySelectorAll('.flag')
        let allInsertedFlag = []
        allFlags.forEach((item) => {
            if (item.classList.contains('flag-open')) {
                allInsertedFlag.push(item)
            }
        })
        this.insert(allInsertedFlag)
    }
    insert(allInsertedFlag) {
        let target = this.event.target
        if (target.tagName !== 'DIV') {
            let newTarget = target.parentElement
            if (!newTarget.classList.contains('cell-opened')){
                let flag = newTarget.children[2]
                if (!flag.classList.contains('flag-open') && config.gameBoard.flags > allInsertedFlag.length) {
                    flag.classList.add('flag-open')
                } else {
                    flag.classList.remove('flag-open')
                }
            }
        } else {
            if (!target.classList.contains('cell-opened')) {
                let flag = target.children[2]
                if (!flag.classList.contains('flag-open') && config.gameBoard.flags > allInsertedFlag.length) {
                    flag.classList.add('flag-open')
                } else {
                    flag.classList.remove('flag-open')
                }
            }
        }
    }
}

export default RightClick