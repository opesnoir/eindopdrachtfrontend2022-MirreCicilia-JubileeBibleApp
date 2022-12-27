import React from "react";
import styles from "./Registration.module.css";
import imageSheep from "../../assets/register-sheep-pexels-trinity-kubassek-288621.jpg";
import {useForm} from "react-hook-form";





const Registration = () => {

    const {handleSubmit, register, formState:{errors} } = useForm();

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
                        {...register("name",{
                            required:{
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
                        placeholder="Wachtwoord"
                        {...register("password",{
                            required:{
                                value: true,
                                message: "Dit veld is verplicht"
                            },
                            minLength: {
                                value: 8,
                                message: "Het wachtwoord bevat minimaal 8 tekens",
                            },
                            pattern:{
                                value: ,
                                message: "Het wachtwoord bevat minimaal 1 hoofdletter en 1 leesteken",
                            },
                        })}
                    />
                </label>
                {errors.password && <p> {errors.password.message} </p>}
                <button type="submit">Registreren</button>

            </form>

        </>
    );
};

export default Registration;
