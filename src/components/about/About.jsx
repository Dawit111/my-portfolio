import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FiUsers} from 'react-icons/fi'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About=()=> {
    return(
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>
            
            <div className="container about__container">
                <div className="about_me">
                    <div className="about__me-image ">
                      <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                   <div className='about__cards'>
                     <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>2+ Years Working</small>
                     </article>
                     <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>30+ Worldwide</small>
                     </article>
                     <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>10+ completed</small>
                     </article>
                   </div>

                   <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dignissimos 
                    odio porro est quae aliquid, repellat ipsa error non magnam quibusdam incidunt 
                    repellendus necessitatibus eveniet dolor ullam quasi molestias vero.
                   </p>

                   <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}
export default About