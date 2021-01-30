import React, {useContext} from 'react';
import css from "../Authentication.module.css"
import {Auth0Context} from "../contexts/auth0-context";

const Dashboard = () => {
    const {user} = useContext(Auth0Context);

    return (
        <div className={`${css.page} ${css.dashboard}`}>
            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-2-colored/48/JD-44-512.png"
                     alt="Frodo"/>
                {user && <h2>Welcome {user.nickname}.</h2>}
                {!user && <h2>Welcome Human.</h2>}
            </div>
        </div>
    );
}

export default Dashboard;
