import React, { useState, useEffect } from 'react'
import Row from './Row'
import ItemList from '../item-list'
import ErrorIndicator from '../errorIndicator'
import ItemDetails from '../item-details'
import Spinner from '../spinner/spinner'
import withSwapiService from '../hoc-helpers/withSwapiService'

const InfoPages = ({swapiService}) => {
    const {getPerson, getPlanet, getStarship, getAllPeople, getAllPlanets, 
        getAllStarships, getPersonImage, getPlanetImage, getStarshipImage} = swapiService

    const [showPerson, setShowPerson] = useState({})
    const [showPlanet, setShowPlanet] = useState({})
    const [showStarship, setShowStraship] = useState([])
    
    const [allStarship, setAllStarship] = useState([])
    const [allPlanet, setAllPlanet] = useState([])
    const [allPeople, setAllPeople] = useState([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const onError = (err) => {
        setError(true)
    }
    const onPeopleSelected = (id) => {
        getPerson(id).then((item) => {
            setShowPerson({ item })
        })
    }

    const onPlanetSelected = (id) => {
        getPlanet(id).then((item) => {
            setShowPlanet({ item })
        })
    }
    const onStarshipSelected = (id) => {
        getStarship(id).then((item) => {
            setShowStraship({ item })
        })
    }
    
    useEffect(() => {
        setLoading(true)
        getAllPeople().then((peopleList) => {
            setAllPeople(peopleList)
        }).catch(onError)
        getAllPlanets().then((planetList) => {
            setAllPlanet(planetList)
        }).catch(onError)
        getAllStarships().then((starshipList) => {
            setAllStarship(starshipList)
    }).catch(onError)
        setLoading(false)
    }, [])
    
    if (error) {
        return <ErrorIndicator />
    }
    if(loading) {
        return <Spinner />
    }
    return (
        <React.Fragment>
            <Row left = {<ItemList onItemSelected={onPeopleSelected} allItems={allPeople} loading={loading} error={error} />}
                right = {<ItemDetails showItem={showPerson} error={error} getImage = {getPersonImage} />} />
            <Row left = {<ItemList onItemSelected={onPlanetSelected} allItems={allPlanet} loading={loading} error={error} />}
                right = {<ItemDetails showItem={showPlanet} error={error} getImage = {getPlanetImage}/>} />
            <Row left = {<ItemList onItemSelected={onStarshipSelected} allItems = {allStarship} loading = {loading} error = {error} />}
                right = {<ItemDetails showItem={showStarship} error = {error} getImage = {getStarshipImage}/>} />
        </React.Fragment>
    )
}

export default withSwapiService(InfoPages)