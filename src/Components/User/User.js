import './user.css'
export function User({item}) {
    const {username, first_name, last_name, email, user_type} = item

    return (
        <div className={'user_box'}>
            <p className={'user_field'}>
                {username}
            </p>
            <p className={'user_field'}>j
                {first_name}
            </p>
            <p className={'user_field'}>
                {last_name}
            </p>
            <p className={'user_field'}>
                {email}
            </p>
            {/*<p className={'user_field'}>*/}
            {/*    {user_type}*/}
            {/*</p>*/}
        </div>
    )
}
