import React from 'react'
import { Route, withRouter } from "react-router-dom";
import Register from './auth/Register'
import Login from './auth/Login'
import Home from './home/Home'
import MyItinerary from './itinerary/MyItinerary'
import ItineraryForm from './itinerary/ItineraryForm';


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

            <Route exact path="/myitinerary" render={props => {
                    return <MyItinerary {...props}/>
                }}
            />
            <Route path="/myitinerary/new" render={props => {
                return <ItineraryForm {...props}/>

                }}
            />
            <Route
                path="/myitinerary/:itemId(\d+)/edit" render={props => {
                // When the user navigates to /myitinerary/{the-id-of-the-itinerary-item}/edit, they should be presented with a pre-filled form that allows them to edit a specific item in their itinerary.
                return <ItineraryForm {...props}/>

                }}
            />
        </>
    )
}

export default withRouter(ApplicationViews)




