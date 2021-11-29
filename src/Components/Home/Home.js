import './home.css'
import {UsersTable} from "../Users-table/Users.table";
import {homeURL} from "../../Services/user.service";
import {Route, Link} from "react-router-dom";

export function Home() {

// const showUsers = () => {
//
// }
    return (
        <div className={'home_container'}>
            <h1>Auth & CRUD Task</h1>
            {/*<button onClick={showUsers}>Users</button>*/}
            <Link to={`${homeURL}users`}>Users</Link>
            <div>
                <Route path={`${homeURL}users`} component={UsersTable}/>
            </div>

        </div>
)
}
