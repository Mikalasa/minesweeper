import React, {useState} from "react";

//custom
import "../index.css"
import Cells from "./Cell";

//custom JS
import Game from "./features/Game";
import Utility from "./features/Utility";
import LeftClick from "./features/LeftClick";
import config from "./features/Config";

function Board(appProps) {

    async function leftClicks (clicked, props, event) {
        let target = event.target
        let flag = target.children[2]
        if (clicked === true) {
            appProps.setGameStart(true)
        }
        config.gameBoard.startSquareArray = []
        await appProps.setStartTimer(true)
        await new Game(appProps.gameStart, appProps.setSquareArray, props, config, Utility)
        await new LeftClick(clicked, props, event)
        if (props.number === 9 && flag.classList.contains('flag-hide')) {
            appProps.setClickedBomb(true)
            appProps.gameOver()
        }
    }

    //console.log("gameStarted: ", appProps.gameStart, "currentSquareArray: ", appProps.squareArray)

    return(
        <div className="board">
            {appProps.squareArray.map((value, rowIndex) => {
                var times = rowIndex
                return(
                    value.map((number, colIndex)=> {
                        return(
                            <Cells
                                number={number}
                                index={times * value.length + colIndex}
                                coordIndex={{rowIndex, colIndex}}
                                leftClick={leftClicks}
                                x={rowIndex}
                                y={colIndex}
                                startGame={appProps.gameStart}
                                clickedBomb={appProps.clickedBomb}
                                setFlagCounter={appProps.setFlagCounter}
                            />
                        )
                    })
                )
            })}
        </div>
    );
}

export default Board