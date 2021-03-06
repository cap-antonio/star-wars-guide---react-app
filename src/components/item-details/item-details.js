import React from 'react'
import './item-details.css'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'
import { withRouter } from 'react-router-dom'

const ItemDetails = ({ showItem, getImage, history, match }) => {
    if (Object.keys(showItem).length === 0 && showItem.constructor === Object) {
        return null
    }
    
    const clickHandle = () => {
        const id = showItem.id
        history.push(`${match.path}/${id}`)
    }
    const re = /_/
    const contentObj = Object.fromEntries(
        Object.entries(showItem)
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
                    src={getImage(showItem.id)} />

                <div className="card-body">
                    <h4>{showItem.name}</h4>
                    <ul className="list-group list-group-flush">
                        {content}
                    </ul>
                    <button className = "btn btn-primary" onClick = {clickHandle}>More info</button>
                </div>
                
            </div>
            
        </ErrorCatcher>
    )
}

export default withRouter(ItemDetails)