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
import SamNew from './Images/Sam-LinkdIn-Profile-pic.JPG';
import PortfolioV2 from './Images/Portfolio-V2.png';
import ScrollAnimation from 'react-animate-on-scroll';
import BritFloors from './Images/Brit-Floors.png';
import LifeBuys from './Images/Lifebuys.png';
import Biowarehouse from './Images/Biowarehouse.png';
import MrsWifey from './Images/Mrs-Wifey.png';
import JulianSmith from './Images/Julian-Smith.png';
import Zircom from './Images/zircom.png';
import UnapolBrit from './Images/unapol-british.png';
import LapalGrange from './Images/lapal-grange.png';
import EmpireSS from './Images/empire-ss-website.png';
import HandlesatHeart from './Images/Handles-at-Heart.png';



function home() {
    return (
        <div id="home-section" className="home">
            <div className="intro">
                <div className="intro-heads-container">
                <div className="intro-heads">
                    <h1 class="animate__animated animate__bounce">Hi I'm Sam.</h1>
                    <h2>I'm a Web Developer based in the UK.</h2>
                </div>
                <div className="intro-pic-container">
                    <img className="samPic" src={SamNew} alt="Sam" />
                </div>
                </div>
               
            </div>
          

           
  

            <ScrollAnimation animateIn="fadeIn" delay='500' animateOnce='true'>
            <div id="about-section" className="about-me " >
                <h2>My Story</h2>
                <div className="picBox">
                
                <h4>About Me</h4>
                <p>I am a keen and dedicated individual who enjoys learning new skills and accepting new challenges! I have always been interested in technology ever since I was a young kid, always having the latest games console, committing to every game until it was at 100% completion. I studied GCSE ICT at school and quickly became my family and friends go-to person for resolving technical issues. My main expertise are HTML, CSS, JavaScript, React, WordPress, PHP, Bootsrap and I am always keen to learn much more. <br /><br /></p>

                <h4>My Story</h4>
                <p>Back in high school, my main subject of interest was computers and technology. I thoroughly enjoyed ICT lessons and I ended up achieving four A*’s for the subject. Although IT was always a huge passion for me, after school I ended up going down a different route by taking on an apprenticeship within the fitness industry. My parents owned their very own health clubs, so I was able to study to become a qualified Personal Trainer. During those ten years of working in the fitness industry, I gained a huge amount of confidence, knowledge and some key skills.
                <br /><br />
                Just before the lockdown in 2020, I was working for a leisure centre on a self employed basis so that when the lockdown hit, I ended up losing my job. However, this did not stop me. I was determined to keep busy and I always do battle with the barriers that get put in front of me. I used the power of technology to advertise my expertise as a fitness trainer to run online personal training and group fitness classes. I reached out to everybody who was stuck inside their houses, unable to work, not able to go to the gym, and I got them moving in their own homes, completely virtually. My clients revealed that they were happier with their training and actually fitter than what they were before the lockdown started! The success of my online business continued and I was able to keep training people online, even when the lockdown eased, this also transitioned to mobile personal training at people’s homes.
                <br /><br />
                So, how did I become a web developer? After overcoming the huge challenge of creating a business when all of my tools and facilities were taken away from me, I decided to think about where I wanted to take my career to next. I knew how much I enjoyed working with technology and I wanted to take it to the next level and revisit some of the skills I learned back in school and college. In between my fitness training sessions, I signed up to Codecademy and started to learn some programming languages, starting with HTML, then CSS and Javascript. After having built up enough knowledge, I started building some of my own projects which included various websites, a game and some other projects. This was only the beginning. I carried on learning as much as I could, I started using YouTube to expand my knowledge and to see what other developers were making and I started using frameworks and libraries such as React and Bootstrap.
                <br /><br />
                Eventually I managed to find myself a job as a Front End Web Developer, working for an agency called Chameleon Web Services, where I started building websites for real clients! At Chameleon, every day is a school day, I am learning so many new things and putting my skills into practice. I now have a strong skill set of working with CMS platforms such as WordPress and great attention to detail when it comes to web design. My knowledge has expanded to include skills like PHP, jQuery, working with SEO, website hosting, SSL certificates, WordPress plugins, accessing and writing WordPress core files and general problem solving of errors that occur day to day.
                <br /><br />
                As I continue to develop, learn and expand my knowledge, I am excited to see what lies next for me as I am a very quick learner, have patience when it comes to problem solving, strive to accept and accomplish new challenges and always looking to progress!
                </p>
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
                    <p className="proSmlDesc">Still in development</p>
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
                    <p className="proSmlDesc">Still in development</p>
                    <p>An E-Commerce website that I have built using WordPress and WooCommerce, a bridal online shop that sells clothes for the big day.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://176.32.230.11/mrswifey.co.uk/" target='_blank'><img className="marvelWebPic" src={MrsWifey} alt="Mrs Wifey Website" /></a>
                    </div>
                </ScrollAnimation>
                </div>

                <div className="theProjectContainer">
                
                    
                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Julian Smith</h3>
                    <br />
                    <p className="proSmlDesc">A live site.</p>
                    <p>An informational website that I have built using WordPress and WooCommerce for Julian Smith who featured on Brition's Got Talent in 2009.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://juliansmithsax.co.uk/" target='_blank'><img className="marvelWebPic" src={JulianSmith} alt="Julian Sax Website" /></a>
                    </div>
                </ScrollAnimation>
               

                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Zircom</h3>
                    <br />
                    <p className="proSmlDesc">Still in development.</p>
                    <p>An informational website for an electrical service company called Zircom, built with WordPress.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://79.170.40.231/zircom2021.co.uk/" target='_blank'><img className="marvelWebPic" src={Zircom} alt="Zircom Website" /></a>
                    </div>
                </ScrollAnimation>
                </div>

                <div className="theProjectContainer">
                
                    
                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Unapolagetically British</h3>
                    <br />
                    <p className="proSmlDesc">Still in development.</p>
                    <p>An E-Commerce website built using WordPress and WooCommerce, for a client who sells unique clothing.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://79.170.40.247/unapol-brit.com/" target='_blank'><img className="marvelWebPic" src={UnapolBrit} alt="Unapolagetically British Website" /></a>
                    </div>
                </ScrollAnimation>
               

                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Lapal Grange</h3>
                    <br />
                    <p className="proSmlDesc">A Live Site.</p>
                    <p>An informational website for a preschool based in Halesowen, a design to look like a school's clipboard, built with WordPress.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="https://lapalgrangepreschool.co.uk/" target='_blank'><img className="marvelWebPic" src={LapalGrange} alt="Lapal Grange Website" /></a>
                    </div>
                </ScrollAnimation>
                </div>

                <div className="theProjectContainer">
                
                    
                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Empire Security Services</h3>
                    <br />
                    <p className="proSmlDesc">A Live Site.</p>
                    <p>A brochure website to advertise the different services that Empire provides. Built on WordPress.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://empiress.co.uk/" target='_blank'><img className="marvelWebPic" src={EmpireSS} alt="Empire Website" /></a>
                    </div>
                </ScrollAnimation>
               

                <ScrollAnimation className="aProject" animateIn="fadeIn" delay='500' animateOnce='true'>
                    <div>
                    <h3>Handles at Heart</h3>
                    <br />
                    <p className="proSmlDesc">Still in development.</p>
                    <p>An E-Commerce website for a company who sells various handles for doors, built with WordPress and WooCommerce.</p><br />
                    </div>
                    <div className="picContainer">
                    <a href="http://217.199.187.198/handlesatheart.co.uk/" target='_blank'><img className="marvelWebPic" src={HandlesatHeart} alt="Handles at Heart Website" /></a>
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
