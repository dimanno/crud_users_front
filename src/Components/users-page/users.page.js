import './users-page.css';

import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import {UsersTable} from '../Users-table/Users.table'

export function UsersPage(props) {
    const {history, match:{url}} = props;
    const dispatch = useDispatch();


    return (
        <div>
            <UsersTable/>
        </div>
    )
}
