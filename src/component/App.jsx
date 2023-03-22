//React
import React from "react";

//custom
import Board from "./Board"
import Info from "./Info";
import Test from "./test";

function App() {
    return (
        <div id="canvas">
            <Info />
            <Board />
            {/*<Test />*/}
        </div>

    );
}

export default App;
