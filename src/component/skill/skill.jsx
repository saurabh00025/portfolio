import React from 'react'
import Zoom from 'react-reveal/Zoom';
import './skill.css';

import c from './images/c++.png';
import sql from './images/sql.jpg';
import bootstrap from './images/bootstrap.svg';
import css from './images/css3.svg';
import github from './images/github.svg';
import react from './images/react.svg';
import nodejs from './images/nodejs.svg';
import html from './images/html5.svg';
import mongo from './images/mongodb.svg';
import express from './images/expressjs.png';
import pm from './images/postman.png';
import redux from './images/redux.svg';
const skill = () => {
  return (
    <div className="skill" id='skills'>
      <h1 className=' skill__heading'>My Tech Stack</h1>
      <div className="skill__look">
        <div className='skill__section'>
          <Zoom>  
            <div className="skill__box">
              <img className="skill__image" alt="" src={c}  loading='lazy' />
              <p>C/C++</p>
            </div>
          </Zoom> 
          
          <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={html}  loading='lazy' />
                <p >HTML</p>
            </div>
            </Zoom>

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt=""  src={css}  loading='lazy' />
                <p>Css</p>
            </div>
            </Zoom>

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={bootstrap}  loading='lazy' />
                <p>Bootstrap</p>
            </div>
            </Zoom>

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={react}  loading='lazy' />
                <p>React</p>
            </div>
            </Zoom>

            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={redux}  loading='lazy' />
                <p>Redux</p>
            </div>
            </Zoom>
        </div>

        <div className='skill__section'>
           
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt=""  src={nodejs}  loading='lazy' />
                <p>Node Js</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image"  alt="" src={express}  loading='lazy' />
                <p>Express Js</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={mongo}  loading='lazy' />
                <p>Mongo DB</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={sql}  loading='lazy' />
                <p>My SQL</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={github}  loading='lazy' />
                <p>Github</p>
            </div>
            </Zoom>
            <Zoom>
            <div className="skill__box">
                <img className="skill__image" alt="" src={pm}  loading='lazy' />
                <p>Postman</p>
            </div>
            </Zoom>
            </div>
        </div>
      </div>
  );
};

export default skill
