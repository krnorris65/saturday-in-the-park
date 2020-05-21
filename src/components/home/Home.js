// When the user navigates to the root url, they should see a list of park areas with the attractions in that park area listed under it.
import React from 'react'
import AreaList from './AreaList'

const Home = props => {

    return (
        <>
        <h2>Home Page</h2>
           <AreaList {...props}/>
        </>
    )
}

export default Home