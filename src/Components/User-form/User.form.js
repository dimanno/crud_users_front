import './userForm.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {actionGetErrorUserData, actionGetUserData} from "../../Redux/Action/Actions";
import {inputValidator, passwordValidator} from "../../validators";

export function UserForm() {
    const {
        userData: formState,
        errorUserData
    } = useSelector(state => state);
    console.log(errorUserData);
    const dispatch = useDispatch();

    // const [errorUserData, setErrorUserData] = useState({
    //     username: '',
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     type: '',
    //     password: '',
    //     repeat_password: ''
    // })

    // const [formState, setFormState] = useState({
    //     _id: '',
    //     username: '',
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     type: '',
    //     password: '',
    //     repeat_password: ''
    // });

    const {
        username,
        first_name,
        last_name,
        email,
        password,
        repeat_password,
        type
    } = formState;


    useEffect(() => {
        const errorUserDataArr = Object.entries(errorUserData);
        console.log(errorUserDataArr);
        errorUserDataArr.forEach(item => {
            console.log(item[1]);
            if (item[1]) {
                document.getElementsByClassName(item[0])[0].classList.add('error-border_style');
                return;
            }

            const checkErrStyle = document.getElementsByClassName(item[0])[0].classList.contains('error-border_style');

            if (checkErrStyle) {
                document.getElementsByClassName(item[0])[0].classList.remove('error-border_style');
            }
        });
    }, [errorUserData]);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const inputChange = (e) => {
        const {target: {name, value}} = e;

        e.preventDefault();

        const error = inputValidator(name, value);
        dispatch(actionGetErrorUserData({
            ...errorUserData,
            [name]: error
        }));

        let errorRepeatPassword;

        if (name === 'repeat_password') {
            errorRepeatPassword = passwordValidator(password, value);
        }

        if (errorRepeatPassword) {
            dispatch(actionGetErrorUserData({
                ...errorUserData,
                repeat_password: errorRepeatPassword
            }));
        }

        dispatch(actionGetUserData({
            ...formState,
            [name]: value
        }));
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
                            value={username}
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
                            name={'firstname'}
                            type='text'
                            value={first_name}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.first_name}
                        </div>
                    </label>

                    <label
                        htmlFor={'lastname'}
                        className={'labelField'}
                    >
                        Last name
                        <input
                            className={'inputField'}
                            name={'lastname'}
                            type='text'
                            value={last_name}
                            onChange={inputChange}
                            autoComplete='off'
                        />
                        <div className={'error-msg_style'}>
                            {errorUserData.last_name}
                        </div>
                    </label>

                    <label
                        htmlFor={'email'}
                        className={'labelField'}
                    >
                        Email
                        <input
                            className={'inputField'}
                            name={'email'}
                            type='email'
                            value={email}
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
                            value={type}
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
                            value={password}
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
                            value={repeat_password}
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
