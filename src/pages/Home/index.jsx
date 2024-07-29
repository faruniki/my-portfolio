import React, { useRef, useState } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../../styles/home.css";
import Tools from "./tools";
import Profile from "../../documents/profile.jpeg";
import Projects1 from "../../documents/projects/project-1.jpg";
import Pesantren from "../../documents/projects/pesantren.jpg";
import Sivina from "../../documents/projects/sivina.jpg";
import Bapangnas from "../../documents/projects/bapangnas.jpg";
import Triage from "../../documents/projects/triage.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        document.querySelector(".navbar").style.top = "-7vh";
      } else {
        document.querySelector(".navbar").style.top = "0";
      }

      lastScrollTop = currentScroll;
    },
    false
  );

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <p onClick={() => scrollToRef(null)}>Nazib Akbar</p>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => scrollToRef(null)}>Home</li>
            <li onClick={() => scrollToRef(aboutRef)}>About</li>
            <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
            <li onClick={() => scrollToRef(contactRef)}>Contact</li>
          </ul>
        </div>
      </nav>
      <div className="home">
        <div className="home-left">
          <p className="title">Junior Web Developer & UI/UX Designer💫</p>
          <p className="description">
            Hello, I'm Nazib Akbar. A guy who interested in Web Development and
            UI/UX Design. I'm currently live in Bogor, Indonesia. 🌍{" "}
          </p>
          <div className="quick-access">
            <a href="https://www.linkedin.com/in/rabkabizan/" target="_blank">
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/faruniki"
              target="_blank"
              className="github"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="home-right">
          <img src={Profile} alt="" className="profile" />
        </div>
      </div>
      <p className="tools-title">Tools :</p>
      <Tools />
      <div ref={aboutRef} className="about-container">
        <p className="about-title">About me 🫠</p>
        <p className="about-description">
          Hey there! I'm Nazib, your friendly neighborhood full-stack wizard! 🧙‍♂️
          When I'm not designing sleek interfaces or coding up a storm, you can
          find me lost in the world of full-stack development. I've got a
          serious passion for crafting pixel-perfect designs or system and
          bringing them to life with some magical code. Let's make the web a
          more beautiful and functional place, one component at a time! 🚀✨
        </p>
        <p className="about-description">Tschuss! 👋</p>
      </div>
      <div ref={projectsRef} className="projects-container">
        <p className="projects-title">Projects that I've done!</p>
        <div className="projects-grid">
          <div className="project-card">
            <img src={Projects1} alt="Project 1" className="project-image" />
            <div className="project-overlay">
              <p className="projects-title-2">
                Asosiasi Guru Marketing Indonesia
              </p>
              <p className="projects-desc">
                Agmari is an organization in the field of education aimed at
                promoting progress and professionalism for Marketing teachers.
              </p>
              <a
                href="https://www.agmari.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="project-button">Visit</p>
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={Pesantren} alt="Project 2" className="project-image" />
            <div className="project-overlay">
              <p className="projects-title-2">
                Tabungan Siswa Pesantren Quran Pamijahan
              </p>
              <p className="projects-desc">
                Tabungan Siswa Pesantren Quran Pamijahan is a student savings
                program tailored for students of the Pamijahan Quranic Boarding
                School.
              </p>
              <p className="project-button-invalid">Visit</p>
            </div>
          </div>
          <div className="project-card">
            <img src={Sivina} alt="Project 3" className="project-image" />
            <div className="project-overlay">
              <p className="projects-title-2">Sivina Retail</p>
              <p className="projects-desc">
                Sivina is a retail audit and observation survey app that helps
                businesses collect real-time data on product availability.
              </p>
              <p className="project-button-invalid">Visit</p>
            </div>
          </div>
          <div className="project-card">
            <img src={Bapangnas} alt="Project 4" className="project-image" />
            <div className="project-overlay">
              <p className="projects-title-2">Badan Pangan Nasional</p>
              <p className="projects-desc">
                Badan Pangan Nasional (Bapangnas) is Indonesia's National Food
                Authority that oversees food warehousing and manages storage
                facilities.
              </p>
              <p className="project-button-invalid">Visit</p>
            </div>
          </div>
          <div className="project-card">
            <img src={Triage} alt="Project 4" className="project-image" />
            <div className="project-overlay">
              <p className="projects-title-2">Gane Care Triage (ITB)</p>
              <p className="projects-desc">
                Gane Care Triage is a counseling guidance service provided by
                the Bandung Institute of Technology. It offers top-quality
                counseling services to support individuals in managing their
                mental health and well-being.
              </p>
              <a
                href="https://ganecaretriage.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="project-button">Visit</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="faq-container">
          <p className="faq-title">What i can do for you?</p>
          <div className="faq-list-container">
            <div className="faq-1">
              <p className="faq-1-title">For bussiness</p>
              <p className="faq-1-desc">
                I design interfaces that are friendly and valuable for customers
                and easy to implement for engineers.{" "}
              </p>
            </div>
            <div className="faq-2">
              <p className="faq-2-title">For startups</p>
              <p className="faq-2-desc">
                I help to identify the problem and design an MVP. I will advise
                on tools for building if you don't have an engineer or
                development resources.{" "}
              </p>
            </div>
            <div className="faq-3">
              <p className="faq-3-title">For products</p>
              <p className="faq-3-desc">
                I design growth experiments and help your team look at the
                challenges differently to build a better product.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef} className="contact">
        <center>
          <p className="contact-title">Let's talk with me if you interested:</p>
        </center>
        <center>
          <p className="contact-info">najibfahrunaakbar@gmail.com</p>
          <p className="contact-info">+62 82 125895 244</p>
        </center>
        <center className="socmed">
          <a href="https://www.linkedin.com/in/rabkabizan/" target="_blank">
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/faruniki"
            target="_blank"
            className="github"
          >
            <GitHubIcon />
          </a>
        </center>
      </div>
    </div>
  );
}
