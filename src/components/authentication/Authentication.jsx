import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import css from "./Authentication.module.css"
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./components/Dashboard";
import HomeAuth from "./components/HomeAuth";

const Authentication = () => {


    return (<div className={css.wrapper}>
            <Router>
                <div className={css.app}>
                    {/* site header */}
                    <SiteHeader/>

                    {/* routes */}
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="" exact={true}>
                            <HomeAuth/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Authentication;
