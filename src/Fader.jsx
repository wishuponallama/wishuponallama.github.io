import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './Fader.css'

const Fader = ({ prev, curr }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-out',
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'fade-out') {
        console.log('fade-out');
        setFadeProp({
          fade: 'fade-in'
        })
      } else {
        console.log('fade-in');
        setFadeProp({
          fade: 'fade-out'
        })
      }
    }, 2000);

    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <div className={fadeProp.fade}>{fadeProp.fade == 'fade-out' ? prev : curr}</div>
  )
}

Fader.propTypes = {
  prev: PropTypes.string,
  curr: PropTypes.string,
}

export default Fader
