import React from 'react'
import { NavLink } from "react-router-dom";

import "../navbar-item/navitem.scss"
import "../../scss/index.scss"

// export default class NavItem extends Component {

    // constructor(props) {
    //     super(props);
    //     super.state = {
    //         active: false,
    //     };
    //     this.isActive = this.isActive.bind(this);
    // }

    // isActive(id) {
    //     this.setState(({ active }) => ({
    //         active: !active
    //     }))
    // }

    // render() {
    //     const {label, id} = this.props;
    //     const {active} = this.state;
    //     let classNames = "";
    //     if (active) {
    //         classNames += "active";
    //     }

    const NavItem = ({label,id}) =>{
        return (
            <li key={id}>
                <NavLink className="p-PTSan-15" to="/">{label}</NavLink>
            </li>
        )
    // }
}

export default NavItem;