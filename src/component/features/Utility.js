class Utility{
    constructor() {

    }
    plus(array, x, y) {
        let n = array.length
        if (x >= 0 && x < n && y >= 0 && y < n) {
            if (array[x][y] !== 9) {
                array[x][y] += 1
            }
        }
    }

    markAround(array, i, j) {
        var x = i
        var y = j
        if (array[x][y] === 9) {
            this.plus(array, x - 1, y - 1)
            this.plus(array, x - 1, y)
            this.plus(array, x - 1, y + 1)
            this.plus(array, x, y - 1)
            this.plus(array, x, y + 1)
            this.plus(array, x + 1, y - 1)
            this.plus(array, x + 1, y)
            this.plus(array, x + 1, y + 1)
        }
    }

    markedSquare(startSquareArray, coordIndex) {
        for (let i = 0; i < startSquareArray.length; i++) {
            let line = startSquareArray[i]
            for (let j = 0; j < line.length; j++) {
                this.markAround(startSquareArray, i, j)
            }
        }
        //console.log('specific of squareArray: ', startSquareArray[coordIndex.rowIndex][coordIndex.colIndex])
        startSquareArray[coordIndex.rowIndex][coordIndex.colIndex] = 0
        return startSquareArray
    }
}

export default Utility





