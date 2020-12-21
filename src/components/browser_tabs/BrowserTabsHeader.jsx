import React from "react";
import css from "./BrowserTabs.module.css"
import BrowserTabCreator from "./BrowserTabCreator";

const BrowserTabsHeader = () =>
    <div className={css.tabs}>
        <BrowserTabCreator to={"/browser_tabs/"}         exact={true}   name={'Home'}/>
        <BrowserTabCreator to={"/browser_tabs/about"}    exact={false}  name={'About'}/>
        <BrowserTabCreator to={"/browser_tabs/features"} exact={false}  name={'Features'}/>
    </div>

export default BrowserTabsHeader;
