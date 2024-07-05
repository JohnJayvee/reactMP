import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <>
      <FontAwesomeIcon className='text-pink-700 mr-2' icon={faCode} />
      JJ Web Service Solution
    </>
  )
}

export default Logo