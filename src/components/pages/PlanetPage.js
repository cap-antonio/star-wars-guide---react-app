import React, { useState, useEffect } from 'react'
import ErrorIndicator from '../errorIndicator'
import ItemList from '../item-list'
import PlanetDetails from '../planet-details/planet-details'
import Row from '../InfoPages/Row'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'

const PlanetPage = ({ getData, onPlanetSelected, showPlanet }) => {
    const [allPlanet, setAllPlanet] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const onError = (err) => {
        setError(true)
    }
    const getAllPlanet = () => {
        setLoading(true)
        getData.then((planetList) => {
            setAllPlanet(planetList)
            setLoading(false)
        }).catch(onError)
    }
    useEffect(() => {
        setLoading(true)
        getAllPlanet()
        setLoading(false)
    }, [])
    if (error) {
        return <ErrorIndicator />
    }
    return (
        <ErrorCatcher>
            <Row left={<ItemList onItemSelected={onPlanetSelected} allItems={allPlanet} loading={loading} error={error} />}
                right={<PlanetDetails showPlanet={showPlanet} error={error} />} />
        </ErrorCatcher>
    )
}

export {PlanetPage}