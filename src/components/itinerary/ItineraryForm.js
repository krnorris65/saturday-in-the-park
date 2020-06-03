import React, { useState, useEffect } from 'react'
import ItineraryManager from '../../modules/ItineraryManager'
import ParkManager from '../../modules/ParkManager'

const ItineraryForm = props => {
    const [itineraryItem, setItineraryItem] = useState({ startTime: 1, attractionId: 1 });
    const [attractions, setAttractions] = useState([])
    const [file, setFile] = useState("")

    const handleFieldChange = (evt) => {
        const stateToChange = { ...itineraryItem };
        stateToChange[evt.target.id] = evt.target.value;
        setItineraryItem(stateToChange);
    };

    const handleImage = (evt) => {
        console.log(evt.target.files[0])
        setFile(evt.target.files[0])
    }
    const handleSubmit = e => {
        e.preventDefault();

        const itineraryItemObj = {
            "starttime": Number(itineraryItem.startTime),
            "attraction_id": Number(itineraryItem.attractionId)
        }

        if (props.match.params.itemId) {
            itineraryItemObj.id = Number(props.match.params.itemId)
            ItineraryManager.editItineraryItem(itineraryItemObj)
                .then(() => props.history.push("/myitinerary"))
        }
        else {
            const formData = new FormData()
            formData.append("image_path", file, file.name)
            formData.append('starttime', itineraryItem.startTime)
            formData.append('attraction_id', itineraryItem.attractionId)

            ItineraryManager.createItineraryItem(formData)
                .then(() => props.history.push("/myitinerary"))
        }


    }

    useEffect(() => {
        if (props.match.params.itemId) {
            ItineraryManager.getItineraryItem(props.match.params.itemId)
                .then(item => {
                    console.log(item)
                    const stateToChange = { ...itineraryItem }
                    stateToChange.startTime = item.starttime
                    stateToChange.attractionId = item.attraction_id
                    setItineraryItem(stateToChange)
                })
        }
        ParkManager.getAttractions()
            .then((allAttractions) => {
                setAttractions(allAttractions)
            })
    }, []);

    return (
        <form className="form--login" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Add new item to my Itinerary</h1>
            <fieldset>
                <label htmlFor="attractionId">  </label>
                <select
                    className="form-control"
                    id="attractionId"
                    value={itineraryItem.attractionId}
                    onChange={handleFieldChange}>
                    {attractions.map(attraction =>
                        <option key={attraction.id} value={attraction.id}>
                            {attraction.name} ({attraction.area.name})
                        </option>
                    )}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="startTime"> Start Time </label>
                <input onChange={handleFieldChange} type="number"
                    id="startTime"
                    required="" autoFocus="" value={itineraryItem.startTime} />
            </fieldset>
            <fieldset>
                <label htmlFor="startTime"> Start Time </label>
                <input onChange={handleImage} type="file"
                    id="image_path"
                    value={itineraryItem.image_path} />
            </fieldset>
            <fieldset>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}

export default ItineraryForm