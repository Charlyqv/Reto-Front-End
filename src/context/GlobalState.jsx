import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaccion(id) {
    dispatch({
      type: 'DELETE_TRANSACCION',
      payload: id
    })
  }

  function addTransaccion(transaccion) {
    dispatch({
      type: 'ADD_TRANSACCION',
      payload: transaccion
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaccion,
    addTransaccion
  }}>
    {children}
  </GlobalContext.Provider>);
}