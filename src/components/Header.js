import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><Link to={"/"}>Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to={"/users"}>Users</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link to={"/contact"}>Contact</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
