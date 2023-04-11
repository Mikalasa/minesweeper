import React, { useState, useEffect } from "react";

//custom JS
import config from "./features/Config";
function Level(appProps) {

   async function handleLevel(event) {
        if (event.target.classList.contains('easiest')) {
            config.est.noStartGameArray = []
            appProps.setConfigGame(config.est)
            appProps.setSquareArray(config.est.noStartGameArray)
            appProps.setInitGameEnable(true)
            appProps.initGame()
            appProps.handleReset()
        }
        if (event.target.classList.contains('normal')) {
            config.nor.noStartGameArray = []
            appProps.setConfigGame(config.nor)
            appProps.setSquareArray(config.nor.noStartGameArray)
            appProps.setInitGameEnable(true)
            appProps.initGame()
            appProps.handleReset()
        }
        if (event.target.classList.contains('intermediate')) {
            config.int.noStartGameArray = []
            appProps.setConfigGame(config.int)
            appProps.setSquareArray(config.int.noStartGameArray)
            appProps.setInitGameEnable(true)
            appProps.initGame()
            appProps.handleReset()
        }
        if (event.target.classList.contains('expert')) {
            config.exp.noStartGameArray = []
            await appProps.setConfigGame(config.exp)
            await appProps.setSquareArray(config.exp.noStartGameArray)
            await appProps.setInitGameEnable(true)
            await appProps.initGame()
            await appProps.restartGame()
            await appProps.handleReset()
        }
    }

    return(
        <div className="level">
            <div className="level-button easiest" onClick={handleLevel}>Easiest</div>
            <div className="level-button normal" onClick={handleLevel}>Normal</div>
            <div className="level-button intermediate" onClick={handleLevel}>Intermediate</div>
            <div className="level-button expert" onClick={handleLevel}>Expert</div>
        </div>
    )
}

export default Level