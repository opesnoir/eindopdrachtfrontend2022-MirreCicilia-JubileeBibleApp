import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.css";
import JubileeLogo from "../../assets/JubileeBibleApp-transparant.png";

/*import {ReactComponent as UserIcon} from "../../assets/user-regular.svg";*/
/*import {ReactComponent as UserIcon} from "../../assets/user-125.svg"*/

const NavBar = ({auth}) => {

    const navLink = ({isActive}) => isActive
        ? 'active-link'
        : 'default-link'

    return (
        <>
            <nav>
                <div>
                <ul className="navbar-content">
                    <li><NavLink to="/" className={navLink}>Home</NavLink></li>
                    <li><NavLink to="/about-me" className={navLink}>Over mij</NavLink></li>
                    <img className={styles.navbarLogo} src={JubileeLogo} alt="Jubilee BibleApp Logo"/>
                    <li><NavLink to="/search-page-term" className={navLink}>Zoek</NavLink></li>
                    {/*<UserIcon className="user-icon"/>*/}
                    {/*<UserIcon/>*/}
                    <li><NavLink to="/registration" className={navLink}> Registreer / Login</NavLink></li>
                    {auth && <li><NavLink to="/profile-page" className={navLink}>Profielpagina</NavLink></li>}
                </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;