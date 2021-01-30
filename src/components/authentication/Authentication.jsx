import React from "react";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import css from "./Authentication.module.css"
import SiteHeader from "./components/SiteHeader";
import HomeAuth from "./components/HomeAuth";
import Dashboard from "./components/Dashboard";
import {useAuth0} from "./contexts/auth0-context";
import PrivateRoute from "./components/PrivateRoute";

const Authentication = () => {
    const auth0 = useAuth0();
    console.log(auth0);

    /*if (auth0.isAuthenticated) {
        return <AuthenticatedApp/>
    }else  {
        return <UnAuthenticatedApp/>
    }*/

    return (
        <div className={css.wrapper}>
            <Router>
                <div>
                    {/* site header */}
                    <SiteHeader/>

                    {/* routes */}
                    <Switch>
                        <PrivateRoute path="/authentication/dashboard">
                            <Dashboard/>
                        </PrivateRoute>
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
