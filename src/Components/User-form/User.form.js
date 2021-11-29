import {useEffect, useState} from "react";
import {inputValidator, passwordValidator} from "../../validators";

import './userForm.css'

export function UserForm() {
    const [errorUserData, setErrorUserData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        type: '',
        password: '',
        repeat_password: ''
    })

    const [formState, setFormState] = useState({
        _id: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        type: '',
        password: '',
        repeat_password: ''
    });

    const {password} = formState;


    // useEffect(() => {
    //     const errorUserDataArr = Object.entries(errorUserData);
    //
    //     errorUserDataArr.forEach(item => {
    //         if (item[1]) {
    //             document.getElementsByClassName(item[0])[0].classList.add('error-border_style');
    //             return;
    //         }
    //
    //         const checkErrStyle = document.getElementsByClassName(item[0])[0].classList.contains('error-border_style');
    //
    //         if (checkErrStyle) {
    //             document.getElementsByClassName(item[0])[0].classList.remove('error-border_style');
    //         }
    //     });
    // }, [errorUserData]);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const inputChange = (e) => {
        const {target: {name, value}} = e;

        e.preventDefault();

        const error = inputValidator(name, value);
        setErrorUserData({
            ...errorUserData,
            [name]: error
        });

        let errorRepeatPassword;

        if (name === 'repeat_password') {
            errorRepeatPassword = passwordValidator(password, value);
        }

        if (errorRepeatPassword) {
            setErrorUserData({
                ...errorUserData,
                repeat_password: errorRepeatPassword
            });
        }

        setFormState({
            ...formState,
            [name]: value
        });
    }

    return (
        <div>
            <form name='createUser' onSubmit={handleSubmit}>
                <div className={'formField'}>
                    <label
                        htmlFor={'username'}
                        className={'labelField'}
                    >
                        Username
                        <input
                            className={'inputField'}
                            name={'username'}
                            type='text'
                            value={formState.username}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.username}
                        </div>
                    </label>

                    <label
                        htmlFor={'firstname'}
                        className={'labelField'}
                    >
                        First name
                        <input
                            className={'inputField'}
                            name='firstname'
                            type='text'
                            value={formState.firstname}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.firstname}
                        </div>
                    </label>

                    <label
                        htmlFor={'lastname'}
                        className={'labelField'}
                    >
                        Last name
                        <input
                            className={'inputField'}
                            name='lastname'
                            type='text'
                            value={formState.lastname}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.lastname}
                        </div>
                    </label>

                    <label
                        htmlFor={'email'}
                        className={'labelField'}
                    >
                        Email
                        <input
                            className={'inputField'}
                            name='email'
                            type='email'
                            value={formState.email}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.email}
                        </div>
                    </label>
                    <div
                        className={'labelField'}
                    >
                        Type

                        <select
                            className={'inputField'}
                            name='type'
                            value={formState.type}
                            onChange={inputChange}
                        >
                            <option value="Admin">Admin</option>
                            <option value="Driver">Driver</option>
                        </select>
                    </div>

                    <label
                        htmlFor={'password'}
                        className={'labelField'}
                    >
                        Password
                        <input
                            className={'inputField'}
                            name='password'
                            type='password'
                            value={formState.password}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.password}
                        </div>
                    </label>
                    <label
                        htmlFor={'repeat_password'}
                        className={'labelField'}
                    >
                        Repeat password
                        <input
                            className={'inputField'}
                            name='repeat_password'
                            type='password'
                            value={formState.repeat_password}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.repeat_password}
                        </div>
                    </label>
                </div>
            </form>

        </div>
    )
}
