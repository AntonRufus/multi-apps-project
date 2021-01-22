import React from 'react';
import css from "../Trivia.module.css";
import shuffle from "lodash.shuffle";

export default function Question({question}) {
    // const answers = [...question.incorrect_answers, question.correct_answer];
    const answers = shuffle([...question.incorrect_answers, question.correct_answer]);
    console.log(question);
    console.log(answers);

    return (
        <div className={css.question}>
            {/*<h2>Question Here</h2>*/}
            <h2 dangerouslySetInnerHTML={{__html: question.question}}/>

            {answers.map((answer, index) => (
                <button key={index}>{answer}</button>
            ))}
        </div>
    );
}
