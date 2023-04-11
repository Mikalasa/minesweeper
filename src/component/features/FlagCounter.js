import config from "./Config";

function checkCounter(setFlagCounter, configGameFlags) {
    let allInsertFlags = document.querySelectorAll('.flag-open')
    if (configGameFlags < allInsertFlags.length) {

    }
    else {
        setFlagCounter(configGameFlags - allInsertFlags.length)
    }
}

export default checkCounter