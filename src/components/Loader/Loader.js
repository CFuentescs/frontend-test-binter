import React from 'react'
import PropTypes from 'prop-types'
import './Loader.scss'

class Loader extends React.Component {
  render() {
    const backgroundClass = this.props.hasWhiteBackground ? ' white' : ''
    return (
      <div
        className='load-container load3'
        aria-label='Cargando'
        data-testid='loading-container'
      >
        <div className={`loader ${backgroundClass}`} />
      </div>
    )
  }
}

Loader.defaultProps = {
  hasWhiteBackground: false,
}

Loader.propTypes = {
  hasWhiteBackground: PropTypes.bool,
}

export default Loader
