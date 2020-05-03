import React, { useState, useEffect } from 'react'
import './random-planet.css'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../errorIndicator'
import withSwapiService from '../hoc-helpers/withSwapiService'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'

const RandomPlanet = ({swapiService}) => {
    // const swapiService = new SwapiService() 
    const {getPlanet, getPlanetImage} = swapiService
    const[planet, setPlanet] = useState({})
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2
        getPlanet(id).then((planet) => {
            setPlanet(planet)
            setLoading(false)
        }).catch(onError)
    }
    const onError = (err) => {
        setError(true)
        setLoading(false)
    }
    // The first call of random content 
    useEffect(() => {
        updatePlanet()
      }, []);
    // Update the random content in every 10 sec
    useEffect(() => {
        const interval = setInterval(() => {
          updatePlanet()
        }, 10000);
        return () => clearInterval(interval);
      }, []);
      
    const hasData = !(loading || error)
    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = hasData ? <PlanetView planet = {planet} getImage = {getPlanetImage} /> : null
    return (
        <div className="random-planet jumbotron rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}


const PlanetView = ({planet, getImage}) => {
    return (
        <ErrorCatcher>
            <img className="planet-image" alt = {planet.name}
                src={getImage(planet.id)} /> 
            <div>
                <h4>{planet.name ? planet.name : "Planet name"}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{!planet.population ? "Unknown" : `${planet.population} creators`}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{!planet.rotationPeriod ? "Unknown" : `${planet.rotationPeriod} days`}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{! planet.diameter ? "Unknown" : `${planet.diameter} km`}</span>
                    </li>
                </ul>
            </div>
        </ErrorCatcher>
    )
}

export default withSwapiService(RandomPlanet)