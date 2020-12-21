import React, {useState, useRef} from "react";
import css from "./JustTimer.module.css"
import {useAlert} from "react-alert";

const padTime = time => {
    return time.toString().padStart(2, '0');
}

const JustTimer = () => {
    //Hooks
    const [title, setTitle] = useState('Timer is ready to go!');
    const [timeLeft, setTimeLeft] = useState(0);

    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const intervalRef = useRef(null);

    const alert = useAlert();

    //Start timer function
    function startTimer() {
        if (intervalRef.current !== null) return;
        setTitle('Started!');
        setIsRunning(true);
        setIsShowing(true);
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
        setIsShowing(true);
    }

    //Reset timer function
    function resetTimer() {
        setTitle('Ready to go one more round?');
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setIsShowing(false);
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

    //sum func
    function sumTimer() {
        const sum = Number(hoursLeft * 3600) + Number(minutesLeft * 60) + Number(secondsLeft);
        setTimeLeft(sum);
    }

    return (
        <div className={css.wrapper}>
            <h2>{title}</h2>
            {!isShowing &&
            <div className={css.inputBlock}>
                <div className={css.timeSet}>
                    <span>hours: </span>
                    <input min={'0'} max={'23'}
                           defaultValue={hoursNumber} type="number"
                           onChange={event => setHoursLeft(event.target.value)}/>
                </div>
                <div className={css.timeSet}>
                    <span>minutes: </span>
                    <input min={'0'} max={'59'}
                           defaultValue={minutesNumber} type="number"
                           onChange={event => setMinutesLeft(event.target.value)}/>
                </div>
                <div className={css.timeSet}>
                    <span>seconds: </span>
                    <input min={'0'} max={'59'}
                           defaultValue={secondsNumber} type="number"
                           onChange={event => setSecondsLeft(event.target.value)}/>
                </div>
                <button className={css.buttonSum} onClick={sumTimer}>Set / Reset</button>
            </div>}
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

export default JustTimer;
