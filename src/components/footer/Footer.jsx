import React from 'react';
import styles from "./Footer.module.css";
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <p>Meer Info:</p>
                    <Link className={styles.footerContentLink} to="/about-me">Jubilee BibleApp</Link>
                </div>
                <div className={styles.footerContainerTwo} >
                    <p>Invoegen iconen</p>
                    <p className={styles.footerContentCopy} >&copy; 2023</p>
                </div>
            </div>
        </>
    );
};

export default Footer;