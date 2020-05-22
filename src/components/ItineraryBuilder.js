
import React from "react"
import { Route } from "react-router-dom"
import ApplicationViews from './ApplicationViews'
import NavBar from "./nav/NavBar"



const ItineraryBuilder = () => {


    return (
        <>
            <Route render={props => (
                <NavBar {...props} />
            )} />
            <ApplicationViews />
        </>
    )
}

export default ItineraryBuilder