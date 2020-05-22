import React, { useState } from 'react'
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'

const Login = props => {
    const [credentials, setCredentials] = useState({userName:"",  password: ""});
    const { isAuthenticated, login } = useSimpleAuth()

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
      };

    const handleLogin = (evt) => {
        evt.preventDefault()

        const customerInfo = {
            "username": credentials.userName,
            "password": credentials.password
        }

        login(customerInfo)
        .then(() => {
            if (isAuthenticated()) {
                props.history.push({
                    pathname: "/"
                })
            }
            else {
                
            }
        })
    }

    return (
        <form className="form--login" onSubmit={handleLogin}>
            <h1 className="h3 mb-3 font-weight-normal">Login to use Saturday in the Park</h1>
            <fieldset>
                <label htmlFor="userName"> Username </label>
                <input onChange={handleFieldChange} type="text"
                    name="userName"
                    id="userName"
                    className="form-control"
                    placeholder="Username"
                    required autoFocus />
            </fieldset>
            <fieldset>
                <label htmlFor="inputPassword"> Password </label>
                <input onChange={handleFieldChange} type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    required />
            </fieldset>
            <fieldset>
                <button type="submit">
                    Sign in
                    </button>
            </fieldset>
        </form>
    )
}

export default Login