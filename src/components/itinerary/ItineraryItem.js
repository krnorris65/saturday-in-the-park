import React from 'react'

const ItineraryItem = props => {



    return (
        <section className="itineraryItem">
            <p>{props.itineraryItem.attraction.name} ({props.itineraryItem.attraction.area.name}) at {props.itineraryItem.starttime}</p>
            <button onClick={() => props.history.push(`/myitinerary/${props.itineraryItem.id}/edit`)}>
                    Edit</button>
            <button onClick={() => props.deleteItem(props.itineraryItem.id)}>
                    Delete</button>
        </section>
    )
}

export default ItineraryItem
