import './registration.css'

import {UserForm} from "../User-form/User.form";
import {useSelector, useDispatch} from "react-redux";
import {addUser, homeURL} from "../../Services/user.service";
import {inputValidator, passwordValidator} from "../../validators";
import {actionAddUser, actionGetErrorUserData} from "../../Redux/Action/Actions";
import {Route} from "react-router-dom";
import {UsersTable} from "../Users-table/Users.table";

export function Registration() {
    // const {history, match: {url}} = props;
    // console.log(url);
    const {
        userData: userDataObj,
        errorUserData,
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const userCreateOrEdit = (userDataObj, errorUserData, createKey = 1) => {
        const {
            _id,
            repeat_password,
            ...userDataForFetch
        } = userDataObj

        const errorArray = Object.values(errorUserData);
        const error = errorArray.join('').length;

        const isCreateExist =
            (!error) &&
            (!Object.values(userDataForFetch).includes('')) &&
            userDataObj.password === userDataObj.repeat_password;

        if (isCreateExist && createKey) {
            addUser(dispatch, userDataForFetch);

            return;
        }

        // if (isCreateExist) {
        //     dispatch(updateUser(_id, userDataForFetch));
        //
        //     history.push(homeURL);
        //
        //     return;
        // }

        const userDataArr = Object.entries(userDataForFetch);

        userDataArr.forEach(item => {
            if (item[0] !== 'repeat_password') {
                errorUserData[item[0]] = inputValidator(item[0], item[1]);
            }
        });

        let errorRepeatPassword =
            passwordValidator(userDataObj.password, userDataObj.repeat_password) ||
            inputValidator('repeat_password', userDataObj.repeat_password) || '';

        let checkLength;

        if (!errorRepeatPassword) {
            checkLength = (userDataObj.password.length > userDataObj.repeat_password.length);
        }

        if (checkLength) {
            errorRepeatPassword = 'Passwords do not match';
        }

        dispatch(actionGetErrorUserData({
            ...errorUserData,
            repeat_password: errorRepeatPassword
        }));
    }

    const clickCreateUser = () => {
        userCreateOrEdit(userDataObj, errorUserData, 1)
    }

    return (
        <div className={'formContainer'}>
            <div>
                <h4>Create new user</h4>
            </div>
            <UserForm/>

            <div className={'wrap-button'}>
                <button className={'btn'}
                    onClick={clickCreateUser}
                >
                    Create
                </button>
            </div>
            <Route path={`${homeURL}/users`} render={(props) => {
                return <UsersTable userCreateOrEdit={userCreateOrEdit} {...props}/>
            }}/>
        </div>
    )
}
