import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import animationData from './next.json';
import Lottie from 'lottie-web';
import Typewritter from './typewritter';
import Project from '../project/project';
import Skill from '../skill/skill';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
    animation.setSpeed(0.8);
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <>
      <div className="bghome">
        <div className="intro">
          <div className="about-container" ref={container}></div>
          <div className="intro__desc">
            <h1 className="intro__head">
              Hi, I'm <span className="highlight-name">SAURABH MAURYA</span>
            </h1>
            <h1 className="intro__text"><Typewritter /></h1>
            <div className="details">
              <p>
                I enjoy solving complex problems. Frequently praised as detail-oriented by my peers. 
                I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.
              </p>
              <div className="py-3">
                <Link to="/contact" className="link-button">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
