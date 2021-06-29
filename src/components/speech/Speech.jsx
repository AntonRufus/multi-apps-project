import React, { useState, useEffect } from "react";
import TimerSlot from "./TimerSlot";
import { useStopwatch } from "react-timer-hook";
import { useSpeechSynthesis } from "react-speech-kit";
import css from "./Speech.module.css";

const Speech = () => {
  const [timers, setTimers] = useState([
    { time: 2, text: "abracadabra" },
    { time: 5, text: "awsome" },
    { time: 8, text: "hello" },
  ]);
  const { seconds, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });
  const { speak, speaking, supported } = useSpeechSynthesis();

  const updateTimers = (index, time, text) => {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  };

  const addTimer = () => {
    const newTimers = [...timers, { time: 10, text: "abcdefg" }];
    setTimers(newTimers);
  };

  useEffect(() => {
    const foundTimer = timers.find((timer) => timer.time === seconds);

    // speak to text
    if (foundTimer) speak({ text: foundTimer.text });

    // checl to see if seconds is greater than last timers time
    if (seconds > timers[timers.length - 1].time) pause();
  }, [timers, seconds]);

  if (!supported) <div>Your browser is not supported. Sorry.</div>;

  return (
    <div className={css.wrapper}>
      <div className={css.app}>
        <h2>Talk the talk</h2>

        <div className={css.timers}>
          {/* timers go here */}
          {timers.map((timer, index) => (
            <TimerSlot
              key={index}
              index={index}
              timer={timer}
              updateTimers={updateTimers}
            />
          ))}

          <button className={css.add_button} onClick={addTimer}>
            Add
          </button>
        </div>

        {/* seconds */}
        <h2>{seconds}</h2>

        <div className={css.buttons}>
          {!isRunning && (
            <button className={css.start} onClick={start}>
              Start
            </button>
          )}

          {isRunning && (
            <button className={css.pause} onClick={pause}>
              Pause
            </button>
          )}

          {!isRunning && (
            <button className={css.stop} onClick={reset}>
              Restart
            </button>
          )}

          {speaking && <p>I'm speacking ...</p>}
        </div>
      </div>
    </div>
  );
};

export default Speech;
