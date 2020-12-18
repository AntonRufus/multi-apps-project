import React, {useState, useRef} from "react";
import css from "./Timer.module.css"
import {useAlert} from "react-alert";

const padTime = time => {
    return time.toString().padStart(2, '0');
}

const Timer = () => {
    //Hooks
    const [title, setTitle] = useState('Timer is ready to go!');
    const [timeLeft, setTimeLeft] = useState(0);

    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const alert = useAlert();

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
                alert.show('Time is over'); // why 2 times????
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
        setTimeLeft(0);
        setHoursLeft(0);
        setMinutesLeft(0);
        setSecondsLeft(0);
    }

    //Math
    const hoursNumber = Math.floor(timeLeft / 3600);
    const hours = padTime(hoursNumber);
    const minutesNumber = Math.floor(timeLeft / 60 - hoursNumber * 60);
    const minutes = padTime(minutesNumber);
    const secondsNumber = Math.floor(timeLeft - hoursNumber * 3600 - minutesNumber * 60);
    const seconds = padTime(secondsNumber);

    function sumTimer() {
        const sum = Number(hoursLeft * 3600) + Number(minutesLeft * 60) + Number(secondsLeft);
        setTimeLeft(sum);
    }

    return (
        <div className={css.wrapper}>
            <h2>{title}</h2>
            <div>
                {!isRunning &&
                <div>hours: <input min={'0'} max={'23'} defaultValue={hoursNumber} type="number"
                                   onChange={event => setHoursLeft(event.target.value)}/>
                </div>}
                {!isRunning &&
                <div>minutes: <input min={'0'} max={'59'} defaultValue={minutesNumber} type="number"
                                     onChange={event => setMinutesLeft(event.target.value)}/>
                </div>}
                {!isRunning &&
                <div>seconds: <input min={'0'} max={'59'} defaultValue={secondsNumber} type="number"
                                     onChange={event => setSecondsLeft(event.target.value)}/>
                </div>}
                {!isRunning && <button onClick={sumTimer}>Set / Reset</button>}
            </div>
            <div className={css.timer}>
                <span>{hours}</span>
                <span>:</span>
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

export default Timer;
