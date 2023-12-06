import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaccion } from './Transaccion';

export const TransaccionList = () => {

  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
      <strong>Historial</strong>
      <ul className='list'>
        {transactions.map(transaction => ( <Transaccion key={transaction.id} transaction={transaction} /> ))}
      </ul>
    </>
  )
}
