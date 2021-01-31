import React, {useEffect} from "react";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import css from "./Authentication.module.css"
import SiteHeader from "./components/SiteHeader";
import HomeAuth from "./components/HomeAuth";
import Dashboard from "./components/Dashboard";
import {useAuth0} from "./contexts/auth0-context";
import PrivateRoute from "./components/PrivateRoute";

const Authentication = () => {
    // const auth0 = useAuth0();
    const {getToken, user} = useAuth0();
    console.log(user);

    useEffect(() => {
        getUserData();
    }, []);

    // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
    // const userDetailsByIdUrl = `https://antonrufus.eu.auth0.com/api/v2/users/${user.sub}`;

    async function getUserData() {
        const token = await getToken();

        // fetch('https://antonrufus.eu.auth0.com/api/v2/?api_token=mytokengoeshere');
        // const response = await fetch(userDetailsByIdUrl,{
        const response = await fetch(`https://antonrufus.eu.auth0.com/api/v2/`, {
            headers: {Authorization: `Bearer ${token}`},
        });

        const data = await response.json();
        //we have data!
    }

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
