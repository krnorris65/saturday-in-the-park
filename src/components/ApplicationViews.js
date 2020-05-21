import React from 'react'
import { Route, withRouter } from "react-router-dom";
import Register from './auth/Register'
import Login from './auth/Login'


const ApplicationViews = props => {
    return (
        <>
            <Route
                exact path="/" render={props => {
                    return <h2>Placeholder</h2>
                }}
            />

            <Route
                path="/register" render={props => {
                    return <Register {...props} />
                }}
            />

            <Route
                path="/login" render={props => {
                    return <Login {...props} />
                }}
            />

            <Route
                path="/myitinerary" render={props => {
                    // return <MyItinerary />
                }}
            />
        </>
    )
}

export default withRouter(ApplicationViews)