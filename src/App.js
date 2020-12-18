import './App.css';
import React from "react";
import {Redirect} from "react-router-dom";
import NavBar from "./components/nav_bar/NavBar";
import PomodoroTimer from "./components/pomodoro_timer/PomodoroTimer";
import MarkdownEditor from "./components/markdown_editor/MarkdownEditor";
import JustTimer from "./components/timer/JustTimer";
import BrowserTabs from "./components/browser_tabs/BrowserTabs";
import {RouteCreator} from "./components/creators/Creator";

function App(props) {
    return (
        <div className="App_header">
            <div className="Nav_bar">
                <NavBar/>
            </div>
            <div className="content">
                <RouteCreator   path={'/'}                  render={() => <Redirect to={'/home'}/>}/>
                <RouteCreator   path={'/home'}              render={() => props.hi}/>
                <RouteCreator   path={'/pomodoro_timer'}    render={() => <PomodoroTimer/>}/>
                <RouteCreator   path={'/just_timer'}        render={() => <JustTimer/>}/>
                <RouteCreator   path={'/markdown_editor'}   render={() => <MarkdownEditor/>}/>
                <RouteCreator   path={'/browser_tabs'}      render={() => <BrowserTabs/>}/>
            </div>
        </div>
    );
}

export default App;
