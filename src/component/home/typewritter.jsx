import React from 'react'
import Typewriter from "typewriter-effect";
const typewritter = () => {
  return (
    <div>
      <span className="badge badge-dark">
                <Typewriter
                options={{
                    strings: ['Student', 'Web Developer' ,'Tech Enthusiast'],
                    autoStart: true,
                    loop: true,
                }}
                />
                </span>
    </div>
  )
}

export default typewritter
