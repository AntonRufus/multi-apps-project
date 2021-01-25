import React, {useCallback, useEffect, useState} from "react";
import css from "./Trivia.module.css"
import CategorySelector from "./components/CategorySelector";
import Scoreboard from "./components/Scoreboard";
import Question from "./components/Question";
import ResultModal from "./components/ResultModal";

const Trivia = () => {
    const [question, setQuestion] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('any');
    const [isCorrect, setIsCorrect] = useState(null);
    // const [wrongScore, setWrongScore] = useState(0);
    // const [correctScore, setCorrectScore] = useState(0);

    const getQuestion = useCallback(() => {
        setIsCorrect(null);
        let url = 'https://opentdb.com/api.php?amount=1';
        if (selectedCategory !== 'any') url += `&category=${selectedCategory}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data.results[0]));
    }, [selectedCategory]);

    const handleQuestionAnswered = (answer) => {
        const isAnswerCorrect = answer === question.correct_answer;
        setIsCorrect(isAnswerCorrect);
        console.log(isCorrect);

        // if (isAnswerCorrect) setCorrectScore((score) => score + 1);
        // else setWrongScore((score) => score + 1);
    };

    useEffect(() => {
        getQuestion();
    }, [getQuestion, selectedCategory]);

    return (
        <div className={css.wrapper}>

            <div className={css.app}>
                {/* show the result modal ----------------------- */}
                {isCorrect !== null &&
                <ResultModal correctAnswer={question.correct_answer} isCorrect={isCorrect} getQuestion={getQuestion}
                             setIsCorrect={setIsCorrect}/>}
                {/* question header ----------------------- */}
                <div className={css.question_header}>
                    <CategorySelector chooseCategory={setSelectedCategory} category={selectedCategory}/>
                    {/*<Scoreboard wrong={wrongScore} correct={correctScore}/>*/}
                    <Scoreboard isCorrect={isCorrect}/>
                </div>

                {/* the question itself ----------------------- */}
                <div className={css.question_main}>
                    {question && <Question question={question} answerQuestion={handleQuestionAnswered}/>}
                </div>

                {/* question footer ----------------------- */}
                <div className={css.question_footer}>
                    <button onClick={getQuestion}>Go to next question</button>
                </div>
            </div>

        </div>
    )
};

export default Trivia;
