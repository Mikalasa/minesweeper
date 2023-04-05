//custom JS

function InfoPanel(appProps) {
    function clickEmoji() {
        if (appProps.lose === true) {
            console.log('emoji if in')
            appProps.restartGame()
        }
    }

    return(
        <div>
            <div id="messageScreen" className="message">{appProps.message}</div>
            <div className="header">
                <div id="minecounter" className="counter">
                    <div id="ConutNumber">10</div>
                </div>
                <div id="js-smiley" className="smiley">
                    <img onClick={clickEmoji} src={appProps.emoji} className="emoji normal" id="emoji1"/>
                </div>
                <div id="timer" className="timerCounter">
                    <div id="TimerNumber">060</div>
                </div>
            </div>
        </div>
    )
}
export default InfoPanel