import React from "react";
import css from "./BrowserTabs.module.css"
import BrowserTabsHeader from "./BrowserTabsHeader";
import BrowserTabsRouter from "./BrowserTabsRouter";

const BrowserTabs = () =>
    <div className={css.wrapper}>
        <div className={css.browser}>
            <BrowserTabsHeader/>
            <div className={css.viewport}>
                <BrowserTabsRouter/>
            </div>
        </div>
    </div>

export default BrowserTabs;
