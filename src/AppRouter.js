import './App.css';
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import PomodoroTimer from "./components/pomodoro_timer/PomodoroTimer";
import MarkdownEditor from "./components/markdown_editor/MarkdownEditor";
import JustTimer from "./components/timer/JustTimer";
import BrowserTabs from "./components/browser_tabs/BrowserTabs";
import Home from "./components/home/Home"

const AppRouter = () =>
    <Switch>
        {/*<Route exact={true} path='/'>   <Home />            </Route>*/}
        <Route exact={true} path='/'> <Redirect to={'/home'}/> </Route>
        <Route path='/home'> <Home/> </Route>
        <Route path='/pomodoro_timer'> <PomodoroTimer/> </Route>
        <Route path='/just_timer'> <JustTimer/> </Route>
        <Route path='/markdown_editor'> <MarkdownEditor/> </Route>
        <Route path='/browser_tabs'> <BrowserTabs/> </Route>
    </Switch>

export default AppRouter;
