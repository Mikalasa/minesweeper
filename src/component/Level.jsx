import React, { useState, useEffect } from "react";

//custom JS
import config from "./features/Config";
function Level(appProps) {

    function handleLevel(event) {
        if (event.target.tagName !== 'DIV' ) {
            let newTarget = event.target.parentElement
            console.log("newTarget:", newTarget)
            if (newTarget.contains('normal')) {
                appProps.setConfigGame(config.nor)
            }
        }
        console.log("Target:", event.target)
    }

    return(
        <div className="level">
            <div className="level-button easiest" onClick={handleLevel}><span className={'lighting-text'}>Easiest</span></div>
            <div className="level-button normal" onClick={handleLevel}><span className={'lighting-text'}>Normal</span></div>
            <div className="level-button intermediate"><span className={'lighting-text'}>Intermediate</span></div>
            <div className="level-button expert"><span className={'lighting-text'}>Expert</span></div>
        </div>
    )
}

export default Level