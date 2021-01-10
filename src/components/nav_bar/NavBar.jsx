import React from "react";
import {NavCreator} from "../creators/Creator";

const NavBar = () =>
    <div>
        <NavCreator     to={'/home'}                            title={'Home page'}/>
        <NavCreator     to={'/pomodoro_timer'}                  title={'Pomodoro Timer'}/>
        <NavCreator     to={'/just_timer'}                      title={'Just Timer'}/>
        <NavCreator     to={'/markdown_editor'}                 title={'Markdown Editor'}/>
        <NavCreator     to={'/browser_tabs'}                    title={'Browser Tabs'}/>
        <NavCreator     to={'/paper_rock_scissors'}             title={'Paper Rock Scissors'}/>
        {/*<NavCreator  to={'/moving_boxes'}                    title={'Moving Boxes'}/>*/}
        <NavCreator     to={'/infinite_image_gallery'}          title={'Infinite Gallery'}/>
        <hr/>
    </div>

export default NavBar;
