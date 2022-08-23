import React, { useEffect, useState } from 'react'
import './navbar.css'

function navbar() {

    
    function navBurger () {
    const navItems = document.getElementsByClassName('nav-items')[0]

    navItems.classList.toggle('active')
    
}


    return (

        


        <div className="navbar">
            <h1>SN</h1>
            <div className="burger" onClick={navBurger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
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
