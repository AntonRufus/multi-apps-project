import React, {useContext, useEffect} from "react";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import css from "./Authentication.module.css"
import SiteHeader from "./components/SiteHeader";
import HomeAuth from "./components/HomeAuth";
import Dashboard from "./components/Dashboard";
import {Auth0Context} from "./contexts/auth0-context";

const Authentication = () => {
    const auth0 = useContext(Auth0Context);
    console.log(auth0);

    return (
        <div className={css.wrapper}>
            <Router>
                <div>
                    {/* site header */}
                    <SiteHeader/>

                    {/* routes */}
                    <Switch>
                        <Route path="/authentication/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="/authentication/home">
                            <HomeAuth/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Authentication;
