import config from "./Config";

function checkCounter(setFlagCounter) {
    let allInsertFlags = document.querySelectorAll('.flag-open')
    if (config.gameBoard.flags < allInsertFlags.length) {

    }
    else {
        setFlagCounter(config.gameBoard.flags - allInsertFlags.length)
    }
}

export default checkCounter