import React from 'react'
import AttractionList from './AttractionList'

const Area = props => {


    return (
        <section className="parkArea">
            <h3>{props.park.name}</h3>
            <p>{props.park.theme}</p>
            <AttractionList key={`ridelist-${props.park.id}`} areaId={props.park.id} {...props}/>
        </section>
    )
}

export default Area