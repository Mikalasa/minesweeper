import config from "./Config";
export default class RightClick {
    constructor(event, setFlagCounter) {
        this.event = event
        this.setFlagCounter = setFlagCounter
        this.countFlag()
    }
    countFlag() {
        let allFlags = document.querySelectorAll('.flag')
        let allInsertedFlag = []
        allFlags.forEach((item) => {
            if (!item.classList.contains('flag-hide')) {
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
                if (flag.classList.contains('flag-hide') && config.gameBoard.flags > allInsertedFlag.length) {
                    flag.classList.remove('flag-hide')
                } else {
                    flag.classList.add('flag-hide')
                }
            }
        } else {
            if (!target.classList.contains('cell-opened')) {
                let flag = target.children[2]
                if (flag.classList.contains('flag-hide') && config.gameBoard.flags > allInsertedFlag.length) {
                    flag.classList.remove('flag-hide')
                } else {
                    flag.classList.add('flag-hide')
                }
            }
        }
        this.checkCounter()
    }
    checkCounter() {
        let allFlags = document.querySelectorAll('.flag')
        let insertedFlag = []
        allFlags.forEach((item) => {
            if (!item.classList.contains('flag-hide')) {
                insertedFlag.push(item)
            }
        })
        if (config.gameBoard.flags < insertedFlag.length) {

        } else {
            this.setFlagCounter(config.gameBoard.flags - insertedFlag.length)
        }
    }
}