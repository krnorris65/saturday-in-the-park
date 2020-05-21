import React, {useState, useEffect} from 'react'
import ParkManager from '../../modules/ParkManager'
import Attraction from './Attraction'

const AttractionList = props => {
    const [attractions, setAttractions] = useState([])

    const getAreaAttractions = () => {
        ParkManager.getAttractionsByArea(props.areaId)
        .then(setAttractions)
    }

    useEffect(getAreaAttractions, [])

    return (
        <>
        <h6>Attractions:</h6>
        <ul>
        {attractions.map(attraction => <li key={`ride-${attraction.id}`}><Attraction  attraction={attraction}/></li>)}
        </ul>
        </>
    )
}

export default AttractionList