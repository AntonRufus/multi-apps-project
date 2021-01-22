import React, {useEffect, useState} from "react";
import css from "./Trivia.module.css"
import CategorySelector from "./components/CategorySelector";
import Scoreboard from "./components/Scoreboard";
import Question from "./components/Question";

const Trivia = () => {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        getQuestion();
    }, []);

    const getQuestion = () => {
        const url = 'https://opentdb.com/api.php?amount=1';

        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data.results[0]));
    };

    return (
        <div className={css.wrapper}>

            <div className={css.app}>
                {/* show the result modal ----------------------- */}
                {/* <ResultModal /> */}

                {/* question header ----------------------- */}
                <div className={css.question_header}>
                    <CategorySelector/>
                    <Scoreboard/>
                </div>

                {/* the question itself ----------------------- */}
                <div className={css.question_main}>
                    {question && <Question question={question}/>}
                </div>

                {/* question footer ----------------------- */}
                <div className={css.question_footer}>
                    <button>Go to next question 👉</button>
                </div>
            </div>

        </div>
    )
};

export default Trivia;
