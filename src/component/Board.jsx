import React, {useEffect} from "react";

//custom React
import Cells from "./Cell";

//custom JS
import Game from "./features/Game";
import Utility from "./features/Utility";
import LeftClick from "./features/LeftClick";

function Board(appProps) {

    async function leftClicks (clicked, props, event, clickedIndex) {
        let target = event.target
        let flag = target.children[2]
        if (clicked === true) {
            await appProps.setGameStart(true)
        }
        appProps.configGame.startSquareArray = []
        await new Game(appProps.gameStart, appProps.setSquareArray, props, appProps.configGame, Utility, clickedIndex)
        await new LeftClick(clicked, props, event, appProps.configGame)
        if (props.number === 9 && !flag.classList.contains('flag-open')) {
            appProps.setClickedBomb(true)
            appProps.gameOver()
        }
    }

    function checkWinCallback() {
        appProps.checkWin()
    }

    useEffect(() => {
        if (appProps.flagFlicker === false) {
            return
        }
        let allCells = document.querySelectorAll('.cell')
        let flagedNoBombCell =[]
        allCells.forEach((item) => {
            let itemFlag = item.children[2]
            if (!item.classList.contains('bomb') && itemFlag.classList.contains('flag-open')) {
                flagedNoBombCell.push(item)
            }
        })
        const showNoBombFlagFlick = setInterval(() => {
            flagedNoBombCell.forEach((item) => {
                item.children[2].classList.remove('flag-open');
                item.classList.add('cell-opened');
                setTimeout(() => {
                    item.classList.remove('cell-opened');
                    item.children[2].classList.add('flag-open');
                }, 500);
            });
        }, 1000);

        return () => {
            clearInterval(showNoBombFlagFlick);
        };
    }, [appProps.flagFlicker]);

    return(
        <div className="board">
            {appProps.squareArray.map((value, rowIndex) => {
                var times = rowIndex
                return(
                    <div className={"row" + " " + "row-" + rowIndex}>
                        {
                            value.map((number, colIndex)=> {
                                return(
                                    <Cells
                                        key={times * value.length + colIndex}
                                        number={number}
                                        index={times * value.length + colIndex}
                                        coordIndex={{rowIndex, colIndex}}
                                        x={rowIndex}
                                        y={colIndex}

                                        startGame={appProps.gameStart}
                                        clickedBomb={appProps.clickedBomb}
                                        configGameFlags={appProps.configGameFlags}

                                        checkWinCallback={checkWinCallback}
                                        leftClick={leftClicks}
                                    />
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Board


//
