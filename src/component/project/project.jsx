import Project from './projectComp';
import port from './portfolio1.png';
import vlog from './vlog.png';
import furniture from './furniture.png';
import bb from './Anokhi Pehel.png';

const project = () => {
    
    return (
        <div class = 'bgproject'>
        <div className='projects' id='projects'>
            <h1 className='section__heading'>Projects</h1>
            <div className="projects__projectCont">

            
            <Project title="Anokhi Pehel"
             desc="Developed the Anokhi Pehel website exclusively for educators to manage free education
              for underprivileged students. Features include secure login, student enrollment, 
              attendance tracking, performance monitoring, and class schedule management, enabling 
              educators to streamline administrative tasks and provide personalized attention to students."
             langs={['React Js','Redux','Node JS','Mongo DB','Express JS','Javascript']}
             liveLink="https://anokhi-pehel.azurewebsites.net/"
             githubLink="https://github.com/saurabh00025/Anokhi-Pehel"
             pic={bb}
             />

            {/* Paper Factory */}
              <Project title="Home Heaven" 
              desc="Designed an e-commerce furniture shop with AR capabilities, 
              integrating 3D models via Vectary. Engineered a responsive UI using 
              Vite, React, and Tailwind CSS. Enabling users to visualize furniture in their spaces,
              this project blends real-world objects seamlessly with computer-generated information,
              providing an immersive and interactive shopping experience."
              langs={['Vite','React','Javascript','Talwind CSS']} 
              liveLink="https://mnnit-furniture-store.vercel.app/"
              githubLink="https://github.com/saurabh00025/Furniture_project"
              pic = {furniture}
              />

             {/* Recruit Plus */}
             <Project title="NewsHub" 
              desc="Designed a robust web application, transforms your news consumption experience. Seamlessly 
              access the latest articles while actively participating in the discourse—contribute by posting 
              updates from a myriad of sources. This dynamic platform ensures users stay informed, engaged, 
              and actively shape the evolving narrative of the global news landscape."
              langs={['HTML','CSS' ,'Javascript' ,'Node.js','Express.js']} 
              liveLink=""
              githubLink="https://github.com/saurabh00025/news-website"
              pic = {vlog}
              />



            {/* Portfolio project */}
             <Project title="Portfolio"
             desc="Designed my Portfolio Website with Vite.js and Tailwind CSS, employing a modular structure 
             through diverse React components. Leveraged React Libraries for enhanced interactivity, while 
             bringing animations to life using Lottie-Web. This tech stack ensures a seamless blend of 
             performance, style, and dynamic user engagement for an impactful portfolio experience."
             langs={['React Js','Vite Js','Bootstrap','Lottie-Animation']}
             liveLink="https://saurabh-maurya.vercel.app/"
             githubLink="https://github.com/saurabh00025/portfolio" 
             pic = {port}
             />

            </div>
        </div>
      </div>
  )
}

export default project;
