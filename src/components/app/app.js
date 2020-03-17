import React, { useState } from 'react'
import './app.css'
import Header from '../header'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import RandomElements from '../random-elements'
import SwapiService from '../../API/swapiService'

const App = () => {
    const[showPerson, setShowPerson] = useState({})
    const onItemSelected = (id) => {
        swapiService.getPerson(id).then((person) => {
            setShowPerson({ person })
        }).catch(onError)
    }
    const swapiService = new SwapiService()
    
    const[error, setError] = useState(false)
    const onError = (err) => {
        setError(true)
    }
    console.log(showPerson)
    return (
        <div>
            <Header />
            <RandomElements />
            <div className = "row mb2">
                <div className = "col-md-6">
                    <ItemList onItemSelected = {onItemSelected} />
                </div>
                <div className = "col-md-6">
                    <PersonDetails showPerson = {showPerson} error = {error} />
                </div>
            </div>
        </div>
    )
}

export default App