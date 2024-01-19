import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';

const navigation = () => {  
    const [showNav,SetshowNav] = useState(false); 
    return (
     <nav className='navbar'>
      <div className='navbar__main'>
        <Link to = "/" className="navname text-2xl"> Saurabh? </Link>
        <ul className='navbar__list--desktop'>
          <li><Link to='/' class = "hover:text-green-300">Home</Link></li>
          <li><Link to='projects' class = "hover:text-green-300">Projects</Link></li>
          <li><Link to = "skill" class = "hover:text-green-300">Skills</Link></li>
          <li><Link to='contact' class = "hover:text-green-300">Contact</Link></li>
        </ul>
        <span className="navbar__mobile--icon" onClick={() => SetshowNav(prev => !prev)}>{showNav ? <HiOutlineX /> : <HiMenuAlt3 />}</span>
        <ul className={showNav ? 'navbar__list--mobile navbar__list--mobileShow' : 'navbar__list--mobile'}>
          
           <li><a href='#projects'>Projects</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
      </nav>
    );
};

export default navigation
