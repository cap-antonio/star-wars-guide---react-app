import React, { useState, useEffect } from 'react'
import './item-list.css'
import SwapiService from '../../API/swapiService'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../errorIndicator'

const ItemList = ({onItemSelected}) => {
    const swapiService = new SwapiService()
    const[allPeople, setAllPeople] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const onError = (err) => {
        setError(true)
        setLoading(false)
    }
    const getAllPeople = () => {
        swapiService.getAllPeople().then((peopleList) => {
        setAllPeople(peopleList)
        setLoading(false)
    }).catch(onError)
    }
    useEffect(() => {
        getAllPeople()
    }, [])
    const renderItems = (arr) => {
        return arr.map(({id, name}) => {
            return (
                <li key = {id}
                    className = "list-group-item"
                    onClick = {() => onItemSelected(id)}>
                    {name}
                </li>
            )
            }
        )
    }
    const items = renderItems(allPeople)
    if(error) {
        return <ErrorIndicator />
    }
    return (
        <div className = "item-list list-group">
            {!allPeople || loading ? <Spinner /> : items}
        </div>
    )
}

export default ItemList