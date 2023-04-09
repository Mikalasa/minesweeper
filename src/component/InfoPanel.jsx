import React, {useEffect} from 'react';
import Timer from "./Timer";
import FlagCounter from "./FlagCounter";

function InfoPanel(appProps) {

    function clickEmoji() {
        if (appProps.lose === true) {
            appProps.restartGame()
        }
    }

    // useEffect(() => {
    //     if (appProps.startTimer === false) {
    //         return;
    //     }
    //
    //     if (appProps.timer <= 0) {
    //         appProps.onTimeUp();
    //         return;
    //     }
    //
    //     const timerId = setTimeout(() => {
    //         appProps.setTimer((prevCount) => prevCount - 1);
    //     }, 1000);
    //
    //     return () => {
    //         clearTimeout(timerId);
    //     };
    // }, [appProps.timer, appProps.startTimer,appProps.onTimeUp]);

    return(
        <div>
            <div id="messageScreen" className="message">{appProps.message}</div>
            <div className="header">
                {/*<div id="minecounter" className="counter">*/}
                {/*    <div id="ConutNumber">{appProps.flagCounter}</div>*/}
                {/*</div>*/}
                <FlagCounter
                    flagCounter={appProps.flagCounter}
                    setCallbackFunction={appProps.setCallbackFunction}
                />
                <div id="js-smiley" className="smiley">
                    <img onClick={clickEmoji} src={appProps.emoji} className="emoji normal" id="emoji1"/>
                </div>
                <Timer
                    startTimer={appProps.startTimer}
                    onTimeUp={appProps.onTimeUp}
                    time={appProps.timer}
                />
                {/*<div id="timer" className="timerCounter">*/}
                {/*    <div id="TimerNumber">{appProps.timer}</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default InfoPanel