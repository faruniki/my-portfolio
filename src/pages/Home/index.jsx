import React, { useRef, useState, useEffect } from "react";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFastapi,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaPython } from "react-icons/fa";

// Local Assets
import Profile from "../../documents/profile.jpeg";
import Projects1 from "../../documents/projects/project-1.jpg";
import Pesantren from "../../documents/projects/pesantren.jpg";
import Sivina from "../../documents/projects/sivina.jpg";
import Bapangnas from "../../documents/projects/bapangnas.jpg";
import Jatiluwih from "../../documents/images/jatiluwih.jpg";
import SouthJakarta from "../../documents/images/south-jakarta.jpg";
import Bali from "../../documents/images/bali.jpg";
import NusaTenggara from "../../documents/images/nusa-tenggara.jpg";
import CentralJava from "../../documents/images/central-java.jpg";

import Triage from "../../documents/projects/triage.png";
import LogoLoop from "../../components/ReactBits/LogoLoop";
import ShinyText from "../../components/ReactBits/ShinyText";
import SplitText from "../../components/ReactBits/SplitText";
import BlurText from "../../components/ReactBits/BlurText";
import DecryptedText from "../../components/ReactBits/DecryptedText";
import VariableProximity from "../../components/ReactBits/VariableProximity";
import ScrollFloat from "../../components/ReactBits/ScrollFloat";
import ScrollVelocity from "../../components/ReactBits/ScrollVelocity";
import TiltedCard from "../../components/ReactBits/TiltedCard";
import ProfileCard from "../../components/ReactBits/ProfileCard";
import CircularGallery from "../../components/ReactBits/CircularGallery";
import Particles from "../../components/ReactBits/Particles";
import ScrollReveal from "../../components/ReactBits/ScrollReveal";
import BlobCursor from "../../components/ReactBits/BlobCursor";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const containerRef = useRef(null);

  const lastScrollTop = useRef(0);

  // Improved scroll handling with useEffect for better performance and cleanup
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScroll > lastScrollTop.current && currentScroll > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu on navigation
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    {
      node: <IoLogoJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    { node: <FaNodeJs />, title: "Node JS", href: "https://www.nodejs.org" },
    {
      node: <SiExpress />,
      title: "Express JS",
      href: "https://www.expressjs.com",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiMongodb />, title: "Mongo DB", href: "https://mongodb.com" },
    { node: <FaPython />, title: "Python", href: "https://python.org" },
    {
      node: <SiFastapi />,
      title: "Fast API",
      href: "https://fastapi.tiangolo.com",
    },
  ];

  const galleryItems = [
    {
      image: Jatiluwih,
      text: "Jatiluwih",
    },
    {
      image: Bali,
      text: "Bali",
    },
    {
      image: SouthJakarta,
      text: "South Jakarta",
    },
    {
      image: NusaTenggara,
      text: "Nusa Tenggara",
    },
    {
      image: CentralJava,
      text: "Central Java",
    },
  ];

  return (
    <div className="font-montserrat">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="cursor-pointer text-lg font-bold"
          onClick={() => scrollToRef(null)}
        >
          <p>Nazib Akbar</p>
        </div>
        <div
          className="cursor-pointer text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col items-center gap-y-6 bg-white py-4 shadow-md md:relative md:top-auto md:flex md:w-auto md:flex-row md:gap-x-8 md:bg-transparent md:py-0 md:shadow-none`}
        >
          <ul className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-8">
            <li
              className="relative cursor-pointer list-none text-sm font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => scrollToRef(null)}
            >
              Home
            </li>
            <li
              className="relative cursor-pointer list-none text-sm font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => scrollToRef(aboutRef)}
            >
              About
            </li>
            <li
              className="relative cursor-pointer list-none text-sm font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => scrollToRef(projectsRef)}
            >
              Projects
            </li>
            <li
              className="relative cursor-pointer list-none text-sm font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => scrollToRef(contactRef)}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}

      <main className="pt-24">
        {/* <BlobCursor
          blobType="circle"
          fillColor="#5227FF"
          trailCount={3}
          sizes={[60, 125, 75]}
          innerSizes={[20, 35, 25]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={5}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={100}
        /> */}

        <section className="mx-auto flex flex-col-reverse items-center gap-y-8 px-6 md:mt-40 md:w-4/5 md:flex-row md:justify-between lg:w-3/5">
          <div className="w-full text-center md:w-3/5 md:text-left">
            <BlurText
              text="Junior Web Developer & UI/UX Designer 💫"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl font-bold lg:text-5xl pb-2"
            />
            <div className="mt-4">
              <DecryptedText
                text="Hello, I'm Nazib Akbar. A guy who interested in Web Development
              and UI/UX Design. I'm currently live in Bogor, Indonesia. 🌍"
                speed={10}
                animateOn="view"
                revealDirection="left"
                sequential="true"
                useOriginalCharsOnly="true"
              />
            </div>
            <div className="mt-5 flex items-center justify-center gap-x-4 md:justify-start">
              <a
                href="https://www.linkedin.com/in/rabkabizan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-200 hover:text-blue-600"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/faruniki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-200 hover:text-blue-600"
              >
                <GitHubIcon />
              </a>
            </div>

            <div className="mt-12">
              <p className="text-sm font-medium">Tools :</p>
              <div className="mt-4">
                <LogoLoop
                  logos={techLogos}
                  speed={20}
                  direction="left"
                  logoHeight={26}
                  gap={20}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <TiltedCard
              imageSrc={Profile}
              altText="Nazib Akbar"
              captionText="Nazib Akbar"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text"></p>}
            />
          </div>
        </section>

        <section className="py-40">
          {/* <ScrollVelocity
            texts={[
              "React",
              "Tailwind JavaScript Express",
              "Python FastAPI MongoDB",
            ]}
            velocity={50}
            className="custom-scroll-text "
          /> */}
          {/* <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={0}
              textColor="#1f1f1fff"
              borderRadius={0.05}
              scrollEase={0.02}
              items={galleryItems}
            />
          </div> */}
        </section>

        <section
          ref={aboutRef}
          className="mx-auto mt-40 w-4/5 text-center lg:w-3/5"
        >
          <h2 className="mb-10 text-center text-2xl font-bold">
            <ScrollFloat
              animationDuration={2.5}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="text-center text-4xl font-bold"
            >
              About me 🫠
            </ScrollFloat>
          </h2>
          <p className="mt-5">
            <ScrollFloat
              animationDuration={2.5}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="text-center text-2xl font-medium mt-5"
            >
              Hey there! I'm Nazib, your friendly neighborhood full-stack
              wizard! 🧙‍♂️ When I'm not designing sleek interfaces or coding up a
              storm, you can find me lost in the world of full-stack
              development. I've got a serious passion for crafting pixel-perfect
              designs or system and bringing them to life with some magical
              code. Let's make the web a more beautiful and functional place,
              one component at a time! 🚀✨
            </ScrollFloat>
          </p>
          <p className="mt-5 text-2xl font-bold">
            <ScrollFloat
              animationDuration={2.5}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="text-center text-xl font-medium mt-5"
            >
              Tschuss! 👋
            </ScrollFloat>
          </p>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="mx-auto my-40 w-4/5 lg:w-3/5">
          <h2 className="mb-10 text-center text-2xl font-bold">
            <ScrollFloat
              animationDuration={2.5}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="text-center text-4xl font-bold"
            >
              Projects that I've done!
            </ScrollFloat>
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                img: Projects1,
                title: "Asosiasi Guru Marketing Indonesia",
                desc: "Agmari is an organization in the field of education aimed at promoting progress and professionalism for Marketing teachers.",
                href: "https://www.agmari.org",
              },
              {
                img: Pesantren,
                title: "Tabungan Siswa Pesantren Quran Pamijahan",
                desc: "A student savings program tailored for students of the Pamijahan Quranic Boarding School.",
                href: null,
              },
              {
                img: Sivina,
                title: "Sivina Retail",
                desc: "Sivina is a retail audit and observation survey app that helps businesses collect real-time data on product availability.",
                href: null,
              },
              {
                img: Bapangnas,
                title: "Badan Pangan Nasional",
                desc: "Badan Pangan Nasional (Bapangnas) is Indonesia's National Food Authority that oversees food warehousing and manages storage facilities.",
                href: null,
              },
              {
                img: Triage,
                title: "Gane Care Triage (ITB)",
                desc: "A counseling guidance service by ITB to support individuals in managing their mental health and well-being.",
                href: "https://ganecaretriage.com/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex h-full w-full flex-col bg-black/80 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-lg font-bold">{project.title}</p>
                  <p className="mt-2 text-sm font-semibold">{project.desc}</p>
                  <div className="absolute bottom-4 right-4 mt-auto">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-white bg-white py-1 px-4 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
                      >
                        Visit
                      </a>
                    ) : (
                      <p className="inline-block cursor-not-allowed rounded-full border border-gray-400 bg-white py-1 px-4 text-sm font-medium text-gray-400">
                        Visit
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services/FAQ Section */}
        <section className="bg-gray-200 py-16 md:py-20">
          <div className="mx-auto w-4/5 lg:w-3/5">
            <h2 className="text-center text-3xl font-bold text-gray-800 md:text-left">
              What I can do for you?
            </h2>
            <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row">
              <div className="md:w-[30%]">
                <p className="text-lg font-semibold">For business</p>
                <p className="mt-5 text-xs font-semibold text-gray-600">
                  I design interfaces that are friendly and valuable for
                  customers and easy to implement for engineers.
                </p>
              </div>
              <div className="md:w-[30%]">
                <p className="text-lg font-semibold">For startups</p>
                <p className="mt-5 text-xs font-semibold text-gray-600">
                  I help to identify the problem and design an MVP. I will
                  advise on tools for building if you don't have an engineer or
                  development resources.
                </p>
              </div>
              <div className="md:w-[30%]">
                <p className="text-lg font-semibold">For products</p>
                <p className="mt-5 text-xs font-semibold text-gray-600">
                  I design growth experiments and help your team look at the
                  challenges differently to build a better product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer
          ref={contactRef}
          className="relative -mt-8 rounded-t-3xl bg-black py-16"
        >
          <div className="text-center">
            <p className="mb-10 px-4 text-xl font-bold text-white md:text-3xl">
              Let's talk with me if you're interested:
            </p>
            <p className="my-5 text-base font-semibold text-white">
              najibfahrunaakbar@gmail.com
            </p>
            <p className="my-5 text-base font-semibold text-white">
              +62 82 125895 244
            </p>
            <div className="mt-12 flex justify-center gap-x-6">
              <a
                href="https://www.linkedin.com/in/rabkabizan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-gray-400"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/faruniki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-gray-400"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
