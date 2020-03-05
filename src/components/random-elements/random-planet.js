import React, { useState, useEffect } from 'react'
import './random-planet.css'
import SwapiService from '../../API/swapiService'

const RandomPlanet = () => {
    const swapiService = new SwapiService()
    const[planet, setPlanet] = useState({
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    })
    const updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2
        swapiService.getPlanet(id).then((planet) => {
            setPlanet({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }
    useEffect(() => {
        updatePlanet()
      }, "");
    return (
        <div className="random-planet jumbotron rounded">
            <img className="planet-image"
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
                        <span>{planet.rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{planet.diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RandomPlanet