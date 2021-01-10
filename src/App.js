import './App.css';
import React from "react";
import NavBar from "./components/nav_bar/NavBar";
import AppRouter from "./AppRouter";

function App() {
    return (
        <div className="App_header">
            <div className="Nav_bar">
                <NavBar/>
            </div>

            <div className="content">
                <AppRouter/>
            </div>
        </div>
    );
}

export default App;
