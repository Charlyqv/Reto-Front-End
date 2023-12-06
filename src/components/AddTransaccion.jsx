import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaccion = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();
  
  const { addTransaccion } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaccion = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaccion(newTransaccion);
  }

  return (
    <>
      <h3>Agregar Movimiento</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Movimiento</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ingresa el movimiento..." required/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Monto <br /></label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Ingresa el monto..." required/>
        </div>
        <button className="add_mov">Agregar Movimiento</button>
      </form>
    </>
  )
}
