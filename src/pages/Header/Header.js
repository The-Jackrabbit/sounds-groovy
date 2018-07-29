import React from 'react';
import './Header.css'
import sgobxlogo from '../../resources/sgobxlogo.svg';

const Header = () => {
    return (
        <div className="Header">
            <h1 className="App-title">Welcome to Sounds Groovy OBX!</h1>
            <header className="Header">
                <img src={sgobxlogo} className="Header-logo" alt="logo"/>
            </header>
        </div>
    )
}

export default Header;