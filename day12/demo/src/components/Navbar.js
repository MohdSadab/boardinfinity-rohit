import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-lg  bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                
                    <ul className="navbar-nav  navbar-collapsed">
                        <li className="nav-item ">
                            {/* to means href in anchor tag */}
                            <Link className="nav-link active" to="details">Details</Link>
                            {/* <a className="nav-link active" href="/details">Details</a> */}
                        </li>

                        <li className="nav-item mx-3">
                            {/* to means href in anchor tag */}
                            <Link className="nav-link active" to="add">Add</Link>
                            {/* <a className="nav-link active" href="/details">Details</a> */}
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar