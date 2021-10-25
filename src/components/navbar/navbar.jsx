import React from 'react'
import logo from '../../img/logo.svg';
import { NavLink  } from "react-router-dom";
import './navbar.scss';

const Navbar = () => {
    return (
        <header className="My-header">
            <img src={logo} className="My-logo" alt="logo" width="190px" />
            <ul className="nav-bar">
                <li>
                    <NavLink to="/">Головна</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Про нас</NavLink>
                </li>
                <li>
                    <NavLink to="/help">Хочу бути корисним!</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Контакти</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;