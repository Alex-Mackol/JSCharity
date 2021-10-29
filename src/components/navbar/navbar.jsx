import React from 'react'
import logo from '../../img/logo.svg';
import NavItem from "../navbar-item/navitem"
import './navbar.scss';

const Navbar = () => {

    let maxId = 0;
    const itemProps = ["Головна", "Про нас", "Хочу бути корисним!", "Контакти"];
    let elements = itemProps.map((item) => {
        return (
            <NavItem label={item} id ={maxId++} />
        )
    });

    return (
        <header className="My-header">
            <div className="My-container container">
                <img src={logo} className="My-logo" alt="logo" width="180px" />
                <ul className="nav-bar">
                    {elements}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;