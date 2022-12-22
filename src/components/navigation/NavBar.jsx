import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.module.css";

const NavBar = ({auth}) => {

    const navLink = ({isActive}) => isActive
        ? 'active-link'
        : 'default-link'

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" className={navLink}>Home</NavLink></li>
                    <li><NavLink to="/about-me" className={navLink}>Over mij</NavLink></li>
                    <li><NavLink to="/search-page-term" className={navLink}>Zoek</NavLink></li>
                    <li><NavLink to="/registration" className={navLink}>Registreer/Login</NavLink></li>
                    {auth && <li><NavLink to="/profile-page" className={navLink}>Profielpagina</NavLink></li>}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;