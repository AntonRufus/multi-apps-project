import './App.css';
import React from "react";
import New from "./components/New";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <New some={'some'}>children</New>
            </header>
        </div>
    );
}

export default App;
