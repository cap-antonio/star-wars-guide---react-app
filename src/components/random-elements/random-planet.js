import React, { useState, useEffect } from 'react'
import './random-planet.css'
import SwapiService from '../../API/swapiService'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../errorIndicator'

const RandomPlanet = () => {
    const swapiService = new SwapiService()
    const[planet, setPlanet] = useState({})
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2
        swapiService.getPlanet(id).then((planet) => {
            setPlanet(planet)
            setLoading(false)
        }).catch(onError)
    }
    const onError = (err) => {
        setError(true)
        setLoading(false)
    }
    // The first calling of random content 
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
    const content = hasData ? <PlanetView planet = {planet} /> : null
    return (
        <div className="random-planet jumbotron rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const PlanetView = ({planet}) => {
    return (
        <React.Fragment>
            <img className="planet-image" alt = {planet.name}
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} />
            <div>
                <h4>{planet.name ? planet.name : "Planet name"}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{planet.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{`${planet.rotationPeriod} days`}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{`${planet.diameter} km`}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default RandomPlanet