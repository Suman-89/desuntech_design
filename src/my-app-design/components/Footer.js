import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container_footer">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='footer'>
                    <div className="container-fluid" id='footer_container'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav_footer">
                            <ul className='footer_list'>
                                <li>
                                    <Link className='nav-link' to='/'>
                                    <i class="fa-solid fa-house fa-lg"></i>
                                    </Link>
                                </li>
                                <li>
                                <Link className='nav-link' to='/webpage'>
                                <i class="fa-solid fa-table-cells-large fa-lg"></i>
                                    </Link>
                                </li>
                                <li>
                                    <i class="fa-regular fa-calendar-days fa-lg"></i>

                                </li>
                                <li>
                                    <i className="fa-solid fa-cart-shopping fa-lg" id='footer_cart'>
                                    </i>
                                </li>
                                <li>
                                    <i class="fa-solid fa-user fa-lg"></i>

                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Footer
