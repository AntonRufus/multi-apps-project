import React from 'react';
import css from "../Trivia.module.css"

export default function Scoreboard() {
    return (
        <div className={css.scoreboard}>
            <div className={css.wrong}>
                <strong>0</strong>
                <span>wrong</span>
            </div>
            <div className={css.correct}>
                <strong>0</strong>
                <span>correct</span>
            </div>
        </div>
    );
}
