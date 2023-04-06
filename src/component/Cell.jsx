import React from "react";

//custom
import "../index.css"

function Cell(props) {
    var clicked = false
    var number = props.number

    if (props.number === 9) {
        var src = "./Svgs/bomb.svg"
    }

    function handleClick() {
        if (clicked === false) {
            clicked = true
            //console.log('props.coordIndex: ', props.coordIndex, 'cellIndex: ', props.index)
            props.leftClick(clicked, props)
        }
        if (clicked === true && props.startGame === false) {
            clicked = false
        }
    }

    if (props.number === 9) {
        return(
            <div className={'cell' + ' ' + 'cell-hide' + ' ' + 'index-' + props.index + ' ' + 'bomb'} data-number={number} data-x={props.x} data-y={props.y}
                 onClick={handleClick}><img src={src} /><span></span></div>
        );
    } else {
        return(
            <div className={'cell' + ' ' + 'cell-hide' + ' ' + 'index-' + props.index} data-number={number} data-x={props.x} data-y={props.y}
                 onClick={handleClick}><img src={src} /><span>{number}</span></div>
        );
    }
}

export default Cell