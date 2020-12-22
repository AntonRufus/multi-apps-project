import React from "react";
import {NavCreator} from "../creators/Creator";

const NavBar = () =>
    <div>
        <NavCreator to={'/home'} title={'Home page'}/>
        <NavCreator to={'/pomodoro_timer'} title={'Pomodoro Timer'}/>
        <NavCreator to={'/just_timer'} title={'Just Timer'}/>
        <NavCreator to={'/markdown_editor'} title={'Markdown Editor'}/>
        <NavCreator to={'/browser_tabs'} title={'Browser Tabs'}/>
        <NavCreator to={'/paper_rock_scissors'} title={'Paper Rock Scissors'}/>
        <hr/>
    </div>

export default NavBar;
