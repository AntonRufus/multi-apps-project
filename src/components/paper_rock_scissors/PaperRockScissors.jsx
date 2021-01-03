import React, {useEffect, useState} from "react";
import css from "./PaperRockScissors.module.css"
import Paper from "./icons/Paper";
import Rock from "./icons/Rock";
import Scissors from "./icons/Scissors";
import "./winLoseDraw.css";

const choices = [
    {id: 1, name: 'rock', component: Rock, losesTo: 2},
    {id: 2, name: 'paper', component: Paper, losesTo: 3},
    {id: 3, name: 'scissors', component: Scissors, losesTo: 1},
];

// 1. handle wins+losses
// 2. determine the winner based on choices
// 3. reset the game

const PaperRockScissors = () => {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [draws, setDraws] = useState(0);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [gameState, setGameState] = useState(null); //win, lose, draw

    useEffect(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    }, [])

    const handleUserChoice = (choice) => {
        const chosenChoice = choices.find(c => c.id === choice);
        setUserChoice(chosenChoice);

        // determine the winner
        if (chosenChoice.losesTo === computerChoice.id) {
            // lose
            setLosses(losses => losses + 1)
            setGameState('lose')
        } else if (computerChoice.losesTo === chosenChoice.id) {
            // win
            setWins(wins => wins + 1)
            setGameState('win')
        } else if (chosenChoice.id === chosenChoice.id) {
            // draw
            setDraws(draws => draws + 1)
            setGameState('draw')
        }
    }

    const renderComponent = (choice) => {
        const Component = choice.component;     // Paper, Rock, Scissors
        return <Component/>
    }

    return (
        <div className={css.wrapper}>
            {/* information goes here */}
            <div className={css.info}>
                <h2>Rock. Paper. Scissors</h2>

                {/* wins vs losses stats */}
                <div className={css.wins_losses}>
                    <div className={css.wins}>
                        <span className={css.number}>{wins}</span>
                        <span className={css.text}>{wins === 1 ? 'Win' : 'Wins'}</span>
                    </div>

                    <div className={css.losses}>
                        <span className={css.number}>{losses}</span>
                        <span className={css.text}>{losses === 1 ? 'Loss' : 'Losses'}</span>
                    </div>

                    <div className={css.draws}>
                        <span className={css.number}>{draws}</span>
                        <span className={css.text}>{draws === 1 ? 'Draw' : 'Draws'}</span>
                    </div>
                </div>
            </div>

            {/* the popup to show win/lose/draw */}
            {gameState && (
                <div className={`game_state ${gameState}`}>
                    <div>
                        <div className='game_state_content'>
                            <p>{renderComponent(userChoice)}</p>
                            {/*<p>You {gameState}!</p>*/}
                            {gameState === 'win' && <p>Congrats! You won!</p>}
                            {gameState === 'lose' && <p>Sorry! You lost!</p>}
                            {gameState === 'draw' && <p>Oh! You drew!</p>}
                            <p>{renderComponent(computerChoice)}</p>
                        </div>
                    </div>
                </div>
            )}

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
