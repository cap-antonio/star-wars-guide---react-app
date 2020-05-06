import React, { useState, useEffect, useContext } from 'react'
import './ItemPageDetails.css'
import { SwapiServiceContext } from '../swapiservice-context/swapiservice-context'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'
import { withRouter } from 'react-router-dom'

const StarshipDetails = ({ item, history }) => {
    const swapiService = useContext(SwapiServiceContext)
    const id = item.params.id
    const page = item.params.page

    const { getPerson, getPlanet, getStarship, getPersonImage,
        getPlanetImage, getStarshipImage } = swapiService

    const [oneItem, setOneItem] = useState({})
    const [itemImage, setItemImage] = useState({})

    useEffect(() => {
        let cancelled = false
        if (page === "people") {
            getPerson(id).then((item) => {
                !cancelled && setOneItem(item)
            })
            setItemImage(getPersonImage(id))
        } else if (page === "planets") {
            getPlanet(id).then((item) => {
                !cancelled && setOneItem(item)
            })
            setItemImage(getPlanetImage(id))
        } else if (page === "starships") {
            getStarship(id).then((item) => {
                !cancelled && setOneItem(item)
            })
            setItemImage(getStarshipImage(id))
        }
        return () => cancelled = true
    }, [item])

    // if (Object.keys(oneItem).length === 0 && oneItem.constructor === Object) {
    //     return null
    // }
    const re = /_/
    const contentObj = Object.fromEntries(
        Object.entries(oneItem)
            .map(([key, val]) => [key.replace(re, " "), val])

    );
    // Remove duplicated data such as ID and an item Name
    delete contentObj.id
    delete contentObj.name
    const content = Object.entries(contentObj).map(([key, value]) => {
        return (
            <li key={Math.random()} className="list-group-item">
                <span className="term">{`${key.toString().replace(re, " ")}:`}</span>
                <span>{value}</span>
            </li>
        );
    })

    return (
        <ErrorCatcher>
            <div className="item-details card">
            
                <img className="item-image" alt="Alt"
                    src={itemImage} />

                <div className="card-body">
                
                    <h4>{oneItem.name}</h4>
                    <ul className="list-group list-group-flush">
                        {content}
                    </ul>
                </div>
                <span className="close" onClick = {history.goBack}>&times;</span> 
            </div>
        </ErrorCatcher>

    )
}

export default withRouter(StarshipDetails)

