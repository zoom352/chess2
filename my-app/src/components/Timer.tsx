import React, {FC, useRef, useState} from 'react';
import {Player} from "../models/Player";

interface TimerProps {
    currentPlayer: Player;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    function startTimer() {

    }

    function decrementWhiteTimer() {
        setBlackTime(prev => prev - 1)
    }

    function decrementBlackTimer() {
        setWhiteTime(prev => prev - 1)
    }

    return (
        <div>
            <div>
                <button onClick={restart}>Restart game</button>
            </div>
            <h2>черные - {blackTime}</h2>
            <h2>белые - {whiteTime}</h2>
        </div>
    );
};

export default Timer;