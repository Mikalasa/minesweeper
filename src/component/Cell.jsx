import React from "react";

//custom
import "../index.css"

function Cell(props) {
    if (props.number === 9) {
        var src = "./Svgs/bomb.svg"
    }

    return(
        <div className="cell" index={props.index}><img src={src} /></div>
    );
}

export default Cell