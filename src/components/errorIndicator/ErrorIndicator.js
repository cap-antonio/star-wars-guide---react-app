import React from 'react'
import './error-indicator.css'
import icon from './dart.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">[sounds of lightsaber]</span>
            <span>
                something is terribly wrong but Obi-Wan Kenobi is on his way to solve it.
            </span>
            <span>
                May the Force be with this widget!
            </span>
        </div>
    )
}

export default ErrorIndicator