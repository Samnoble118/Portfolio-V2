import React from 'react'
import './home.css'
import marvelWebsite from './Images/Marvel-react-website.png';
import PokedexWeb from './Images/Pokemon-Website-screenshot.png';
import TailsAdventure from './Images/Tails-Adventure.png';
import ShinyToDo from './Images/Shiny-Checklist-screenshot.png';
import PrevPortfo from './Images/Portfolio.png';
import CoffeeShop from './Images/The-Coffee-Shop.png';
import CoffeeWeb from './Images/Coffee-website-screenshot.png';
import Github from './Images/github.png';
import LinkedIn from './Images/linkedin.png';
import Mail from './Images/mail.png';
import Sam from './Images/Sam-2.jpg';
import PortfolioV2 from './Images/Portfolio-V2.png';



function home() {
    return (
        <div id="home-section" className="home">
            <div className="intro">
                <div className="intro-heads-container">
                <div className="intro-heads">
                    <h1>Hi I'm Sam.</h1>
                    <h2>I'm a junior web developer from Worcester UK.</h2>
                </div>
                <div className="intro-pic-container">
                    <img className="samPic" src={Sam} alt="Sam" />
                </div>
                </div>
                <div className="find-more">
                    <a href="#about-section"><p>Find out more...</p></a>
                </div>
            </div>
          

           

            <div id="about-section" className="about-me">
                <h2>About</h2>
                <div className="picBox">
                
                
                <p>I am a keen individual who enjoys learning new skills and accepting new challenges. I have worked for many years as a personal trainer and fitness instructor and recently have decided on a career change. <br /><br />

                From doing well in IT back in school and college, I have decided to pursue a career in the IT industry. Over the last year, I have been studying and learning web development and It's something I have become really passionate about. When I'm not training my personal training clients, I find myself building websites around my personal interests, doing continuous research and learning new web development languages. <br />
                I also love playing video games and researching how they are made. As a developer my main expertise are HTML, CSS, JavaScript and React, and I am keen to learn much more.</p>
                </div>
            </div>

            <div id="projects-section" className="projects">
                <h2>Projects</h2>

                <div className="theProjectContainer">
                
                    <div className="aProject">
                        <div>
                        <h3>Marvel Website using React</h3>
                        <br />
                        <p>An information website around the Marvel Cinematic Universe using React. (Work in progress)</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/React-Marvel-Website/" target='_blank'><img className="marvelWebPic" src={marvelWebsite} alt="Marvel Website" /></a>
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>Pokemon Pokedex</h3>
                        <br />
                        <p>Pokemon Pokedex Website which contains information on all Pokemon in the Pokeworld.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Pokemon-Website/" target='_blank'><img className="marvelWebPic" src={PokedexWeb} alt="Marvel Website" /></a>
                        </div>
                    </div>


                </div>
                      <div className="theProjectContainer">
                
                    <div className="aProject">
                        <div>
                        <h3>Tails Adventure</h3>
                        <br />
                        <p>A score pointing game similar to Flappy Bird.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Tails-Jump-Game/" target='_blank'><img className="marvelWebPic" src={TailsAdventure} alt="Marvel Website" /></a>
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>Pokemon To-Do List</h3>
                        <br />
                        <p>A checklist to help pokemon hunters keep track on their shiny hunting.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Shiny-Checklist/" target='_blank'><img className="marvelWebPic" src={ShinyToDo} alt="Marvel Website" /></a>
                        </div>
                    </div>


                </div>

                <div className="theProjectContainer">
                
                    <div className="aProject">
                        <div>
                        <h3>The Coffee Shop</h3>
                        <br />
                        <p>A clone website of a popular coffee shop in Worcester</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/The-Coffee-Shop/" target='_blank'><img className="marvelWebPic" src={CoffeeShop} alt="Marvel Website" /></a>
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>Coffee Website</h3>
                        <br />
                        <p>A small website for a little coffee cafe in Worcester</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Coffee-and-Cakes-Website/" target='_blank'><img className="marvelWebPic" src={CoffeeWeb} alt="Marvel Website" /></a>
                        </div>
                    </div>


                </div>
                      <div className="theProjectContainer">
                
                    <div className="aProject">
                        <div>
                        <h3>Previous Portfolio</h3>
                        <br />
                        <p>My old Portfolio Website</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Portfolio/" target='_blank'><img className="marvelWebPic" src={PrevPortfo} alt="Marvel Website" /></a>
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>My Portfolio</h3>
                        <br />
                        <p>This current website.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Portfolio-V2/"><img className="marvelWebPic" src={PortfolioV2} alt="Marvel Website" /></a>
                        </div>
                    </div>


                </div>

            </div>

            <div id="contact-section" className="contact">

                <h2>Connect with me</h2>
                <div className="social-icon-container">
                <a href="https://github.com/Samnoble118" target='_blank'><img className="socail-icon" src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/sam-noble-724a75b8/" target='_blank'><img className="socail-icon" src={LinkedIn} alt="Linked In" /></a>
                <a href="mailto:samnoble118@icloud.com"><img className="socail-icon" src={Mail} alt="E-Mail" /></a>
                </div>

            </div>

        </div>

        
    )
}

export default home
