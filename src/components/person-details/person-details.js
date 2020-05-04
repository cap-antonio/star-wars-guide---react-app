import React from 'react'
import './person-details.css'

const PersonDetails = (props) => {
    const personDet = props.showPerson.person
    if(!personDet) {
        return null
    }
    return ( 
        <React.Fragment>
            <div className="person-details card">
                <img className="person-image" alt = "Alt"
                    src={props.getImage(personDet.id)}/>

                <div className="card-body">
                    <h4>{personDet.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{personDet.gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{personDet.birth_year}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{personDet.eye_color}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Mass</span>
                            <span>{personDet.mass}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Height</span>
                            <span>{personDet.height}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Hair Color</span>
                            <span>{personDet.hair_color}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Skin Color</span>
                            <span>{personDet.skin_color}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </React.Fragment>
    )
}

export default PersonDetails