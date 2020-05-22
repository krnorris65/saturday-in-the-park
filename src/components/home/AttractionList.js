import React, { useState, useEffect } from 'react'

const AttractionList = props => {

    return (
        <>
            <ul>
                {props.attractions.map(attraction => <li key={`ride-${attraction.id}`}>{attraction.name}</li>)}
            </ul>
        </>
    )
}

export default AttractionList