import React from 'react'
import RandomPlanet from './random-planet'
import RandomSpecies from './random-species'
import Row from '../InfoPages/Row'

const RandomElements = () => {
    return (
        <Row left={<RandomPlanet />}
            right={<RandomSpecies />} />
    )
}

export default RandomElements