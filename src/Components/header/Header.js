import './header.css'

import {
    Link
} from 'react-router-dom';

export function Header() {

    return (
        <div className={'wrapHeader'}>
            <div className={'leftHeader'}>
                <Link to={{pathname: '/'}}>
                    <h3>Home</h3>
                </Link>
            </div>
            <div className={'rightHeader'}>
                <div className={'login'}>
                    <Link to='/login'>
                        <h3>login</h3>
                    </Link>
                </div>
                <div className={'regist'}>
                    <Link to='/registration'>
                        <h3>Registration</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}
