import { useState } from 'react'

const remoteURL = "http://localhost:8000"

const useSimpleAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    //verifies whether a user is logged into the app by checking if the state of loggedIn is true or kennywood_token in localStorage is not null
    const isAuthenticated = () => {
        return loggedIn || localStorage.getItem("kennywood_token") !== null

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
                    localStorage.setItem( "kennywood_token", res.token )
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
                    localStorage.setItem( "kennywood_token", res.token )
                    setLoggedIn(true)
                }
            })
    }

    const logout = () => {
        //when the user logs out, state of loggedIn is set to false and their token is removed from localStorage
        setLoggedIn(false)
        localStorage.removeItem("kennywood_token")
    }

    return { isAuthenticated, logout, login, register }
}

export default useSimpleAuth