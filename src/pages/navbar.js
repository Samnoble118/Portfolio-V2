import React from 'react'
import './navbar.css'

function navbar() {
    return (
        <div className="navbar">
            <h1>SN</h1>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default navbar
