import React, { useState, useEffect } from 'react'
import ItemList from '../item-list'
import PersonDetails from './person-details'
import ErrorIndicator from '../errorIndicator/ErrorIndicator'
import Row from '../InfoPages/Row'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'
import SwapiService from '../../API/swapiService'

const PeoplePage = ({ getData, onItemSelected, showPerson }) => {
    const swapiService = new SwapiService()
    

    const [allPeople, setAllPeople] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const onError = (err) => {
        setError(true)
    }
    const getAllPeople = () => {
        setLoading(true)
        getData.then((peopleList) => {
            setAllPeople(peopleList)
            setLoading(false)
        }).catch(onError)
    }
    useEffect(() => {
        setLoading(true)
        getAllPeople()
        setLoading(false)
    }, [])
    if (error) {
        return <ErrorIndicator />
    }
    return (
        <ErrorCatcher>
            <Row left={<ItemList onItemSelected={onItemSelected} allItems={allPeople} loading={loading} error={error} />}
                right={<PersonDetails showPerson={showPerson} error={error} />} />
        </ErrorCatcher>
    )
}

export default PeoplePage