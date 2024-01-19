import './footer.css';
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './bottom.json';

const footer = () => {
    const container = useRef(null);
    useEffect(() => {
        const animation = Lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData
        });
        animation.setSpeed(0.5);
        return () => {
            animation.destroy();
        }
      }, []);

    return (
        
        <div className='fotter'>
        <div className="bottom-container" ref={container}></div>
       <h3 className='fotter__head'> @ 2024 | Saurabh Maurya</h3>
        </div> 
    
    )
}

export default footer
