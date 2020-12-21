import React from "react";
import css from "./BrowserTabs.module.css"
import BrowserTab from "./BrowserTab";
import {NavLink, Route, Switch} from "react-router-dom";
import HomeTab from "./pages/HomeTab";
import AboutTab from "./pages/AboutTab";
import FeaturesTab from "./pages/FeaturesTab";

const BrowserTabs = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.browser}>
                <div className={css.tabs}>
                    <BrowserTab>
                        <NavLink to="/browser_tabs/" exact={true} activeClassName={css.isActive}>
                            Home
                        </NavLink>
                    </BrowserTab>
                    <BrowserTab>
                        <NavLink to="/browser_tabs/about" activeClassName={css.isActive}>
                            About
                        </NavLink>
                    </BrowserTab>
                    <BrowserTab>
                        <NavLink to="/browser_tabs/features" activeClassName={css.isActive}>
                            Features
                        </NavLink>
                    </BrowserTab>
                </div>
                <div className={css.viewport}>
                    <Switch>
                        <Route exact={true} path="/browser_tabs">       <HomeTab />      </Route>
                        <Route path="/browser_tabs/about">              <AboutTab />     </Route>
                        <Route path="/browser_tabs/features">           <FeaturesTab />  </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default BrowserTabs;
