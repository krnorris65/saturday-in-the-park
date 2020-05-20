import React, { useState } from 'react'

const Register = props => {
    const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", userName:"",  password: "", familyMembers: 0 });

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
      };

    const handleRegister = (evt) => {
        evt.preventDefault()

        const newCustomer = {
            "first_name": credentials.firstName,
            "last_name": credentials.lastName,
            "email": credentials.email,
            "username": credentials.userName,
            "password": credentials.password,
            "family_members": Number(credentials.familyMembers)
        }
        console.log(newCustomer)

        fetch("http://localhost:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newCustomer)
        })
        .then(resp => resp.json())
        .then(res => {
            if ("token" in res) {
                localStorage.setItem( "kennywood_token", res.token )
                setIsLoggedIn(true)
            }
        })
    }

    return (
        <form className="form--login" onSubmit={handleRegister}>
            <h1 className="h3 mb-3 font-weight-normal">Register to use Saturday in the Park</h1>
            <fieldset>
                <label htmlFor="firstName"> First Name </label>
                <input onChange={handleFieldChange} type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="First name"
                    required autoFocus />
            </fieldset>
            <fieldset>
                <label htmlFor="lastName"> Last Name </label>
                <input onChange={handleFieldChange} type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                    placeholder="Last name"
                    required />
            </fieldset>
            <fieldset>
                <label htmlFor="inputEmail"> Email address </label>
                <input onChange={handleFieldChange} type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                    required />
            </fieldset>
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
                <label htmlFor="inputEmail"> Family members </label>
                <input onChange={handleFieldChange} type="number"
                    name="familyMembers"
                    id="familyMembers"
                    className="form-control"
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

export default Register