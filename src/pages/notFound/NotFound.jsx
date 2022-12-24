import React from 'react';
import styles from "./NotFound.module.css";
import imageRam from "../../assets/Ram-pexels-johannes-havn-3218340-2.jpg"
import {useNavigate} from "react-router-dom";


const NotFound = () => {

    const navigate = useNavigate()
    setTimeout(() => {
        navigate(-1)
    }, 3000)

    return (
        <>
            <section>
                <div className={styles.notfoundContainer}>
                    <div className={styles.notfoundContent}>
                        <div>
                            <h1 className={styles.notfoundItemTitle}> <span className={styles.rood404}>404 </span> | Pagina niet gevonden</h1>
                        </div>
                        <div>
                            <p className={styles.notfoundItemTekst}> De pagina die je zocht, kon niet worden gevonden.
                                Je wordt binnen 3 seconden teruggestuurd naar de vorige pagina.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <img className={styles.notfoundItemImg} src={imageRam} alt="Ram"/>
            </div>
        </>
    );
};

export default NotFound;
