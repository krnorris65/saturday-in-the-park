import React from 'react'
import { Route, withRouter } from "react-router-dom";
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './home/Home'


const ApplicationViews = props => {
    return (
        <>
            <Route exact path="/" render={props => {
                    return <Home {...props} />
                }}
            />

            <Route path="/register" render={props => {
                    return <Register {...props} />
                }}
            />

            <Route path="/login" render={props => {
                    return <Login {...props} />
                }}
            />

            <Route path="/myitinerary" render={props => {
                    // When the user navigates to /myitinerary, they should see a list of itinerary items specific to that user.
                    // return <MyItinerary />
                }}
            />
            <Route path="/myitinerary/new" render={props => {

                // When the user navigates to /myitinerary/new, they should be presented with a form that, when submitted, will add a new item to their itinerary.
                }}
            />
            <Route
                path="/myitinerary/:itemId(\d+)/edit" render={props => {
                // When the user navigates to /myitinerary/{the-id-of-the-itinerary-item}/edit, they should be presented with a pre-filled form that allows them to edit a specific item in their itinerary.
                }}
            />
        </>
    )
}

export default withRouter(ApplicationViews)




