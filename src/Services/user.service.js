// import axiosConfig from './axios.config'

import {actionAddUser} from "../Redux/Action/Actions";

const baseURL = 'http://localhost:5050';
const usersURL = '/users';
const homeURL = '/';



const getAllUsers = async () => {
  const data = await(await fetch(`${baseURL+usersURL}`)).json();
  return data
};

// const getAllUsers =  async () => {
//
//     // const response = await axiosConfig.get(`${homeURL}users`)
//     // return console.log(response.data.json)
//
//     // dispatch(actionInsertUsers(response.data));
// };

const addUser = async (dispatch, userDataObj) => {
    let response = await fetch(`${baseURL + usersURL}`, {
        method: 'POST',
        body: JSON.stringify({userDataObj}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(value => value.json());
    dispatch(actionAddUser(response))
}

// const addUser = (dataUserObj) => async (dispatch) => {
//     const response = await myAxios.post(usersURL, dataUserObj);
//
//     dispatch(actionAddUser(response.data));
// };

export {
    getAllUsers,
    addUser,
    // updateUser,
    // deleteUser,
    usersURL,
    homeURL
};

