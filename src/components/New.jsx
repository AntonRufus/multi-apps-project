import React from "react";
import css from "./New.modul.css"

const New = props => {
    return (<div className={css.wrapper}>
        <div>{props.some}</div>
        <p>{props.children}</p>
    </div>)
};
export default New;
