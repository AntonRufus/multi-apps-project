import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import css from "../Authentication.module.css";
import {Auth0Context} from "../contexts/auth0-context";

const SiteHeader = () => {
    // const auth0 = useContext(Auth0Context);
    const {isAuthenticated, login, logout, user} = useContext(Auth0Context);

    return (
        <div className={css.site_header}>
            {/* stuff on the left */}
            <div>
                <Link to="/authentication/home">Home</Link>
                <Link to="/authentication/dashboard">Dashboard</Link>
            </div>

            {/* stuff on the right */}
            <div>
                {/*{!isAuthenticated && <button onClick={() =>  login()}>Login</button>}*/}
                {/*{ isAuthenticated && <button onClick={() => logout()}>Logout</button>}*/}
                {!isAuthenticated && <button onClick={login}>Login</ button>}
                {isAuthenticated && user && (
                    <>
                        <button>{user.nickname}</button>
                        <button onClick={logout}>Logout</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default SiteHeader;
