import { FaGithub, FaLinkedin,FaFileCode,FaNodeJs,FaServer,FaDatabase,FaGitAlt,FaReact } from "react-icons/fa"
import "./About.css"

const About = ({theme}) => {
  return (
    <div className={`about-container ${theme}`}>
      <div className={`about-content  ${theme} `}>
        <h1 className={`about-title  ${theme} `}>About Me</h1>

        <p className={`about-text  ${theme} `}>
          Hello! I'm a passionate developer with experience in building web applications using modern technologies. I
          enjoy creating user-friendly and efficient solutions to complex problems.
        </p>

        <p className={`about-text  ${theme} `}>
          I'm proficient in React, HTML, CSS, and various other front-end and back-end technologies. I'm always eager to
          learn new things and stay up-to-date with the latest industry trends.
        </p>

        <h2 className="about-subtitle">Skills</h2>
       <p className={`about-p-text ${theme}`}>
  <FaServer style={{ color: '#000000' }} />
  <FaNodeJs style={{ color: '#3c873a' }} />
  <FaReact style={{ color: '#61dafb' }} />
  <FaDatabase style={{ color: '#4DB33D' }} />
  <FaFileCode style={{ color: '#3178c6' }} />
  <FaGitAlt style={{ color: '#f05032' }} />
</p>

        <h2 className="about-subtitle">Connect with Me</h2>
        <div className="social-links">
          <a href="https://github.com/Ashtaa" aria-label="GitHub" className="social-link">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/ashenafisahele" aria-label="LinkedIn" className="social-link">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
