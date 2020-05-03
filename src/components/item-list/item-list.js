import React from 'react'
import './item-list.css'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../errorIndicator'

const ItemList = ({onItemSelected, allItems, loading, error}) => {
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
    const items = renderItems(allItems)
    if(error) {
        return <ErrorIndicator />
    }
    return (
        <div className = "item-list list-group">
            {!allItems || loading ? <Spinner /> : items}
        </div>
    )
}

export default ItemList