import {
    GET_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,

    GET_USER_DATA,
    CLEAR_USER_DATA,

    GET_ERROR_USER_DATA,
    INSERT_URL
} from './action.types';

const actionGetUsers = (usersArray) => {
    return {type: GET_USERS, payload: usersArray};
}

const actionGetUserData = (userDataObj) => {
    return {type: GET_USER_DATA, payload: userDataObj};
}

const actionGetErrorUserData = (userDataObj) => {
    return {type: GET_ERROR_USER_DATA, payload: userDataObj};
}

export {
    actionGetUsers,
    actionGetUserData,
    actionGetErrorUserData
};
