import React from "react";
import styles from "./Registration.module.css";
import imageSheep from "../../assets/register-sheep-pexels-trinity-kubassek-288621.jpg";
import {useForm} from "react-hook-form";

/*function App() {
    const methods = useForm();

    return null;
}*/

/*deze methode werkt: {errors?.name?.message}
deze ook: {errors[name]}*/

/*<div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name-field">Naam:</label>
            <input
                type="text"
                id="name-field"
                placeholder="Naam"
                {...register("name",{
                    required:{
                        value:true,
                        message: "Dit veld is verplicht",
                    }
                })}/>
            <label htmlFor="email-field">Email:</label>
            <input
                type="text"
                id="email-field"
                placeholder="Email"
                {...register("email",{
                    required:{
                        value:true,
                        message:"Dit veld is verplicht",
                    },
                    validate:(value)=> value.includes("@") || "Het emailadres moet een @ bevatten",
                })}/>
            <label htmlFor="password-field">Wachtwoord:</label>
            <input
                type="text"
                id="password-field"
                placeholder="Wachtwoord"
                {...register("password", {
                    required:{
                        value:true,
                        message: "Het wachtwoord bevat minimaal 8 tekens, waarvan 1 hoofdletter en 1 leesteken.",
                    },
                    pattern:{
                        value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                        message: "Het wachtwoord bevat minimaal 1 hoofdletter en 1 leesteken",
                    },
                    minLength: {
                        value: 8,
                        message: "Het wachtwoord bevat minimaal 8 tekens",
                    },
                })}/>
        </div>

        <div>
            <button type="submit">Registreren</button>
        </div>
    </form>
</div>*/



const Registration = () => {

    const {handleSubmit, register, formState:{errors}  } = useForm();

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

            <form className="registration-form-container" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name-field">
                    <input
                        type="text"
                        name="name"
                        id="name-field"
                        placeholder="Naam:"
                        {...register("name",{
                            required:{
                                value: true,
                                message: "Naam is verplicht"
                            }
                        })}
                    />
                    {errors.name && <p>Gebruikersnaam is verplicht</p>}
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
                            }
                        }
                    )}
                />
                    {errors.email && <p>Geldig emailadres is verplicht</p>}
            </label>
                <label htmlFor="password-field">
                    <input
                        type="password"
                        name="password"
                        id="password-field"
                        placeholder="Wachtwoord"
                    />
                </label>
                <button type="submit">Registreren</button>

            </form>

        </>
    );
};

export default Registration;
