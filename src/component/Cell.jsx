import React from "react";

//custom
import "../index.css"
import RightClick from "./features/RightClick";

function Cell(props) {
    var clicked = false
    var number = props.number

    if (props.number === 9) {
        var src = "./Svgs/bomb.svg"
    }
    if (props.clickedBomb) {
        var className = ' '
    } else {
        var className = 'bomb-hide'
    }

    function handleClick(event) {
        console.log('left click event:', event.target)
        if (clicked === false) {
            clicked = true
            //console.log('props.coordIndex: ', props.coordIndex, 'cellIndex: ', props.index)
            props.leftClick(clicked, props, event)
        }
        if (clicked === true && props.startGame === false) {
            clicked = false
        }
    }

    function handleRightClick(event) {
        // if (props.startGame === true) {
        //     event.preventDefault()
        //     //console.log('right click event:', event.target)
        //     new RightClick(event, props.setFlagCounter)
        // }
        event.preventDefault()
        new RightClick(event, props.setFlagCounter)
    }

    if (props.number === 9) {
        return(
            <div className={'cell' + ' ' + 'cell-hide' + ' ' + 'index-' + props.index + ' ' + 'bomb'} data-number={number} data-x={props.x} data-y={props.y}
                 onClick={handleClick} onContextMenu={handleRightClick}><img src={src} className={className}/><span></span><img class='flag flag-hide' src='./Svgs/flag.svg'/></div>
        );
    } else {
        return(
            <div className={'cell' + ' ' + 'cell-hide' + ' ' + 'index-' + props.index} data-number={number} data-x={props.x} data-y={props.y}
                 onClick={handleClick} onContextMenu={handleRightClick}><img src={src} /><span>{number}</span><img className={'flag flag-hide'} src='./Svgs/flag.svg'/></div>
        );
    }
}

export default Cell