import React from 'react'
import RandomPlanet from './random-planet'
import RandomSpecies from './random-species'

const RandomElements = () => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                <RandomPlanet />
            </div>
            <div className="col-md-6">
                <RandomSpecies />
            </div>
        </div>
    )
}

export default RandomElements