import React from 'react'
import './app.css'
import Header from '../header'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import RandomElements from '../random-elements'

const App = () => {
    return (
        <div>
            <Header />
            <RandomElements />
            <div className = "row mb2">
                <div className = "col-md-6">
                    <ItemList />
                </div>
                <div className = "col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    )
}

export default App