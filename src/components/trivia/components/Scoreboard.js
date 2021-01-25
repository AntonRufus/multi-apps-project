import React, {useEffect, useState} from 'react';
import css from "../Trivia.module.css"
import {useAlert} from "react-alert";

export default function Scoreboard({isCorrect}) {
    const [wrong, setWrong] = useState(0);
    const [correct, setCorrect] = useState(0);
    const alert = useAlert();

    useEffect(() => {
        if (isCorrect === null) return;

        if (isCorrect) setCorrect((score) => score + 1);
        else setWrong((score) => score + 1);
    }, [isCorrect]);

    useEffect(() => {
        if (wrong === 1)
            alert.show('Keep pushing 🤦‍♂🤷'); // why 2 times???
    }, [wrong]);

    useEffect(() => {
        if (correct === 1)
            alert.show('Good job 🤪💥💪');
    }, [correct]);

    return (
        <div className={css.scoreboard}>
            <div className={css.wrong}>
                <strong>{wrong}</strong>
                <span>wrong</span>
            </div>
            <div className={css.correct}>
                <strong>{correct}</strong>
                <span>correct</span>
            </div>
        </div>
    );
}
