import React from 'react'
import AttractionList from './AttractionList'

const Area = props => {


    return (
        <section className="parkArea">
            <h3>{props.park.name}</h3>
            <span>{props.park.theme}</span>
            <AttractionList key={`ridelist-${props.park.id}`} attractions={props.park.attractions} {...props}/>
        </section>
    )
}

export default Area