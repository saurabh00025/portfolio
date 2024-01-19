import './contact.css';
import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import animationData from './contacts.json';
import Lottie from 'lottie-web';
import { GrLinkedinOption,GrGithub ,GrFacebook,GrMail, GrInstagram } from "react-icons/gr";
import { FaLink} from "react-icons/fa";
import Form from './form';


const contact = () => {
    const container = useRef(null);
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container : container.current,
      renderer: 'svg',
      loop : true,
      autoplay: true,
      animationData
    });
    animation.setSpeed(0.8);
    return () =>{
      animation.destroy();
    };
  } , []);
    return (
        <div className='contact' id='contact'>
            <h1 className='contact__heading'>Contact</h1>

            <div className='contact__section'>
                <div className="contact__info">
                    <h2 className="project__title">Saurabh Maurya</h2>
                        
                    <p className="contact__text">I am a final Year Student at MNNIT Allahabad.</p>
                    <div ref={container}></div>
                    <ul className='contact__social'>
                    <a href="https://www.linkedin.com/in/saurabh-maurya-176155229/" target="_blank" rel="noreferrer"><GrLinkedinOption /></a>
                    <a href="https://github.com/saurabh00025" target="_blank" rel="noreferrer" ><GrGithub /></a>
                    <a href="https://www.instagram.com/saurabh_maurya10/" target="_blank" rel="noreferrer" ><GrInstagram/></a>
                    <a href="mailto:saurabhmaurya0025@gmail.com" target="_blank"  rel="noreferrer"><GrMail/></a>
                    <Link to=""><FaLink/></Link>
                    </ul>

                    <p className="contact__text">I would love to hear from you!</p>
                
                </div>
                <div className="form__detail">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default contact;
