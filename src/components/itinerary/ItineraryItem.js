import React from 'react'

const ItineraryItem = props => {


    return (
        <section className="itineraryItem">
            <p>{props.itineraryItem.attraction.name} ({props.itineraryItem.attraction.area.name}) at {props.itineraryItem.starttime}</p>
        </section>
    )
}

export default ItineraryItem
