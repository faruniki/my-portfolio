import React,  { useRef } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../../styles/home.css";
import Tools from "./tools";
import Profile from "../../documents/profile.jpeg";
import Projects1 from "../../documents/projects/project-1.jpg";
import Pesantren from "../../documents/projects/pesantren.jpg";
import Sivina from "../../documents/projects/sivina.jpg";
import Bapangnas from "../../documents/projects/bapangnas.jpg";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
<div className="navbar">
        <div className="navbar-left">
          <p onClick={() => scrollToRef(null)}>Nazib Akbar</p>
        </div>
        <div className="navbar-right">
          <ul>
            <li onClick={() => scrollToRef(null)}>Home</li>
            <li onClick={() => scrollToRef(aboutRef)}>About</li>
            <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
            <li onClick={() => scrollToRef(contactRef)}>Contact</li>
          </ul>
        </div>
      </div>
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
          Hey there! I'm Nazib, your friendly neighborhood React wizard! 🧙‍♂️ When
          I'm not designing sleek interfaces or coding up a storm, you can find
          me lost in the world of frontend development. I've got a serious
          passion for crafting pixel-perfect designs and bringing them to life
          with some magical code. Let's make the web a more beautiful and
          functional place, one component at a time! 🚀✨
        </p>
        <p className="about-description">Tschuss! 👋</p>
      </div>
      <div ref={projectsRef} className="projects-container">
        <p className="projects-title">Projects that i've done!</p>
        {/* <center>
        <div className="line"></div>
        </center> */}
        <div className="projects-cont">
          <div className="projects-left">
            <img src={Projects1} alt="" className="project-image" />
          </div>
          <div className="projects-right">
            <p className="projects-title-2">
              Asosiasi Guru Marketing Indonesia
            </p>
            <p className="projects-desc">
              Agmari is an organization in the field of education aimed at
              promoting progress and professionalism for Marketing teachers in
              the field of Marketing. This organization is formed to facilitate
              Marketing and Entrepreneurship teachers in vocational schools
              (SMK) as well as other teachers interested in learning about
              Marketing by providing information, training, and activities in
              the field of Marketing.
            </p>
            <a href="https://www.agmari.org" target="_blank">
              <p className="project-button">Visit</p>
            </a>
          </div>
        </div>
        <div className="projects-cont">
          <div className="projects-left">
            <img src={Pesantren} alt="" className="project-image" />
          </div>
          <div className="projects-right">
            <p className="projects-title-2">
              Tabungan Siswa Pesantren Quran Pamijahan
            </p>
            <p className="projects-desc">
              Tabungan Siswa Pesantren Quran Pamijahan is a student savings
              program specifically tailored for students of the Pamijahan
              Quranic Boarding School. It aims to instill financial literacy and
              responsibility among students by encouraging regular savings
              habits. The program may offer incentives or benefits to students
              who actively participate, fostering a culture of financial
              discipline and empowerment within the school community.
            </p>
            <p className="project-button-invalid">Visit</p>
          </div>
        </div>
        <div className="projects-cont">
          <div className="projects-left">
            <img src={Sivina} alt="" className="project-image" />
          </div>
          <div className="projects-right">
            <p className="projects-title-2">Sivina Retail</p>
            <p className="projects-desc">
              Sivina is a retail audit and observation survey app. It helps
              businesses collect real-time data on product availability,
              pricing, and competitor analysis. With customizable surveys and
              instant insights, it optimizes retail operations and
              decision-making.
            </p>
            <p className="project-button-invalid">Visit</p>
          </div>
        </div>
        <div className="projects-cont">
          <div className="projects-left">
            <img src={Bapangnas} alt="" className="project-image" />
          </div>
          <div className="projects-right">
            <p className="projects-title-2">Badan Pangan Nasional</p>
            <p className="projects-desc">
              Badan Pangan Nasional (Bapangnas) is Indonesia's National Food
              Authority. It oversees food warehousing, ensuring food security by
              managing storage facilities and distribution networks. Bapangnas
              plays a critical role in safeguarding the nation's food supply
              chain and regulating food storage to prevent shortages and ensure
              accessibility for all Indonesians.
            </p>
            <p className="project-button-invalid">Visit</p>
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
              <p className="faq-3-title">For product teams</p>
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
          <p className="contact-info">nazibakbar@gmail.com</p>
          <p className="contact-info">0895-3799-67344</p>
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
