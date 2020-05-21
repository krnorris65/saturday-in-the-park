import React from 'react'
import Attraction from './Attraction'

const AttractionList = props => {

    return (
        <>
        <h6>Attractions:</h6>
        <ul>
        {props.attractions.map(attraction => <li><Attraction key={attraction.id} attraction={attraction}/></li>)}
        </ul>
        </>
    )
}

export default AttractionList