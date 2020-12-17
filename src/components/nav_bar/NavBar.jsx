import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <hr/>
            <NavLink to='/home'>Home page</NavLink>
            <hr/>
            <NavLink to='/pomodoro_timer'>Pomodoro Timer </NavLink>
            <hr/>
            <NavLink to='/markdown_editor'>Markdown Editor</NavLink>
            <hr/>
            <NavLink to='/timer'>Timer</NavLink>
            <hr/>
        </div>
    );
}

export default NavBar;
