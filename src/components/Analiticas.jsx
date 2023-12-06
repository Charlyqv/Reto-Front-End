import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const Analiticas = () => {
  return (
    <div className="ver-analiticas-button">
      Ver analíticas <FontAwesomeIcon icon={faChevronDown} />
    </div>
  )
}
