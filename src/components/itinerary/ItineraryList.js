import React, {useState, useEffect} from 'react'
import ItineraryManager from '../../modules/ItineraryManager'
import ItineraryItem from './ItineraryItem'

const ItineraryList = props => {
    const [attractions, setAttractions] = useState([])

    const getAreaAttractions = () => {
        ParkManager.getAttractionsByArea(props.areaId)
        .then(setAttractions)
    }

    useEffect(getAreaAttractions, [])

    return (
        <>
        <ul>
        {attractions.map(attraction => <li key={`ride-${attraction.id}`}><Attraction  attraction={attraction}/></li>)}
        </ul>
        </>
    )
}

export default ItineraryList