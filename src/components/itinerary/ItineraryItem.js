import React from 'react'

const ItineraryItem = props => {


    return (
        <section className="itineraryItem">
            <p>{props.itineraryItem.attraction.name}{props.itineraryItem.attraction.area.name})</p>
            <p>{props.itineraryItem.starttime}</p>
        </section>
    )
}

export default ItineraryItem

// {
//     "id": 3,
//     "url": "http://localhost:8000/itineraries/3",
//     "attraction": {
//         "url": "http://localhost:8000/attractions/7",
//         "name": "Rider of Stars",
//         "area": {
//             "url": "http://localhost:8000/parkareas/3",
//             "name": "Kennywood Speedway",
//             "theme": "Planes, Trains, and Automobiles"
//         }
//     },
//     "starttime": 8
// }