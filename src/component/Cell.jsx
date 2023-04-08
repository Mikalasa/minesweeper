import React from "react";

//custom js
import RightClick from "./features/RightClick";

function Cell(props) {
    var clicked = false
    var number = props.number
    var flagPath = './svg/flag.svg'

    if (props.number === 9) {
        var src = "./svg/bomb.svg"
    }

    function handleLeftClick(event) {
        //console.log('left click event:', event.target)
        if (clicked === false && !event.target.classList.contains('flag')) {
            clicked = true
            //console.log('props.coordIndex: ', props.coordIndex, 'cellIndex: ', props.index)
            props.leftClick(clicked, props, event, props.index)
        }
        if (clicked === true && props.startGame === false) {
            clicked = false
        }
    }

    async function handleRightClick(event) {
        event.preventDefault()
        await new RightClick(event, props.setFlagCounter)
        await props.checkWinCallback()
    }

    if (props.number === 9) {
        return(
            <div className={'cell' + ' ' + 'cell-hide' + ' ' + 'index-' + props.index + ' ' + 'bomb'} data-number={number} data-x={props.x} data-y={props.y}
                 onClick={handleLeftClick} onContextMenu={handleRightClick}><img className={'bomb' + ' ' + 'bomb-hide'} src={src}/><span></span><img className={'flag flag-hide'} src={flagPath}/></div>
        );
    } else {
        return(
            <div className={'cell' + ' ' + 'cell-hide' + ' ' + 'index-' + props.index} data-number={number} data-x={props.x} data-y={props.y}
                 onClick={handleLeftClick} onContextMenu={handleRightClick}><img src={src} /><span>{number}</span><img className={'flag flag-hide'} src={flagPath}/></div>
        );
    }
}

export default Cell