import React from "react";
import css from "./BrowserTabs.module.css"
import BrowserTab from "./BrowserTab";
import {NavLink} from "react-router-dom";

const BrowserTabCreator = props =>
    <BrowserTab>
        <NavLink to={props.to} exact={props.exact} activeClassName={css.isActive}>
            {props.name}
        </NavLink>
    </BrowserTab>

export default BrowserTabCreator;
