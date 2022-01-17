import {
    BrowserRouter as Router,

    Route, Switch
} from 'react-router-dom';

import './App.css';
import {Header} from './Components/header/Header';
import {Home} from './Components/Home/Home';
import {Registration} from "./Components/registration/Registration";
import {Login} from "./Components/login/login";
import {homeURL} from "./Services/user.service";
import {UsersPage} from "./Components/users-page/users.page";
import {UsersTable} from "./Components/Users-table/Users.table";


function App() {

    return (
        <div className="main">
            <Router>
                <header>
                    <Header/>
                </header>

                <div>
                    {/*<Registration/>*/}
                </div>
                <div>
                    {/*<Login/>*/}
                </div>
                <div>
                    <Switch>
                        <Route path={`${homeURL}users`} component={UsersTable}/>
                        <Route path={`${homeURL}login`} render={() => <Login/>}/>;
                        <Route path={`${homeURL}registration`} render={() => <Registration/>}/>
                        <Route path={homeURL} component={Home}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
