import React from 'react'
import logo from '../../img/logo.svg';
import { NavLink  } from "react-router-dom";
// import styled from "styled-components";
import '../../scss/navbar.scss';

// function MyNavbar() {
//     return (
//         <header className="My-header">
//             <img src={logo} className="My-logo" alt="logo" width="190px" />
//             <p>
//                 Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//                 className="My-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Learn React
//             </a>
//         </header>
//     );
// }

const navbar = () => {
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

// styled(NavLink)`
// color: #fff;
// display: flex;
// align-items: center;
// text-decoration: none;
// padding: 0 1rem;
// height: 100%;
// cursor: pointer;
// &.active {
//   color:black;
// }
// &:hover {
//   color: black;
// }
// `;

export default navbar;

// export default MyNavbar;