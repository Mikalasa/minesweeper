import React, {useEffect} from "react";
import GameOver from "./Gameover";

function flagFlick() {
    useEffect(() => {
        if (flagFlicker === false) {
            return
        }
        if (initEnable === true) {
            new GameOver().cleanClasses()
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
    }, [flagFlicker, initEnable]);

    return(
        <div>

        </div>
    )
}

export default flagFlick
