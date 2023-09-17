import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary" id='header'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://e7.pngegg.com/pngimages/616/35/png-clipart-red-and-white-film-icon-area-text-brand-sign-apps-google-movies-text-rectangle.png" width="30" height="30" id='logo' className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/webpage">Features</Link>
                            </li>
                        </ul>
                        <i className="fa-solid fa-magnifying-glass fa-lg" id='search'></i>
                        <i className="fa-regular fa-heart fa-lg" id='heart'></i>
                        <i className="fa-solid fa-cart-shopping fa-lg" id='cart'>
                        </i>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header
