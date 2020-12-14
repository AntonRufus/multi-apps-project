import React, {useState} from "react";
import css from "./PomodoroTimer.modul.css"
import {Route} from "react-router-dom";
import App from "../../App";

function padTime(time) {
    return time.toString().padStart(2, '0');
}

const PomodoroTimer = props => {
    const [title, setTitle] = useState('Let the countdown begin!');
    const [timeLeft, setTimeLeft] = useState(0.085 * 60);

    function startTimer() {
        setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft >= 1) return timeLeft - 1;

                //reset the timer
                return 0;
            });
        }, 1000);
    }

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(Math.floor(timeLeft - minutes * 60));

    return (
        <div className={css.wrapper}>
            <Route exact path='/home' render={() => <App/>}/>
            <h2>{title}</h2>
            <div className={css.timer}>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>
            <div className={css.buttons}>
                <button onClick={startTimer}>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    )
};

export default PomodoroTimer;
