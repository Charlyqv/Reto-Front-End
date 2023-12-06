// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IngresosGastos } from './components/IngresosGastos'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Analiticas } from './components/Analiticas';
import { Navbar } from './components/Navbar';
import { TransaccionList } from './components/TransaccionList';
import { AddTransaccion } from './components/AddTransaccion';
import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <Navbar/>
      <div className="container-div">
        <div className="container">
          <Header/>
          <Balance />
          <IngresosGastos />
          <Analiticas />
        </div>
          <TransaccionList />
          <AddTransaccion />
      </div>
    </GlobalProvider>
  )
}

export default App
