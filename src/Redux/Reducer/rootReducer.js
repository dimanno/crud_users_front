import {
    GET_USERS, GET_ERROR_USER_DATA, GET_USER_DATA, ADD_USER
} from '../Action/action.types';

const defaultUserData = {
    _id: '',
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    type: 'Admin',
    password: '********',
    repeat_password: '********'
}

const errorUserData = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    repeat_password: '',
    type: ''
};

const initialState = {
    users: [],
    userData: {...defaultUserData},
    errorUserData: {...errorUserData},
    // homeURL: ''
}
const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_USER:
            return {...state, users: [...state.users, payload]};

        case GET_USERS:
            console.log(payload)
            return {...state, users: [...payload]}

        case GET_USER_DATA:
            return {...state, userData: {...state.userData, ...payload}};

        case GET_ERROR_USER_DATA:
            return {...state, errorUserData: {...state.errorUserData, ...payload}};
        default:
            return state
    }
}

export {
    rootReducer
}
