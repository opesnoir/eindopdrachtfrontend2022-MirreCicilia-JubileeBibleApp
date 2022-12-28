import React from 'react';

const RegistrationInputComponent = ({inputType, name, className, placeholder, register, validationRules, errors}) => {
    return (
        <>
            <label className={} htmlFor="">
            <input
                type={inputType}
                id={`${name}-field`}
                className={className}
                placeholder={placeholder}
                {...register(name, validationRules)}
            />
            {errors[name] && <p> {errors[name].message}</p>}
            </label>
        </>
    );
};

export default RegistrationInputComponent;