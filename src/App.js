import './App.css';
import React from "react";
import {Redirect, Route} from "react-router-dom";
import NavBar from "./components/nav_bar/NavBar";
import PomodoroTimer from "./components/pomodoro_timer/PomodoroTimer";
import MarkdownEditor from "./components/markdown_editor/MarkdownEditor";
import Timer from "./components/timer/Timer.jsx";

function App(props) {
    return (
        <div className="App_header">
            <div className="Nav_bar">
                <NavBar/>
            </div>
            <div className="content">
                <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
                <Route exact path='/home' render={() => props.hi}/>
                <Route exact path='/pomodoro_timer' render={() => <PomodoroTimer/>}/>
                <Route exact path='/timer' render={() => <Timer/>}/>
                <Route exact path='/markdown_editor' render={() => <MarkdownEditor/>}/>
            </div>
        </div>
    );
}

export default App;
