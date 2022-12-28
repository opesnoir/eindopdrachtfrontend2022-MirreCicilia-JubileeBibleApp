import React, {useState} from "react";
import styles from "./Registration.module.css";
import imageSheep from "../../assets/register-sheep-pexels-trinity-kubassek-288621.jpg";
import {useForm} from "react-hook-form";
import PasswordChecklist from "react-password-checklist";


const Registration = () => {

    const {handleSubmit, register, formState: {errors}} = useForm();
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmPassword] = useState(" ")

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div>
                <div className={styles.registrationContainer}>
                    <div className={styles.registrationContent}>
                        <div>
                            <p className={styles.registrationInlogItemTekst}>Heb je al een account? Klik dan hier om in
                                te loggen</p>
                        </div>
                        <div>
                            <h1 className={styles.registrationItemTitle}>Registreren</h1>
                        </div>
                        <div>
                            <p className={styles.registrationItemTekst}>Wil je favorieten verzen opslaan? Registreer dan
                                je persoonlijke Jubilee account.</p>
                        </div>

                        <div className={styles.registrationFormContainer}>
                        <form className={styles.registrationFormContent} onSubmit={handleSubmit(onSubmit)} noValidate>
                            <label className={styles.registrationFormItem} htmlFor="name-field">
                                <input
                                    type="text"
                                    name="name"
                                    id="name-field"
                                    placeholder="Naam:"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Gebruikersnaam is verplicht"
                                        }
                                    })}
                                />
                                {errors.name && <p>{errors.name.message}</p>}
                            </label>
                            <label className={styles.registrationFormItem} htmlFor="email-field">
                                <input
                                    type="email"
                                    name="email"
                                    id="email-field"
                                    placeholder="Email:"
                                    {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Dit veld is verplicht",
                                            },
                                            pattern: {
                                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Gebruik een geldig emailadres"
                                            }
                                        }
                                    )}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </label>
                            <label className={styles.registrationFormItem} htmlFor="password-field">
                                <input
                                    type="password"
                                    name="password"
                                    id="password-field"
                                    placeholder="Wachtwoord:"
                                    onChange={e => setPassword(e.target.value)}
                                /></label>
                            <label className={styles.registrationFormItem} htmlFor="confirm-password-field">
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    id="password-field"
                                    placeholder="Bevestig wachtwoord:"
                                    onChange={e => setConfirmPassword(e.target.value)}
                                /></label>

                            <div className={styles.registrationItemPasswordChecklistContainer}>
                                <PasswordChecklist className={styles.registrationItemPasswordChecklistContent}
                                                   rules={["minLength", "specialChar", "number"]}
                                                   minLength={8}
                                                   value={password}
                                                   valueAgain={confirmPassword}
                                                   messages={{
                                                       minLength: "karakters",
                                                       specialChar: "leesteken",
                                                       number: "cijfer",
                                                   }}
                                />
                            </div>
                            <div className={styles.registrationItemButtonContainer}>
                                <button className={styles.registrationItemButton} type="submit">Registreren</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className={styles.registrationItemImg} src={imageSheep} alt="Sheep"/>
            </div>
        </>
    );
};

export default Registration;
