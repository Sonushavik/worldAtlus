import React from 'react'
import { NavLink } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
        const [show, setShow] = useState(false);

        const handleButtonToggle = () => {
                return setShow(!show);
              };

        const activeStyle= {
                color: "blue",
                fontWeight: "bold",
        }
              
  return (
    <header>
        <div className="container">
                <div className="grid navbar-grid">
                        <div className="logo">
                                <NavLink to='/'><h1>WorldAtlus</h1></NavLink>
                        </div>

                        <nav className={show ? "menu-mobile" : "menu-web"}>
                                <ul>
                                        <li>
                                                <NavLink to="/" style={({isActive}) => (isActive ? activeStyle: {})}>Home</NavLink>
                                        </li>
                                        <li>
                                                <NavLink to="/about" style={({isActive}) => (isActive ? activeStyle: {})}>About</NavLink>
                                        </li>
                                        <li>
                                                <NavLink to="/country" style={({isActive}) => (isActive ? activeStyle: {})}>Country</NavLink>
                                        </li>
                                        <li>
                                                <NavLink to="/contact" style={({isActive}) => (isActive ? activeStyle: {})}>Contact</NavLink>
                                        </li>
                                </ul>
                        </nav>
                        <div className="ham-menu">
                                <button onClick={handleButtonToggle}>
                                        <GiHamburgerMenu />
                                </button>       
                        </div>
                </div>
        </div>
    </header>
  )
}

export default Header
