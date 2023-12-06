import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container-fluid"> 
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Octubre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Noviembre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Diciembre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Enero</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Febrero</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
