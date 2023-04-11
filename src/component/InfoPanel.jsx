import React from 'react';

//custom React
import Timer from "./Timer";
import FlagCounter from "./FlagCounter";

function InfoPanel(appProps) {

    function clickEmoji() {
        if (appProps.lose === true) {
            appProps.restartGame()
        }
    }

    return(
        <div>
            <div id="messageScreen" className="message">{appProps.message}</div>
            <div className="header">
                <FlagCounter
                    lose={appProps.lose}
                />
                <div id="js-smiley" className="smiley">
                    <img onClick={clickEmoji} src={appProps.emoji} className="emoji normal"/>
                </div>
                <Timer
                    onTimeUp={appProps.onTimeUp}
                    gameStart={appProps.gameStart}
                />
            </div>
        </div>
    )
}
export default InfoPanel