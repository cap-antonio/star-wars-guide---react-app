import React from 'react'
import './starship-details.css'

const StarshipDetails = (props) => {

    const starshipDet = props.showStarship.starship
    if (!starshipDet) {
        return null
    }
    console.log(starshipDet)
    return (
        <React.Fragment>
            <div className="planet-details card">
                <img className="planet-image" alt={starshipDet.name}
                    src={`https://starwars-visualguide.com/assets/img/starships/${starshipDet.id}.jpg`} />

                <div className="card-body">
                    <h4>{starshipDet.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Class:</span>
                            <span>{starshipDet.starshipClass ? starshipDet.starshipClass : "Unknown"}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Manufacturer:</span>
                            <span>{starshipDet.manufacturer ? starshipDet.manufacturer : "Unknown"}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Crew:</span>
                            <span>{starshipDet.crew ? `${starshipDet.crew} creatures` : "Unknown"}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Passengers:</span>
                            <span>{starshipDet.passengers ? starshipDet.passengers : "Unknown"}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </React.Fragment>
    )
}

export default StarshipDetails