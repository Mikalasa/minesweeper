import React from "react";

function Info() {
    return(
        <div>
            <div id="messageScreen" className="message"> Mine Sweeper</div>
            <div className="header">
                <div id="minecounter" className="counter">
                    <div id="ConutNumber">10</div>
                </div>
                <div id="js-smiley" className="smiley">
                    <img src="./Svgs/emoji.svg" className="emoji normal" id="emoji1"/>
                </div>
                <div id="timer" className="timerCounter">
                    <div id="TimerNumber">060</div>
                </div>
            </div>
        </div>
    )
}
export default Info