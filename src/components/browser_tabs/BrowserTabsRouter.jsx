import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeTab from "./pages/HomeTab";
import AboutTab from "./pages/AboutTab";
import FeaturesTab from "./pages/FeaturesTab";

const BrowserTabsRouter = () =>
    <Switch>
        <Route exact={true} path="/browser_tabs">   <HomeTab/>          </Route>
        <Route path="/browser_tabs/about">          <AboutTab/>         </Route>
        <Route path="/browser_tabs/features">       <FeaturesTab/>      </Route>
    </Switch>

export default BrowserTabsRouter;
