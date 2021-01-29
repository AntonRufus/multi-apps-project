import React from 'react';
import css from "../Authentication.module.css"

const HomeAuth = () => {
    return (
        <div className={`${css.page} ${css.home}`}>
            <div>
                <img src='https://cdn0.iconfinder.com/data/icons/famous-character-vol-2-colored/48/JD-41-512.png'
                     alt="Gandalf"/>
                <h2>You Shall Not Pass!!!</h2>
            </div>
        </div>
    );
}

export default HomeAuth;
