import React from 'react'
import ItemList from '../item-list'
import Row from '../InfoPages/Row'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'

const PeoplePage = ({ onPeopleSelected, allPeople, showPerson, error, loading, getPersonImage }) => {
    return (
        <ErrorCatcher>
            <Row left = {<ItemList onItemSelected={onPeopleSelected} allItems={allPeople} loading={loading} error={error} />}
                right = {<ItemDetails showItem={showPerson} error={error} getImage = {getPersonImage} />} />
        </ErrorCatcher>
    )
}

export {PeoplePage}