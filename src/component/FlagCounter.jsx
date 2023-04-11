import React, {useState, useEffect} from "react";

//custom JS
import config from "./features/Config";
import checkCounter from "./features/FlagCounter";

function FlagCounter(props) {

    const [flagCounter, setFlagCounter] = useState(config.gameBoard.flags);

    useEffect(() => {
        if (props.lose === true) {
            return
        }

        const timerId = setInterval(() => {
            checkCounter(setFlagCounter)
        }, 200);

        return () => {
            clearTimeout(timerId);
        };
    }, [setFlagCounter, props.lose]);

    return(
        <div id="minecounter" className="counter">
            <div id="ConutNumber">{flagCounter}</div>
        </div>
    )
}

export default FlagCounter