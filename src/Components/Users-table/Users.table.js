import './users-table.css'

import {useEffect} from "react";
import {getAllUsers} from "../../Services/user.service";
import {User} from "../User/User";
import {useDispatch, useSelector} from "react-redux";
import {actionGetUsers} from "../../Redux/Action/Actions";

export function UsersTable() {
    // const [users, setUsers] = useState([]);
    const users = useSelector(({users}) => users)
    const dispatch = useDispatch();


    useEffect( async () => {
        dispatch(actionGetUsers(await getAllUsers()))
    }, []);
    return (
        <div className={'userList'}>
            <div className={'title'}>
                <div className={'item'}>
                    <h5>USERNAME</h5>
                </div>
                <div className={'item'}>
                    <h5>FIRST NAME</h5>
                </div>
                <div className={'item'}>
                    <h5>LAST NAME</h5>
                </div>
                <div className={'item'}>
                    <h5>EMAIL</h5>
                </div>
                <div className={'item'}>
                    <h5>TYPE</h5>
                </div>
            </div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
}
