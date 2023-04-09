import React, {useState} from "react";
import config from "./features/Config";

function FlagCounter(props) {

    const [flagCounter, setFlagCounter] = useState(config.gameBoard.flags);

    // useEffect(() => {
    //     let mm = 100
    //
    //     if (mm <= 0) {
    //         return;
    //     }
    //
    //     const timerId = setInterval(() => {
    //         setFlagCounter((prevCount) => prevCount - 1);
    //         mm --
    //     }, 1000);
    //
    //     return () => {
    //         clearTimeout(timerId);
    //     };
    // }, []);
    function counting() {
        console.log('I am counting in FlagCounter')
    }
    
    return(
        <div id="minecounter" className="counter">
            <div id="ConutNumber">{flagCounter}</div>
        </div>
    )
}

export default FlagCounter