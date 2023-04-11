import React, { useState, useEffect } from "react";
function Timer(props) {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (props.gameStart === false) {
            return;
        }

        const timerId = setInterval(() => {
            setTimer((prevCount) => prevCount + 1);
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