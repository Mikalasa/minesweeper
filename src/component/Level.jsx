import React, { useState, useEffect } from "react";

//custom JS
import config from "./features/Config";
function Level(appProps) {

    function handleLevel(event) {
        // if (event.target.classList.contains('easiest')) {
        //     appProps.setConfigGame(config.est)
        //     appProps.restartGame()
        // }
        // if (event.target.classList.contains('normal')) {
        //     appProps.setConfigGame(config.nor)
        //     appProps.restartGame()
        // }
        // if (event.target.classList.contains('intermediate')) {
        //     appProps.setConfigGame(config.int)
        //     appProps.restartGame()
        // }
        // if (event.target.classList.contains('expert')) {
        //     appProps.setConfigGame(config.exp)
        //     appProps.restartGame()
        // }
        // console.log("Target:", event.target)
        let target = event.target
        appProps.level(target)
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