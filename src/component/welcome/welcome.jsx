import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './welcome.json';

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
        <div className="loading-container w-1/3 mx-auto my-auto py-32" ref={container}></div>

    );
}

export default welcome;
