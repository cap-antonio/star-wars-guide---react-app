import React from 'react'
import './app.css'
import Header from '../header'
import RandomElements from '../random-elements/random-elements'
import InfoPages from '../InfoPages/InfoPages'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'
import { SwapiServiceContext } from '../swapiservice-context/swapiservice-context'
import SwapiService from '../../API/swapiService'
const swapiService = new SwapiService()

const App = () => {

    return (
        <ErrorCatcher>
            <SwapiServiceContext.Provider value={swapiService}>
                <Header />
                <RandomElements />
                <InfoPages />
            </SwapiServiceContext.Provider>
        </ErrorCatcher>
    )
}

export default App