import React from 'react'
import AreaList from './AreaList'
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'

const Home = props => {
    const { isAuthenticated } = useSimpleAuth()

    return (
        <>
        <h1>Welcome to Kennywood!</h1>
        {
            isAuthenticated() ?
            <AreaList {...props}/>
            : null
        }
        </>
    )
}

export default Home