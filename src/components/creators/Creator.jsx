import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import css from "./Creator.module.css";

export const NavCreator = props => {
    const [highlightStyle, setHighlightStyle] = useState({left: 0, top: 0, opacity: 0});
    const moveHighlight = (e) => {
        //update highlightStyle to move the highlight
        setHighlightStyle({
            left: e.nativeEvent.layerX - 5,
            top: e.nativeEvent.layerY - 5,
        });
    };
    const hideHighlight = () => {
        //update highlightStyle to move the highlight
        setHighlightStyle({
            opacity: 0,
        });
    };

    return  <div className={css.bgc} onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
                <div className={css.highlight} style={highlightStyle}/>
                <hr/>
                <NavLink activeClassName={css.isActive} to={props.to}> {props.title} </NavLink>
            </div>
}
