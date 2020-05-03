import React from 'react'
import './item-details.css'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'

const ItemDetails = ({showItem, getImage, error}) => {

    const itemDet = showItem.item
    if (!itemDet) {
        return null
    }
    const re = /_/
    const contentObj = Object.fromEntries(
        Object.entries(itemDet)
        .map(([ key, val ]) => [ key.replace(re, " "), val])
        
    );
    // Remove duplicated data such as ID and an item Name
    delete contentObj.id
    delete contentObj.name
    const content = Object.entries(contentObj).map(([key,value])=>{
        return (
            <li key = {Math.random()} className="list-group-item">
                <span className="term">{`${key.toString().replace(re, " ")}:`}</span>
                <span>{value}</span>
            </li>
        );
      })
    return (
        <ErrorCatcher>
            <div className="item-details card">
                <img className="item-image" alt="Alt"
                    src={getImage(itemDet.id)} />

                <div className="card-body">
                    <h4>{itemDet.name}</h4>
                    <ul className="list-group list-group-flush">
                        {content}
                    </ul>
                </div>
            </div>

        </ErrorCatcher>
    )
}

export default ItemDetails