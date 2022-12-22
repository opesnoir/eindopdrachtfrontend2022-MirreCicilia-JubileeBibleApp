import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./Navigation.module.css";

// Nog toevoegen: een functie om de login state en authenticatie te controleren.
// const navigate = useNavigate()
//
//     function hanleLogin () {
//         setAuth (true)
//         navigate("/profile-page")
//     }

const Navigation = ({auth}) => {

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/"
                                 className={({isActive}) => isActive ? "active--Link" : "default--link"}>Home</NavLink>
                    </li>
                    <li><NavLink to="/about-me" className={({isActive}) => isActive ? "active--Link" : "default--link"}>Over
                        mij</NavLink></li>
                    <li><NavLink to="/search-page-term"
                                 className={({isActive}) => isActive ? "active--Link" : "default--link"}>Zoek</NavLink>
                    </li>
                    <li><NavLink to="/registration"
                                 className={({isActive}) => isActive ? "active--Link" : "default--link"}>Registreer/Login</NavLink>
                    </li>
                    { auth &&  <li><NavLink to="/profile-page"
                                            className={({isActive}) => isActive ? "active--Link" : "default--link"}>Profielpagina</NavLink>
                    </li>}
                </ul>
            </nav>
        </>
    );
};

export default Navigation;