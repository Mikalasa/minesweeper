import React from "react";

//custom
import "../index.css"

function Cell(props) {
    var clicked = false

    if (props.number === 9) {
        var src = "./Svgs/bomb.svg"
    }

    if (props.number !== 9) {
        var number = props.number
    }

    function handleClick() {
        if (clicked === false) {
            clicked = true
            props.countClick(clicked, props.index)
        }
    }

    return(
        <div className="cell" index={props.index} onClick={handleClick}><img src={src} /><span>{number}</span></div>
    );
}

export default Cell