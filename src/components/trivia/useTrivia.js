import {useCallback, useEffect, useState} from "react";

const useTrivia = () => {
    const [question, setQuestion] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('any');

    const getQuestion = useCallback(() => {
        let url = 'https://opentdb.com/api.php?amount=1';
        if (selectedCategory !== 'any') url += `&category=${selectedCategory}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data.results[0]));
    }, [selectedCategory]);

    useEffect(() => {
        getQuestion();
    }, [getQuestion, selectedCategory]);

    return {question, getQuestion, selectedCategory, setSelectedCategory};
}

export default useTrivia;
