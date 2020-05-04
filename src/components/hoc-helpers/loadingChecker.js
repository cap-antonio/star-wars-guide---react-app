import Spinner from "../spinner/spinner"
import React from 'react'


const LoadingChecker = ({loading, ...props}) => (Component) => {
    if(loading === true) {
        return <Spinner />
    }
    return <Component {...props} />
}

export default LoadingChecker