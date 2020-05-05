import React from 'react'
import ItemList from '../item-list'
import Row from '../InfoPages/Row'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'
import ItemDetails from '../item-details'

const StarshipPage = ({ onItemSelected, allItems, showItem, error, loading, getImage }) => {
    return (
        <ErrorCatcher>
            <Row left = {<ItemList onItemSelected={onItemSelected} allItems={allItems} loading={loading} error={error} />}
                right = {<ItemDetails showItem={showItem} error={error} getImage = {getImage} />} />
        </ErrorCatcher>
    )
}

export default StarshipPage