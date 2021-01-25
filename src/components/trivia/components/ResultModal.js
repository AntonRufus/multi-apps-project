import React from 'react';
import css from "../Trivia.module.css"

export default function ResultModal({isCorrect, correctAnswer, handleNextQuestion}) {
    return (
        <div className={css.result_modal}>
            <div className={css.overlay}/>

            <div className={css.result_modal_content}>
                {isCorrect && <div className={css.is_correct}>
                    <h3>
                        👊👊👊
                        <br/>
                        YOU WON!
                    </h3>
                </div>}

                {!isCorrect && <div className={css.is_wrong}>
                    <h3>
                        😟😢😟
                        <br/>
                        YOU LOST!
                    </h3>

                    <div className={css.correct_answer}>
                        <small>The correct answer was:</small>
                        <br/><br/>
                        <strong dangerouslySetInnerHTML={{__html: correctAnswer}}/>
                        {/*{correctAnswer}</strong>*/}
                    </div>
                </div>}

                <button onClick={handleNextQuestion}>
                    Go to next question 👉
                </button>
            </div>
        </div>
    );
}
