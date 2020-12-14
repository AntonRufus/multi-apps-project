import React from "react";
import css from "./MarkdownEditor.modul.css"
import {Route} from "react-router-dom";
import App from "../../App";

const MarkdownEditor = props => {
    return (<div className={css.wrapper}>
        <Route exact path='/' render={() => <App/>}/>
        <div>{props.some}</div>
        <p>{props.children}</p>
    </div>)
};
export default MarkdownEditor;
