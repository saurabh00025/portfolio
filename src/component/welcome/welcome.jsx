import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './welcome.json';
import './welcome.css';

const welcome = () => {
    const container = useRef(null);
    useEffect(() => {
        const animation = Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData
      });
      animation.setSpeed(0.5);
      return ()=>{
          animation.destroy();
      };
    }, []);
    return (
        <div class = 'bgwelcome'>
            <div className="flex items-center justify-center h-screen">
                <div className="w-1/3 py-32" ref={container}></div>
            </div>

        </div>
    );
}

export default welcome;
