import React from 'react'
import './navbar.css'

function navbar() {
    return (
        <div className="navbar">
            <h1>SN</h1>
            <ul className="nav-items">
                <a href="#home-section"><li>Home</li></a>
                <a href="#about-section"><li>About</li></a>
                <a href="#projects-section"><li>Projects</li></a>
                <a href="#contact-section"><li>Connect</li></a>
            </ul>
        </div>
    )
}

export default navbar
