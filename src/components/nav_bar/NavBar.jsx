import React from "react";
import {NavCreator} from "../creators/Creator";

const NavBar = () =>
    <div>
        <NavCreator     to={'/home'}                            title={'Home page'}/>
        <NavCreator     to={'/pomodoro_timer'}                  title={'Pomodoro Timer'}/>
        <NavCreator     to={'/just_timer'}                      title={'Just Timer'}/>
        <NavCreator     to={'/markdown_editor'}                 title={'Markdown Editor'}/>
        <NavCreator     to={'/browser_tabs'}                    title={'Browser Tabs'}/>
        <NavCreator     to={'/paper_rock_scissors'}             title={'RPS  ✊ 🤚 🖖'}/>
        <NavCreator     to={'/infinite_image_gallery'}          title={'Infinite Gallery'}/>
        <NavCreator     to={'/trivia'}                          title={'Trivia'}/>
        {/*<NavCreator  to={'/moving_boxes'}                    title={'Moving Boxes'}/>*/}
        <hr/>
    </div>

export default NavBar;
