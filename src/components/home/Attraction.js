import React from 'react'

const Attraction = props => {


    return (
        <section className="parkAttraction">
            <p>{props.attraction.name}</p>
        </section>
    )
}

export default Attraction