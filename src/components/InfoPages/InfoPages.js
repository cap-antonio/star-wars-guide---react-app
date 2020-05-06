import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch} from 'react-router-dom'
import { SwapiServiceContext } from "./../swapiservice-context/swapiservice-context"

import ErrorIndicator from '../errorIndicator'
import Spinner from '../spinner/spinner'
import PeoplePage from '../pages/people-page'
import PlanetPage from '../pages/PlanetPage'
import StarshipPage from '../pages/Starship-page'
import ItemPageDetails from '../ItemPageDetails/'

const InfoPages = () => {

    const swapiService = useContext(SwapiServiceContext)

    const { getPerson, getPlanet, getStarship, getAllPeople, getAllPlanets,
        getAllStarships, getPersonImage, getPlanetImage, getStarshipImage } = swapiService

    const [showItem, setShowItem] = useState({
        person: {},
        planet: {},
        starship: {}
    })

    const [allStarships, setAllStarship] = useState([])
    const [allPlanets, setAllPlanet] = useState([])
    const [allPeople, setAllPeople] = useState([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const onError = (err) => {
        setError(true)
    }
    const onPeopleSelected = (id) => {
        getPerson(id).then((item) => {
            setShowItem({ ...showItem, person: item})
        })
    }

    const onPlanetSelected = (id) => {
        getPlanet(id).then((item) => {
            setShowItem({ ...showItem, planet: item })
        })
    }
    const onStarshipSelected = (id) => {
        getStarship(id).then((item) => {
            setShowItem({ ...showItem, starship: item })
        })
    }

    useEffect(() => {
        let cancelled = false 
        setLoading(true)
        getAllPeople().then((peopleList) => {
            !cancelled && setAllPeople(peopleList)
        }).catch(onError)
        getAllPlanets().then((planetList) => {
            !cancelled && setAllPlanet(planetList)
        }).catch(onError)
        getAllStarships().then((starshipList) => {
            !cancelled && setAllStarship(starshipList)
        }).catch(onError)
        setLoading(false)
        return () => cancelled = true
    }, [getAllPeople, getAllPlanets, getAllStarships])

    if (error) {
        return <ErrorIndicator />
    }
    if (loading) {
        return <Spinner />
    }
    return (
        <Switch>
            <Route path="/people" exact = {true}>
                <PeoplePage onItemSelected={onPeopleSelected} allItems={allPeople} loading={loading} 
                            showItem={showItem.person} error={error} getImage={getPersonImage} /> 
            </Route>
            <Route path="/planets" exact = {true}>
                <PlanetPage onItemSelected={onPlanetSelected} allItems={allPlanets} loading={loading} 
                            showItem={showItem.planet} error={error} getImage={getPlanetImage} />
            </Route>
            <Route path="/starships" exact = {true}> 
                <StarshipPage onItemSelected={onStarshipSelected} allItems={allStarships} loading={loading} 
                            showItem={showItem.starship} error={error} getImage={getStarshipImage} />
            </Route>
            <Route path="/:page/:id" render = {({match}) =>{
                return <ItemPageDetails item = {match} />
            }}/>
                
        </Switch>
    )
}

export default InfoPages