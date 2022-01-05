import React, { useEffect, useState } from 'react'
import './navbar.css'

function navbar() {

    // const [windowDimention, setWindowDimention] = useState(null);

    // useEffect(() => {
    //     setWindowDimention(window.innerWidth);
    // }, []);

    // useEffect(() => {
    //     function handleResize() {
    //         setWindowDimention(window.innerWidth);
    //     }

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    //     }, [] );

    //     const isMobile = windowDimention <= 640;

    // const burger = document.getElementsByClassName('burger')[0]
    // const navItems = document.getElementsByClassName('nav-items')[0]

    // burger.addEventListener('click', () => {
    // navItems.classList.toggle('active')
    // })


    return (

        


        <div className="navbar">
            <h1>SN</h1>
            <div className="burger">
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
