import React, { useState, useEffect } from 'react'
import ErrorIndicator from '../errorIndicator'
import ItemList from '../item-list'
import StarshipDetails from './starship-details'
import Row from '../InfoPages/Row'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'

const StarshipPage = ({getData, onStarshipSelected, showStarship}) => {
    const[allStarship, setAllStarship] = useState([])
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(false)
    const onError = (err) => {
        setError(true)
    }
    const getAllStarship = () => {
        setLoading(true)
        getData.then((starshipList) => {
            setAllStarship(starshipList)
        setLoading(false)
    }).catch(onError)
    }
    useEffect(() => {
        setLoading(true)
        getAllStarship()
        setLoading(false)
    }, [])
    if(error) {
        return <ErrorIndicator />
    }
    return (
        <ErrorCatcher>
            <Row left = {<ItemList onItemSelected={onStarshipSelected} allItems = {allStarship} loading = {loading} error = {error} />}
                right = {<StarshipDetails showStarship={showStarship} error = {error} />} />
        </ErrorCatcher>
    )
}

export default StarshipPage