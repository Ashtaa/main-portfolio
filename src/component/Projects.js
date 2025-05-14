import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ecommerceImg from '../img/ecommerce2.png';
import gym from '../img/gym.png';
import weather from '../img/weather.png';
import coursera from '../img/coursera.png';
import bingo from '../img/bingo.png';
import "./project.css";

const Projects = ({ theme }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.querySelectorAll(".project-card"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "An e-commerce platform built with React and firebase. Features include user authentication, product search and shopping cart.",
      image: ecommerceImg,
      technologies: ["React", "Firebase"],
      githubUrl: "https://github.com/Ashtaa/Ablack",
      liveUrl: "https://ashtaa.github.io/Ablack/",
    },
    {
      id: 2,
      title: "Gym",
      description:
        "A sleek fitness website built with React to showcase workout plans and gym services.",
      image: gym,
      technologies: ["React"],
      githubUrl: "https://github.com/Ashtaa/gym",
      liveUrl: "https://ashtaa.github.io/gym/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A React-based weather app displaying real-time forecasts using the OpenWeather API.",
      image: weather,
      technologies: ["JavaScript", "React", "OpenWeather API"],
      githubUrl: "https://github.com/Ashtaa/weather",
      liveUrl: "https://ashtaa.github.io/weather/",
    },
    {
      id: 4,
      title: "Bingo",
      description:
        "A multiplayer Bingo game built with React featuring real-time number tracking and interactive cards..",
      image: bingo,
      technologies: ["React"],
      githubUrl: "https://github.com/Ashtaa/Bingo_update",
      liveUrl: "https://ashtaa.github.io/Bingo_update/",
    },
    {
      id: 5,
      title: "Coursera",
      description:
        "A website I built as my final project for a Coursera course.",
      image: coursera,
      technologies: ["React"],
      githubUrl: "https://github.com/Ashtaa/coursera",
      liveUrl: "https://ashtaa.github.io/coursera/",
    },
  ];

  return (
    <div className={`projects-container ${theme}`} ref={containerRef}>
      <div className="projects-content">
        <h1 className={`projects-title ${theme}`}>My Projects</h1>
        <p className={`projects-intro ${theme}`}>
          Here are some of the projects I've worked on. Each project represents different skills and technologies I've
          mastered.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className={`project-card ${theme}`} key={project.id}>
              <div className="project-image-container">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-details">
                <h2 className={`project-title ${theme}`}>{project.title}</h2>
                <p className={`project-description ${theme}`}>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span className="technology-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
