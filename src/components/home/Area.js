import React from 'react'
import AttractionList from './AttractionList'

const Area = props => {


    return (
        <section className="parkArea">
            <h3>{props.park.name}</h3>
            <p>{props.park.theme}</p>
            <AttractionList attractions={props.park.attractions} {...props}/>
        </section>
    )
}

export default Area