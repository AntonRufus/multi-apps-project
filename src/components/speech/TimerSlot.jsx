import { useState } from "react";
import css from "./Speech.module.css";

const TimerSlot = ({ index, timer, updateTimers }) => {
  const [time, setTime] = useState(timer.time);
  const [text, setText] = useState(timer.text);

  const handleBlur = () => {
    updateTimers(index, time, text);
  };

  return (
    <form className={css.timer} key={index}>
      <input
        className={css.number}
        type="number"
        value={time}
        onChange={(e) => {
          setTime(Number(e.target.value));
          // setTime(+e.target.value);
        }}
        onBlur={handleBlur}
      />
      <input
        className={css.text}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onBlur={handleBlur}
      />
    </form>
  );
};

export default TimerSlot;
