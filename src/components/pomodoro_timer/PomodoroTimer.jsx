import React, {useState, useRef} from "react";
import css from "./PomodoroTimer.modul.css"
import {Route} from "react-router-dom";
import App from "../../App";

function padTime(time) {
    return time.toString().padStart(2, '0');
}

const PomodoroTimer = props => {
    //Hooks
    const [title, setTitle] = useState('Let the countdown begin!');
    const [timeLeft, setTimeLeft] = useState(0 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    //Start timer function
    function startTimer() {
        if (intervalRef.current !== null) return;
        setTitle('Started!');
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft >= 1) return timeLeft - 1;

                //reset the timer
                resetTimer();
                alert('Time is over'); // why 2 times????
                return 0;
            });
        }, 1000);
    }

    //Stop timer function
    function stopTimer() {
        if (intervalRef.current == null) return;

        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTitle('Stopped!');
        setIsRunning(false);
    }

    //Reset timer function
    function resetTimer() {
        setTitle('Ready to go one more round?');
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setTimeLeft(0 * 60);
    }

    //Math
    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(Math.floor(timeLeft - minutes * 60));

    return (
        <div className={css.wrapper}>
            <Route exact path='/home' render={() => <App/>}/>
            <h2>{title}</h2>
            {!isRunning && <input defaultValue={timeLeft} onChange={event => setTimeLeft(event.target.value)} type="number"/>}
            <div className={css.timer}>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>
            <div className={css.buttons}>
                {!isRunning && <button style={{backgroundColor: 'green'}} onClick={startTimer}>Start</button>}
                {isRunning && <button style={{backgroundColor: 'orange'}} onClick={stopTimer}>Stop</button>}
                <button style={{backgroundColor: 'red'}} onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
};

export default PomodoroTimer;
