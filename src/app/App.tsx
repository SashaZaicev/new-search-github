import React from 'react';
import './App.scss';
import HeaderContainer from "../components/Header/HeaderContainer";
import {Routes} from "../components/routes/Routes";

function App() {

    return (
        <div className="App">
                <HeaderContainer/>
                <Routes/>
        </div>
    );
}

export default App;
