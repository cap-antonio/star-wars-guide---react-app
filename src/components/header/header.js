import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link exact to="/people">
                    StarWars DB
                </Link>
            </h3>
            <ul className = "d-flex">
                <li>
                    <Link to="/people">Characters</Link>
                </li>
                <li>
                    <Link to="/planets">Planets</Link>
                </li>
                <li>
                    <Link to="/starships">Starships</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header