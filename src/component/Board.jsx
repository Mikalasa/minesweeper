import React, { useState } from "react";

//custom
import "../index.css"
import Cells from "./Cell";
import Game from "./Game";
import config from "./Config";

function Board() {
    var R=9
    var L=9
    var M=10

    var row = R
    var col = L
    var mines = M
    var cells = []
    var startSquareArray = []

    //Game.prototype.beforeStartedGameCells(cells, noStartGameArray, row, col)

    const [gameStart, setGameStart] = useState(false);
    const [squareArray, setSquareArray] = useState(config.gameBoard.noStartGameArray);
    new Game(gameStart, setSquareArray, 'props')

    function leftClicks(clicked, clickedCellIndex, coordIndex, props) {
        if (clicked === true) {
            setGameStart(true)
        }
        var game = new Game(gameStart, setSquareArray, props)
        game.showParamter()
        console.log("props: ", props, "type of props: ", props)
        //Game.prototype.startGame(clickedCellIndex, coordIndex, setSquareArray, gameStart, row, col, cells, mines, startSquareArray)
    }
    console.log("gameStart: ", gameStart, "updateSquareArray: ", squareArray)

    return(
        <div className="board">
            {squareArray.map((value, rowIndex) => {
                var times = rowIndex
                return(
                    value.map((number, colIndex)=> {
                        return(
                            <Cells
                                number={number}
                                index={times * value.length + colIndex}
                                coordIndex={{rowIndex, colIndex}}
                                leftClick={leftClicks}
                            />
                        )
                    })
                )
            })}
        </div>
    );
}

export default Board