import React from 'react';
import css from "../Authentication.module.css"

const Dashboard = () => {
    return (
        <div className={`${css.page} ${css.dashboard}`}>
            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-2-colored/48/JD-44-512.png"
                     alt="Frodo"/>
                <h2>Welcome Human.</h2>
            </div>
        </div>
    );
}

export default Dashboard;
