import React from "react";
import styles from "./AboutMe.module.css";
import imageSheep from "../../assets/aboutme-sheep-pexels-arthur-swiffen-12550240.jpg";


const AboutMe = () => {
    return (
        <>
            <section>
                <div className={styles.aboutmeContainer}>
                    <div className={styles.aboutmeContent}>
                        <div>
                            <h1 className={styles.aboutmeItemTitle}>Over mij</h1>
                        </div>
                        <div>
                            <p className={styles.aboutmeItemTekst}>“Uw woord is een lamp voor mijn voet, en een licht op mijn pad.” (Psalm 119:105). Dat
                                schreef David om het woord van de HEERE te omschrijven. Voor mij betekent Gods woord
                                hetzelfde. Daarom heb ik ervoor gekozen voor mijn afstudeer opdracht deze
                                Bijbelapplicatie te bouwen.</p>

                                <p className={styles.aboutmeItemTekst}>
                                Mijn geloof in JHWH vormt het fundament van mijn bestaan en Zijn woord is mijn morele
                                kompas. En ik hoop dat de Bijbel jou net zo zal inspireren en dat het een licht voor jou
                                voeten mag zijn.</p>

                            <p className={styles.aboutmeItemTekstNaam}>Mirre</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <img className={styles.aboutmeItemImg} src={imageSheep} alt="Sheep"/>
            </div>
        </>
    );
};

export default AboutMe;