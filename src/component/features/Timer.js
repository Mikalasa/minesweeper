export default class mineTimer {
    constructor(time, setTimer) {
        this.time = time
        this.setTimer = setTimer
        this.countingDown()
    }
    countingDown() {
        this.setTimer(() => {
            this.time --
        })
    }
}
