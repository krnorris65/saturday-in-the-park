import React, {useState, useEffect} from 'react'
import ItineraryManager from '../../modules/ItineraryManager'
import ItineraryItem from './ItineraryItem'

const ItineraryList = props => {
    const [itineraryItems, setItineraryItems] = useState([])

    const getItineraryItems = () => {
        ItineraryManager.getItinerary()
        .then(setItineraryItems)
    }

    useEffect(getItineraryItems, [])

    return (
        <>
        <ul>
        {itineraryItems.map(item => <li key={`item-${item.id}`}><ItineraryItem  itineraryItem={item}/></li>)}
        </ul>
        </>
    )
}

export default ItineraryList