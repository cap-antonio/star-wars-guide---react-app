import React from 'react'
import ErrorCatcher from '../ErrorCatcher/ErrorCatcher'
import SwapiService from '../../API/swapiService'

const Row = ({ left, right }) => {
    return (
        <ErrorCatcher>
            <div className="row mb2">
                <div className="col-md-6">
                    {left}
                </div>
                <div className="col-md-6">
                    {right}
                </div>
            </div>
        </ErrorCatcher>
    )
}

export default Row