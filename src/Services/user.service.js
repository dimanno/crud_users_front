import myAxios from './axios.config';
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

// const addUser = async (dispatch, userDataObj) => {
//     const response = await(await fetch(`http://localhost:5050/users`, {
//         method: 'POST',
//         body: JSON.stringify(userDataObj),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })).json();
//     console.log(response);
//     dispatch(actionAddUser(response))
//     return response
// }

const addUser = (dataUserObj) => async (dispatch) => {
    const response = await myAxios.post(usersURL, dataUserObj);

    dispatch(actionAddUser(response.data));
};

export {
    getAllUsers,
    addUser,
    // updateUser,
    // deleteUser,
    usersURL,
    homeURL
};
