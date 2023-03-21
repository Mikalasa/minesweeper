import React from "react";

//custom
import "../index.css"

function Cell(props) {
    if (props.number === 9) {
        var src = "./Svgs/bomb.svg"
    }

    if (props.number !== 9) {
        var number = props.number
    }

    return(
        <div className="cell" index={props.index}><img src={src} /><span>{number}</span></div>
    );
}

export default Cell