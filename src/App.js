import './App.css';
import React from "react";
import {Redirect, Route} from "react-router-dom";
import NavBar from "./components/nav_bar/NavBar";
import PomodoroTimer from "./components/pomodoro_timer/PomodoroTimer";
import MarkdownEditor from "./components/markdown_editor/MarkdownEditor";
import JustTimer from "./components/timer/JustTimer";
import BrowserTabs from "./components/browser_tabs/BrowserTabs";

function App(props) {
    return (
        <div className="App_header">
            <div className="Nav_bar">
                <NavBar/>
            </div>
            <div className="content">
                <Route exact path= { '/' }                  render= { () => <Redirect to={'/home'}/> }  />
                <Route exact path= { '/home' }              render= { () => props.hi }                  />
                <Route exact path= { '/pomodoro_timer' }    render= { () => <PomodoroTimer/> }          />
                <Route exact path= { '/just_timer' }        render= { () => <JustTimer/> }              />
                <Route exact path= { '/markdown_editor' }   render= { () => <MarkdownEditor/> }         />
                <Route exact path= { '/browser_tabs' }      render= { () => <BrowserTabs/> }            />
            </div>
        </div>
    );
}

export default App;
