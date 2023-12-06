export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACCION':
      return {
        ...state,
        transactions: state.transactions.filter(transaccion => transaccion.id !== action.payload)
      }
    case 'ADD_TRANSACCION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default: 
      return state;
  }
}