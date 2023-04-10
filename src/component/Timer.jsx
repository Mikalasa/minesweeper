import React, { useState, useEffect } from "react";
import config from "./features/Config";
function Timer(props) {
    const [timer, setTimer] = useState(config.gameBoard.timer);

    useEffect(() => {
        if (props.gameStart === false) {
            return;
        }

        if (timer <= 0) {
            props.onTimeUp();
        }

        const timerId = setInterval(() => {
            setTimer((prevCount) => prevCount - 1);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [timer, props.gameStart, setTimer]);

    return(
        <div id="timer" className="timerCounter">
            <div id="TimerNumber">{timer}</div>
        </div>
    )
}

export default Timer