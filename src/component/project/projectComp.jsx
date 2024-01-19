import './project.css';
import { FaLink,FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Project = (props) => {
    return (
        <>
        <div className='project'>
            <Fade duration = '2000'>
            <Fade triggerOnce direction='left'>
            <div>
                <img className="border-2 border-solid border-yellow-400" alt="" src={props.pic}  loading='lazy' />
            </div>
            </Fade>
    
            <Fade triggerOnce direction='right'>
            <div className="project__detail">
                <h2 className="project__title">{props.title}</h2>
                <p className="project__desc">{props.desc}</p>
                <div className="project__langs">
                {
                    props.langs.map( lang => (
                        <span key={Math.random()} className="project__lang">{lang}</span>
                    ))
                }
                </div>
                <div className='project__links'>
                    { props.liveLink && <a href={props.liveLink}><FaLink /></a>}
                    <a href={props.githubLink}><FaGithub /></a>
                </div>
            </div>
            </Fade>
            </Fade>
        </div>
        </>
  )
}

export default Project;
