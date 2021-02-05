import React from "react";
import {Route} from "react-router-dom";
import {useAuth0} from "../contexts/auth0-context";
import Dashboard from "./Dashboard";

export default function PrivateRoute({children, ...rest}) {
    const {isAuthenticated, user, login} = useAuth0();

    if (!isAuthenticated && !user) login();

    return <Route {...rest}>{children}</Route>;
}

export function HomeRoute({children, ...rest}) {
    const {isAuthenticated, user} = useAuth0();

    if (!isAuthenticated && !user) return <Route {...rest}>{children}</Route> else return <Route  path="/authentication/dashboard"><Dashboard/></Route>;
}
