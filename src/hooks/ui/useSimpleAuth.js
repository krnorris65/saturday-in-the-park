import { useState } from 'react'

const remoteURL = "http://localhost:8000"

const useSimpleAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    //verifies whether a user is logged into the app by checking if the state of loggedIn is true or kennywood-token in sessionStorage is not null
    const isAuthenticated = () => {
        return loggedIn || sessionStorage.getItem("kennywood-token") !== null

    }


    const register = userInfo => {
        //a new user is created by posting to the database by targeting the register endpoint
        return fetch(`${remoteURL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                if ("token" in res) {
                    sessionStorage.setItem( "kennywood-token", res.token )
                    setLoggedIn(true)
                }
            })
    }

    const login = userInfo => {
        //logs an existing user in by targeting the login in endpoint and verifying that the username/password matches for 
        return fetch(`${remoteURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    sessionStorage.setItem( "kennywood-token", res.token )
                    setLoggedIn(true)
                }
            })
    }

    const logout = () => {
        //when the user logs out, state of loggedIn is set to false and their token is removed from sessionStorage
        setLoggedIn(false)
        sessionStorage.removeItem("kennywood-token")
    }

    return { isAuthenticated, logout, login, register }
}

export default useSimpleAuth