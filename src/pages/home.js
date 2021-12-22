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



function home() {
    return (
        <div className="home">
            <div className="intro">
                <h1>Hi I'm Sam, a web developer from Worcester UK.</h1>
                
            </div>

           

            <div className="about-me">
                <h2>About</h2>
                <p>I am a keen individual who enjoys learning new skills and accepting new challenges. I have worked for many years as a personal trainer and fitness instructor and recently have decided on a career change. <br /><br />

                From doing well in IT back in school and college, I have decided to pursue a career in the IT industry. Over the last year, I have been studying and learning web development and It's something I have become really passionate about. When I'm not training my personal training clients, I find myself building websites around my personal interests, doing continuous research and learning new web development languages. I also love playing video games and researching how they are made. As a developer my main expertise are HTML, CSS, JavaScript and React, and I am keen to learn much more. Please see my portfolio to see some of my projects I have created so far.</p>
            </div>

            <div className="projects">
                <h2>Projects</h2>

                <div className="theProjectContainer">
                
                    <div className="aProject">
                        <div>
                        <h3>Marvel Website using React</h3>
                        <br />
                        <p>An information website around the Marvel Cinematic Universe using React. (Work in progress)</p><br />
                        </div>
                        <div className="picContainer">
                        <img className="marvelWebPic" src={marvelWebsite} alt="Marvel Website" />
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>Pokemon Pokedex</h3>
                        <br />
                        <p>Pokemon Pokedex Website which contains information on all Pokemon in the Pokeworld.</p><br />
                        </div>
                        <div className="picContainer">
                        <img className="marvelWebPic" src={PokedexWeb} alt="Marvel Website" />
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
                        <img className="marvelWebPic" src={TailsAdventure} alt="Marvel Website" />
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>Pokemon To-Do List</h3>
                        <br />
                        <p>A checklist to help pokemon hunters keep track on their shiny hunting.</p><br />
                        </div>
                        <div className="picContainer">
                        <img className="marvelWebPic" src={ShinyToDo} alt="Marvel Website" />
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
                        <img className="marvelWebPic" src={CoffeeShop} alt="Marvel Website" />
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>Coffee Website</h3>
                        <br />
                        <p>A small website for a little coffee cafe in Worcester</p><br />
                        </div>
                        <div className="picContainer">
                        <img className="marvelWebPic" src={CoffeeWeb} alt="Marvel Website" />
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
                        <img className="marvelWebPic" src={PrevPortfo} alt="Marvel Website" />
                        </div>
                    </div>

                    <div className="aProject">
                        <div>
                        <h3>My Portfolio</h3>
                        <br />
                        <p>This current website.</p><br />
                        </div>
                        <div className="picContainer">
                        <img className="marvelWebPic" src={PokedexWeb} alt="Marvel Website" />
                        </div>
                    </div>


                </div>

            </div>

            <div className="contact">

                <h2>Connect with me</h2>
                <img className="socail-icon" src={Github} alt="Github" />
                <img className="socail-icon" src={LinkedIn} alt="Linked In" />
                <img className="socail-icon" src={Mail} alt="E-Mail" />

            </div>

        </div>

        
    )
}

export default home
