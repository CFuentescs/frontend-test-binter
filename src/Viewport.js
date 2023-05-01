import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const viewportContext = React.createContext({})

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    )
}

ViewportProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

const useViewport = () => {
    const { width, height } = useContext(viewportContext)
    return { width, height }
}

export { useViewport, ViewportProvider,viewportContext }