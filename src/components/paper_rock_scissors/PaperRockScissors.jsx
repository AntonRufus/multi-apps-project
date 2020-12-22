import React from "react";
import css from "./PaperRockScissors.module.css"
import Paper from "./icons/Paper";
import Rock from "./icons/Rock";
import Scissors from "./icons/Scissors";

const PaperRockScissors = () => {
    return <div className={css.wrapper}>
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
            <div />
            <div>Computer</div>

            {/* buttons for my choice */}
            <div>
                <button className={css.rock}>
                    <Rock />
                </button>
                <button className={css.paper}>
                    <Paper />
                </button>
                <button className={css.scissors}>
                    <Scissors />
                </button>
            </div>

            <div className={css.vs}>vs</div>

            {/* show the computer's choice */}
            <div>
                <button className={css.computer_choice}>?</button>
            </div>
        </div>
    </div>
}

export default PaperRockScissors;
