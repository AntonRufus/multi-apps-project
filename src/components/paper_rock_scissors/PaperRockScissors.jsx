import React, {useEffect, useState} from "react";
import css from "./PaperRockScissors.module.css"
import Paper from "./icons/Paper";
import Rock from "./icons/Rock";
import Scissors from "./icons/Scissors";

const choices = [
    {id: 1, name: 'rock', component: Rock},
    {id: 2, name: 'paper', component: Paper},
    {id: 3, name: 'scissors', component: Scissors},
];

// 1. handle wins+losses
// 2. determine the winner based on choices
// 3. reset the game

const PaperRockScissors = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);

    useEffect(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    }, [])

    const handleUserChoice = (choice) => {
        const chosenChoice = choices.find(c => c.id === choice);
        setUserChoice(chosenChoice);
    }

    return (
        <div className={css.wrapper}>
            {/* information goes here */}
            <div className={css.info}>
                <h2>Rock. Paper. Scissors</h2>

                {/* wins vs losses stats */}
                <div className={css.wins_losses}>
                    <div className={css.wins}>
                        <span className={css.number}>0</span>
                        <span className={css.text}>Wins</span>
                    </div>

                    <div className={css.losses}>
                        <span className={css.number}>0</span>
                        <span className={css.text}>Losses</span>
                    </div>
                </div>
            </div>

            {/* the popup to show win/loss/draw */}
            {/* <div className="game-state"></div> */}

            <div className={css.choices}>
                {/* choices captions */}
                <div>You</div>
                <div/>
                <div>Computer</div>

                {/* buttons for my choice */}
                <div>
                    <button className={css.rock} onClick={() => handleUserChoice(1)}>
                        <Rock/>
                    </button>
                    <button className={css.paper} onClick={() => handleUserChoice(2)}>
                        <Paper/>
                    </button>
                    <button className={css.scissors} onClick={() => handleUserChoice(3)}>
                        <Scissors/>
                    </button>
                </div>

                <div className={css.vs}>vs</div>

                {/* show the computer's choice */}
                <div>
                    <button className={css.computer_choice}>?</button>
                </div>
            </div>
        </div>
    )
}
export default PaperRockScissors;
