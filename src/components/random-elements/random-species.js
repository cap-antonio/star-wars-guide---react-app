import React, { useState, useEffect, useContext } from 'react'
import './random-species.css'
import Spinner from '../spinner/'
import ErrorIndicator from '../errorIndicator/'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'
import { SwapiServiceContext } from '../swapiservice-context/swapiservice-context'

const RandomSpecies = () => {

    const swapiService = useContext(SwapiServiceContext)

    const{getSpecies, getSpeciesImage} = swapiService

    const[species, setSpecies] = useState({})
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const updateSpecies = () => {
        const id = Math.floor(Math.random()*35) + 2
        getSpecies(id).then((oneSpecies) => {
            setSpecies(oneSpecies)
            setLoading(false)
        }).catch(onError)
    }
    const onError = (err) => {
        setError(true)
        setLoading(false)
    }
    // The first calling of random content
    useEffect(() => {
        updateSpecies()
    }, []);
    // Update the random content in every 12 sec
    useEffect(() => {
        const interval = setInterval(() => {
            updateSpecies()
        }, 12000);
        return () => clearInterval(interval);
      }, []);


    const hasData = !(loading || error)
    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = hasData ? <SpeciesView species = {species} getImage = {getSpeciesImage} /> : null
    return (
        <div className="random-species jumbotron rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const SpeciesView = ({species, getImage}) => {
    return (
        <ErrorCatcher>
            <img className="species-image" alt = {species.name}
                src={getImage(species.id)} />
            <div>
                <h4>{species.name ? species.name : "species name"}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Classification:</span>
                        <span>{species.classification}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Language:</span>
                        <span>{species.language}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Average Lifespan:</span>
                        <span>{!species.lifespan ? "unknown" : species.lifespan}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Height:</span>
                        <span>{!species.height ? "unknown" : species.height}</span>
                    </li>
                </ul>
            </div> 
        </ErrorCatcher>
    )
}

export default RandomSpecies