import { FaGithub, FaLinkedin,FaFileCode,FaNodeJs,FaServer,FaDatabase,FaGitAlt,FaReact } from "react-icons/fa"
import "./About.css"
import react from './../img/advanced-react.png'
import ui_ux from './../img/coursera-ui-ux.png'
import hackathon from './../img/hospitality-hackathon.png'


const About = ({theme}) => {
  
 const downloadCertificate = (pdfPath) => {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = pdfPath.split("/").pop(); // e.g., cert-1.pdf
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

   const cirtificates = [
      {
        id: 1,
        title: "Advanced-ract",
        description:
          "a cirtificate which i recive through coursera.",
        image: react,
         pdf:'/Advanced react .pdf'
      },
      {
        id: 2,
        title: "UI/UX",
        description:
          "the course which increase and developed my designing skills.",
        image: ui_ux,
        pdf:'/Coursera ui ux.pdf'
        
      },
      {
        id: 3,
        title: "hackathon cirtificate",
        description:
          "A useful experiance which i learn multipe skill and which helped me to test my communication and team work skill",
        image: hackathon,
         pdf:'/Hospitality Hackathon 2025 Certeficate-37.pdf'
       
      }
     
    ];
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
  <FaServer style={{ color: theme === "dark" ? "#ffffff" : "#000000" }} />
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
<h2 style={{fontSize:'50px'}} className="cir-h1">CIRTIF<span className="h2-span">ICATES</span></h2>
    <div className="cirtificate-container">
      
  {cirtificates.map((certificate, index) => (
    <div key={index} className="certificate-card">
      <h2>{certificate.title}</h2>
      <img src={certificate.image} alt={certificate.title} className="cirtificate-img" />
      <p>{certificate.description}</p>
      
      <button onClick={() => downloadCertificate(certificate.pdf)} className="download-btn">download PDF</button>
    </div>
  ))}
</div>

    </div>
  )
}

export default About
