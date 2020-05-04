import React from 'react'
import './planet-details.css'

const PlanetDetails = (props) => {
    
    const planetDet = props.showPlanet.planet
    if(!planetDet) {
        return null
    }
    return ( 
        <React.Fragment>
            <div className="planet-details card">
                <img className="planet-image" alt = {planetDet.name}
                    src={`https://starwars-visualguide.com/assets/img/planets/${planetDet.id}.jpg`}/>

                <div className="card-body">
                    <h4>{planetDet.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population:</span>
                            <span>{planetDet.population ? planetDet.population : "Unknown"}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period:</span>
                            <span>{planetDet.rotation_period ? `${planetDet.rotation_period} hours` : "Unknown"}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Climate:</span>
                            <span>{planetDet.climate ? planetDet.climate : "Unknown"}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter:</span>
                            <span>{planetDet.diameter ? `${planetDet.diameter} km` : "Unknown"}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Days in year:</span>
                            <span>{planetDet.orbital_period ? `${planetDet.orbital_period}` : "Unknown"}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </React.Fragment>
    )
}

export default PlanetDetails