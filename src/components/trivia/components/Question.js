import React from 'react';
import css from "../Trivia.module.css";
import shuffle from "lodash.shuffle";

export default function Question({question, answerQuestion}) {
    // const answers = [...question.incorrect_answers, question.correct_answer];
    const answers = shuffle([...question.incorrect_answers, question.correct_answer]);
    // console.log(question);
    // console.log(answers);

    return (
        <div className={css.question}>
            <h2 dangerouslySetInnerHTML={{__html: question.question}}/>
            <br/>
                {answers.map((answer, index) => (
                    <button dangerouslySetInnerHTML={{__html: answer}} key={index}
                            onClick={() => answerQuestion(answer)}/>
                    /*{answer}</button>*/
                ))}
        </div>
    );
}
