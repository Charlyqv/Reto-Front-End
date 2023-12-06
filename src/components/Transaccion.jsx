import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalState';

export const Transaccion = ({ transaction }) => {

  const { deleteTransaccion } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const icon = transaction.amount < 0 ? <FontAwesomeIcon icon={faSquare} size="2x" style={{ color: '#2ecc71' }}/> : <FontAwesomeIcon icon={faCircle} size="2x" style={{ color: '#c0392b' }}/>;

  return (
    <li className='minus'>
      {icon}<p>{transaction.text}</p><span>{sign}${Math.abs(transaction.amount)} <FontAwesomeIcon icon={faChevronDown} size="sm"/> </span>
      <button onClick={() => deleteTransaccion(transaction.id)} className='delete-btn'>X</button>
    </li>
  )
}
