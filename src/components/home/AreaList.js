import React, {useState, useEffect} from 'react'
import ParkManager from '../../modules/ParkManager'
import Area from './Area'

const AreaList = props => {
    const [parkareas, setParkareas] = useState([])

    const getAreas = () => {
        ParkManager.getParkAreas()
        .then(parks => {
            console.log(parks)
            setParkareas(parks)
        })
    }

    useEffect(getAreas, [])
    return (
        <>
        {parkareas.map(park => <Area key={park.id} park={park} {...props}/>)}
        </>
    )
}
export default AreaList
