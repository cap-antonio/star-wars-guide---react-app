import React, { useState, useEffect } from 'react'
import './random-species.css'
import SwapiService from '../../API/swapiService'
import Spinner from '../spinner/spinner'

const RandomSpecies = () => {
    const swapiService = new SwapiService()
    const[species, setSpecies] = useState({})
    const[loading, setLoading] = useState(true)
    const updateSpecies = () => {
        const id = Math.floor(Math.random()*35) + 2
        swapiService.getSpecies(id).then((oneSpecies) => {
            setSpecies(oneSpecies)
            setLoading(false)
        })
    }
    useEffect(() => {
        updateSpecies()
      }, "");
    const spinner = loading ? <Spinner /> : null
    const content = !loading ? <SpeciesView species = {species} /> : null
    return (
        <div className="random-species jumbotron rounded">
            {spinner}
            {content}
        </div>
    )
}

const SpeciesView = ({species}) => {
    return (
        <React.Fragment>
            <img className="species-image"
                src={`https://starwars-visualguide.com/assets/img/species/${species.id}.jpg`} />
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
                        <span className="term">Avegage Lifespan:</span>
                        <span>{!species.lifespan ? "unknown" : species.lifespan}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Height:</span>
                        <span>{!species.height ? "unknown" : species.height}</span>
                    </li>
                </ul>
            </div> 
        </React.Fragment>
    )
}

export default RandomSpecies