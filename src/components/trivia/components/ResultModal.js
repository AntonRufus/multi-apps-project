import React from 'react';
import css from "../Trivia.module.css"

export default function ResultModal() {
    return (
        <div className={css.result_modal}>
            <div className="overlay"/>
            <div className="result-modal-content">
                <h3>
                    👊👊👊
                    <br/>
                    YOU WON!
                </h3>

                <h3>
                    😟😢😟
                    <br/>
                    YOU LOST!
                </h3>

                <div className={css.correct_answer}>
                    <small>The correct answer was:</small>
                    <br/>
                    <strong>Answer here</strong>
                </div>

                <button>Go to next question 👉</button>
            </div>
        </div>
    );
}
