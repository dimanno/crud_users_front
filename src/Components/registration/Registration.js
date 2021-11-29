import './registration.css'

import {UserForm} from "../User-form/User.form";

export function Registration() {

    const clickCreateUser = () => {

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
        </div>
    )

}
