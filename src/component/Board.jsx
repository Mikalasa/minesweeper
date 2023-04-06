
//custom
import "../index.css"
import Cells from "./Cell";

//custom JS
import Game from "./features/Game";
import Utility from "./features/Utility";
import LeftClick from "./features/LeftClick";
import config from "./features/Config";

function Board(appProps) {

    async function leftClicks (clicked, props) {
        if (clicked === true) {
            appProps.setGameStart(true)
        }
        config.gameBoard.startSquareArray = []
        await new Game(appProps.gameStart, appProps.setSquareArray, props, config, Utility)
        await new LeftClick(clicked, props)
        if (props.number === 9) {
            appProps.clickedBomb()
        }
    }

    console.log("gameStarted: ", appProps.gameStart, "currentSquareArray: ", appProps.squareArray)

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
                            />
                        )
                    })
                )
            })}
        </div>
    );
}

export default Board