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
import ScrollAnimation from 'react-animate-on-scroll';
import BritFloors from './Images/Brit-Floors.png';
import LifeBuys from './Images/Lifebuys.png';
import Biowarehouse from './Images/Biowarehouse.png';
import MrsWifey from './Images/Mrs-Wifey.png';
import JulianSmith from './Images/Julian-Smith.png';
import Zircom from './Images/Coming-soon.jpeg';



function home() {
    return (
        <div id="home-section" className="home">
            <div className="intro">
                <div className="intro-heads-container">
                <div className="intro-heads">
                    <h1 class="animate__animated animate__bounce">Hi I'm Sam.</h1>
                    <h2>I'm a junior web developer based in the UK.</h2>
                </div>
                <div className="intro-pic-container">
                    <img className="samPic" src={Sam} alt="Sam" />
                </div>
                </div>
               
            </div>
          

           
  

            <ScrollAnimation animateIn="fadeIn" delay='500' animateOnce='true'>
            <div id="about-section" className="about-me " >
                <h2>My Story</h2>
                <div className="picBox">
                
                
                <p>I am a keen individual who enjoys learning new skills and accepting new challenges. I have worked for many years as a personal trainer and fitness instructor and recently have decided on a career change. <br /><br />

                From doing well in IT back in school and college, I have decided to pursue a career in the IT industry. Over the last year, I have been studying and learning web development and It's something I have become really passionate about. When I'm not training my personal training clients, I find myself building websites around my personal interests, doing continuous research and learning new web development languages. <br />
                I also love playing video games and researching how they are made. As a developer my main expertise are HTML, CSS, JavaScript and React, and I am keen to learn much more.</p>
                </div>
            </div>
            </ScrollAnimation>


            <ScrollAnimation animateIn="fadeIn" delay='500' animateOnce='true'>

            <div id="projects-section" className="projects">
                <h2>Projects</h2>

            <div className="btnSection">
                <div className="btn1Sec">
                <a href="#commericalProjects"><button class="btn draw-border">Commercial Projects</button></a>
                <p>Check out some of the projects that I have built and am working on during my time working as a web developer for Chameleon Web Services.</p>
                </div>
                <div className="btn1Sec">
                <a href="#personalProjects"><button class="btn draw-border">Personal Projects</button></a>
                <p>Check out some of the projects that I have built and am working on during my spare time at home.</p>
                </div>
            </div>


            <div className="proIntoSec" id="commericalProjects">
                <h3>Commercial Projects</h3>
                <p>Current projects that I have built and am currently building during my time as a Web Developer at Chameleon Web Services.</p>
            </div>

                <div className="theProjectContainer">
                
                    
                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Brit Floors</h3>
                    <br />
                    <p className="proSmlDesc">A live site.</p>
                    <p>An E-Commerce website that I have built using WordPress and WooCommerce for a client who runs a flooring company.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://britfloors.co.uk/" target='_blank'><img className="marvelWebPic" src={BritFloors} alt="BritFloors Website" /></a>
                    </div>
                </ScrollAnimation>
               

                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Lifebuys</h3>
                    <br />
                    <p className="proSmlDesc">Coming soon... Still in development</p>
                    <p>An E-Commerce website that I have built using WordPress and WooCommerce, a huge online shopping store similar to John Lewis.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://79.170.40.33/lifebuys.co.uk/" target='_blank'><img className="marvelWebPic" src={LifeBuys} alt="Lifebuys Website" /></a>
                    </div>
                </ScrollAnimation>
                </div>

                <div className="theProjectContainer">
                
                    
                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Biowarehouse</h3>
                    <br />
                    <p className="proSmlDesc">A live site.</p>
                    <p>An E-Commerce website that I have built using WordPress and WooCommerce for a client who sells biodegrable products online.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="https://www.biowarehouse.co.uk/" target='_blank'><img className="marvelWebPic" src={Biowarehouse} alt="Biowarehouse Website" /></a>
                    </div>
                </ScrollAnimation>
               

                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Mrs Wifey</h3>
                    <br />
                    <p className="proSmlDesc">Coming soon... Still in development</p>
                    <p>An E-Commerce website that I have built using WordPress and WooCommerce, a bridal online shop that sells clothes for the big day.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://79.170.40.33/lifebuys.co.uk/" target='_blank'><img className="marvelWebPic" src={MrsWifey} alt="Mrs Wifey Website" /></a>
                    </div>
                </ScrollAnimation>
                </div>

                <div className="theProjectContainer">
                
                    
                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Julian Smith</h3>
                    <br />
                    <p className="proSmlDesc">Coming soon... Still in development.</p>
                    <p>An informational website that I have built using WordPress and WooCommerce for Julian Smith who featured on Brition's Got Talent in 2009.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://176.32.230.27/juliansmith.co.uk/" target='_blank'><img className="marvelWebPic" src={JulianSmith} alt="Julian Sax Website" /></a>
                    </div>
                </ScrollAnimation>
               

                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Zircom</h3>
                    <br />
                    <p className="proSmlDesc">Coming soon... Still in development.</p>
                    <p>An informational website for an electrical service company called Zircom, built with.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="#" target='_blank'><img className="marvelWebPic" src={Zircom} alt="Zircom Website" /></a>
                    </div>
                </ScrollAnimation>
                </div>

            
            <div className="proIntoSec" id="personalProjects">
            {/* <ScrollAnimation animateIn="fadeIn" delay='500' animateOnce='true'> */}
            <div >
                <h3>Personal Projects</h3>
                <p>Projects that I have built and am currently building in my spare time, using HTML, CSS, JavaScript, React and Bootstrap.</p>
            </div>
            {/* </ScrollAnimation> */}
            </div> 

                <div className="theProjectContainer">
                
                    
                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>Marvel Website built with React</h3>
                        <br />
                        <p>An information website around the Marvel Cinematic Universe built with React. </p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/React-Marvel-Website/" target='_blank'><img className="marvelWebPic" src={marvelWebsite} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>
                   

                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>Pokemon Pokedex</h3>
                        <br />
                        <p>Pokemon Pokedex Website which contains information on all Pokemon in the Pokeworld.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Pokemon-Website/" target='_blank'><img className="marvelWebPic" src={PokedexWeb} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>


                </div>
                      <div className="theProjectContainer">
                
                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>Tails Adventure</h3>
                        <br />
                        <p>A score pointing game similar to Flappy Bird.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Tails-Jump-Game/" target='_blank'><img className="marvelWebPic" src={TailsAdventure} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>Pokemon To-Do List</h3>
                        <br />
                        <p>A Pokemon shiny-hunter check Todo list.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Shiny-Checklist/" target='_blank'><img className="marvelWebPic" src={ShinyToDo} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>


                </div>

                <div className="theProjectContainer">
                
                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>The Coffee Shop</h3>
                        <br />
                        <p>A clone website of a popular coffee shop in Worcester</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/The-Coffee-Shop/" target='_blank'><img className="marvelWebPic" src={CoffeeShop} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>Coffee Website</h3>
                        <br />
                        <p>A small website for a little coffee cafe in Worcester</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Coffee-and-Cakes-Website/" target='_blank'><img className="marvelWebPic" src={CoffeeWeb} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>


                </div>
                      <div className="theProjectContainer">
                
                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>Previous Portfolio</h3>
                        <br />
                        <p>My old Portfolio Website</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Portfolio/" target='_blank'><img className="marvelWebPic" src={PrevPortfo} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                        <div>
                        <h3>My Portfolio</h3>
                        <br />
                        <p>This current website.</p><br />
                        </div>
                        <div className="picContainer">
                        <a href="https://samnoble118.github.io/Portfolio-V2/"><img className="marvelWebPic" src={PortfolioV2} alt="Marvel Website" /></a>
                        </div>
                    </ScrollAnimation>


                </div>

            </div>
            </ScrollAnimation>

            <div id="contact-section" className="contact">

                <h2>Connect with me</h2>
                <div className="social-icon-container">
                <a href="https://github.com/Samnoble118" target='_blank'><img className="socail-icon" src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/sam-noble-724a75b8/" target='_blank'><img className="socail-icon" src={LinkedIn} alt="Linked In" /></a>
                <a href="mailto:samnoble118@icloud.com"><img className="socail-icon" src={Mail} alt="E-Mail" /></a>
                </div>
                <p>© Sam Noble 2022</p>

            </div>

        </div>

        
    )
}

export default home
