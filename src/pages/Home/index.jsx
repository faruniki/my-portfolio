import React, { useRef, useState } from "react";

// Icons
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFastapi,
} from "react-icons/si";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaPython } from "react-icons/fa";

// Local Assets
import Profile from "../../documents/profile.jpeg";

// Client Logos
import BapangnasIcon from "../../documents/clients/bapangnas.png";
import KomdigiIcon from "../../documents/clients/komdigi.png";
import IndoreIcon from "../../documents/clients/indore.png";
import EnesisIcon from "../../documents/clients/enesis.png";
import ItbIcon from "../../documents/clients/itb.png";
import AgmariIcon from "../../documents/clients/agmari.png";
import ScadsIcon from "../../documents/clients/scads.png";
import StarcoreIcon from "../../documents/clients/starcore.png";

import LogoLoop from "../../components/ReactBits/LogoLoop";
import BlurText from "../../components/ReactBits/BlurText";
import TiltedCard from "../../components/ReactBits/TiltedCard";
import SpotlightCard from "../../components/ReactBits/SpotlightCard";
import CustomCursor from "../../components/ReactBits/CustomCursor";
import Navbar from "../../components/Navbar";
import ResumeModal from "../../components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const aboutRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  // const scrollToRef = (ref) => {
  //   if (ref && ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const clients = [
    { src: BapangnasIcon, alt: "Bapangnas" },
    { src: KomdigiIcon, alt: "Komdigi" },
    { src: IndoreIcon, alt: "Indore" },
    { src: EnesisIcon, alt: "Enesis" },
    { src: ItbIcon, alt: "ITB" },
    { src: AgmariIcon, alt: "Agmari" },
    { src: ScadsIcon, alt: "SCADS" },
    { src: StarcoreIcon, alt: "Starcore" },
  ];

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

  return (
    <div className="font-montserrat relative w-full">
      <Navbar
        theme="light"
        onResumeClick={() => setIsResumeModalOpen(true)}
        activePage="home"
      />

      <CustomCursor />

      <main className="pt-24 z-1">
        <section className="mx-auto flex flex-col-reverse items-center gap-y-8 px-6 md:mt-32 md:w-4/5 md:flex-row md:justify-between lg:w-3/5">
          <div className="w-full text-center md:w-3/5 md:text-left">
            <BlurText
              text="Junior Web Developer & UI/UX Designer 💫"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl font-bold lg:text-5xl pb-2 justify-center lg:justify-start"
            />
            <div className="mt-4 md:h-[80px]">
              <BlurText
                text="Hello, I'm Nazib Akbar. A guy who interested in Web Development
              and UI/UX Design. I'm currently live in Bogor, Indonesia. 🌍"
                delay={30}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-xl"
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

        <section
          ref={aboutRef}
          className="mx-auto mt-64 w-4/5 text-center lg:w-3/5"
        >
          <BlurText
            animateBy="chars"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            delay={50}
            className="text-4xl text-center justify-center font-bold mt-5"
            text={`About me`}
          />
          <BlurText
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            delay={10}
            className="text-lg text-center justify-center font-light mt-5"
            text={`Hey there! I'm Nazib, your friendly neighborhood full-stack wizard! 🧙‍♂️ When I'm not designing sleek interfaces or coding up a storm, you can find me lost in the world of full-stack development. I've got a serious passion for crafting pixel-perfect designs or system and bringing them to life with some magical code. Let's make the web a more beautiful and functional place, one component at a time! 🚀✨`}
          />
          <BlurText
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            delay={10}
            className="text-xl text-center justify-center font-bold mt-20"
            text={`Tschuss! 👋`}
          />
          {/* <iframe data-testid="embed-iframe" className="rounded-md mt-10" src="https://open.spotify.com/embed/track/6a27ujWv21H3qCkFGFj58L?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        </section>

        {/* Clients Section */}
        <section ref={clientsRef} className="mx-auto my-64 w-4/5 lg:w-3/5">
          <BlurText
            animateBy="chars"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            delay={30}
            className="text-4xl mb-10 text-center justify-center font-bold mt-5"
            text={`Clients I’ve worked with`}
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center mt-12">
            {clients.map((client, index) => {
              const total = clients.length;
              const remainder = total % 5 || 5;
              const startOfLastRow = total - remainder;
              const isLastRow = index >= startOfLastRow;

              // column span per item for last row
              const colSpanMap = {
                1: "lg:col-span-5",
                2: "lg:col-span-2",
                3: "lg:col-span-1",
                4: "lg:col-span-1",
              };

              // extra centering tweaks
              const extraCenterMap = {
                2: "lg:col-start-2",
                3: "lg:col-start-2",
                4: "lg:col-start-1",
              };

              const colSpan =
                isLastRow && remainder < 5 ? colSpanMap[remainder] : "";

              const colStart =
                isLastRow && remainder < 5 && index === startOfLastRow
                  ? extraCenterMap[remainder]
                  : "";

              return (
                <div
                  key={index}
                  className={`
        w-32 h-32 flex items-center justify-center
        grayscale hover:grayscale-0
        transition-all duration-300
        opacity-50 hover:opacity-100
        ${colSpan}
        ${colStart}
      `}
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Services/FAQ Section */}
        <section className="bg-neutral-900 py-16 md:py-20">
          <div className="mx-auto w-4/5 lg:w-3/5">
            <h2 className="text-center text-3xl font-bold text-gray-200 md:text-center">
              What I can do for you?
            </h2>
            <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row">
              <SpotlightCard
                className="custom-spotlight-card md:w-[30%] text-white"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-lg font-bold">For business</p>
                <p className="mt-5 text-md font-semibold text-gray-500 hover:text-gray-400 transition-all">
                  I design interfaces that are friendly and valuable for
                  customers and easy to implement for engineers.
                </p>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card md:w-[30%] text-white"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-lg font-bold">For startups</p>
                <p className="mt-5 text-md font-semibold text-gray-500 hover:text-gray-400 transition-all">
                  I help to identify the problem and design an MVP. I will
                  advise on tools for building if you don't have an engineer or
                  development resources.
                </p>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card md:w-[30%] text-white"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <p className="text-lg font-bold">For products</p>
                <p className="mt-5 text-md font-semibold text-gray-500 hover:text-gray-400 transition-all">
                  I design growth experiments and help your team look at the
                  challenges differently to build a better product.
                </p>
              </SpotlightCard>
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
              +62 813 953 6762
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

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
