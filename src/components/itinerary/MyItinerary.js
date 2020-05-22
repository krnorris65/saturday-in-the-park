// When the user navigates to /myitinerary, they should see a list of itinerary items specific to that user.
import React from 'react'
import ItineraryList from './ItineraryList'
const MyItinerary = props => {

    return (
        <>
            <h2>My Itinerary</h2>
            <button onClick={() => props.history.push("/myitinerary/new")}>
                    New Item</button>
            <ItineraryList {...props} />
        </>
    )
}

export default MyItinerary