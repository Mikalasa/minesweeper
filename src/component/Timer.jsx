import React, { useState, useEffect } from "react";
import config from "./features/Config";

function Timer(props) {
    const [timer, setTimer] = useState(config.gameBoard.timer);

    useEffect(() => {
        if (props.startTimer === false) {
            return;
        }

        if (timer <= 0) {
            props.onTimeUp();
            return;
        }

        const timerId = setInterval(() => {
            setTimer((prevCount) => prevCount - 1);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [timer, props.startTimer, props.onTimeUp]);

    return(
        <div id="timer" className="timerCounter">
            <div id="TimerNumber">{timer}</div>
        </div>
    )
}

export default Timer