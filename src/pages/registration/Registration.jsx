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
                <div>
                    <div>
                        <h1>Registreren</h1>
                    </div>
                    <div>
                        <p>Wil je favorieten verzen opslaan? Registreer dan je persoonlijke Jubilee account.</p>
                    </div>
                </div>
            </div>

            <form className="registration-form-container" onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name-field">
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
                <label htmlFor="email-field">
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
                <label htmlFor="password-field">
                    <input
                        type="password"
                        name="password"
                        id="password-field"
                        placeholder="Wachtwoord:"
                        onChange={e=> setPassword(e.target.value)}
                    /></label>
                <label htmlFor="confirm-password-field">
                    <input
                        type="password"
                        name="confirmpassword"
                        id="password-field"
                        placeholder="Bevestig wachtwoord:"
                        onChange={e=> setConfirmPassword(e.target.value)}
                    /></label>

                    <PasswordChecklist
                        rules={["minLength","specialChar","capital"]}
                        minLength={8}
                        value={password}
                        valueAgain={confirmPassword}
                        messages={{
                            minLength: "Het wachtwoord bevat minimaal 8 karakters",
                            specialChar: "Het wachtwoord bevat minimaal 1 leesteken",
                            capital: "Het wachtwoord bevat minimaal 1 hoofdletter",
                        }}
                    />
                <button type="submit">Registreren</button>
            </form>
            <div>
                <img className={styles.registerItemImg} src={imageSheep} alt="Sheep"/>
            </div>
        </>
    );
};

export default Registration;
