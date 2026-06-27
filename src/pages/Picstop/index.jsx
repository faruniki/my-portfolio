import React, { useState } from "react";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import BlurText from "../../components/ReactBits/BlurText";
import CustomCursor from "../../components/ReactBits/CustomCursor";
import Navbar from "../../components/navbar";
import ResumeModal from "../../components/ResumeModal";

// --- How to use local images ---
// 1. Create the folder `src/documents/picstop`
// 2. Add your images to that folder (e.g., image1.jpg, image2.jpg)
// 3. Import them like this:
// import image1 from '../../documents/picstop/image1.jpg';
// import image2 from '../../documents/picstop/image2.jpg';

// For demonstration, I'll use placeholder images.
// Replace these with your actual local imports.
const pictures = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    slug: `pic-${i + 1}`,
    title: `Picture ${i + 1}`,
    artist: "Nazib Akbar",
    // In a real scenario, this would be your imported image variable, e.g., `imageUrl: image1`
    imageUrl: `https://picsum.photos/seed/${i + 1}/600/600`,
  }));

const ITEMS_PER_PAGE = 9;

export default function Picstop() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(pictures.length / ITEMS_PER_PAGE);
  const paginatedPictures = pictures.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="font-montserrat relative w-full bg-neutral-900 text-white">
      <Navbar theme="dark" onResumeClick={() => setIsResumeModalOpen(true)} activePage="picstop" />

      <CustomCursor />

      <main className="pt-24">
        <section className="mx-auto px-6 pt-16 pb-8 text-center md:w-4/5 lg:w-3/5">
          <BlurText
            animateBy="chars"
            direction="top"
            delay={60}
            className="text-5xl font-bold"
            text="Picstop - Under Development"
          />
          <BlurText
            animateBy="words"
            direction="top"
            delay={15}
            className="mt-4 text-base font-light text-gray-400"
            text="A collection of moments, captured in time."
          />
        </section>

        {/* Pictures Grid */}
        <section className="mx-auto px-6 pb-16 md:w-4/5 lg:w-11/12 xl:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {paginatedPictures.map((pic) => (
              <div
                key={pic.id}
                className="group relative aspect-square w-full overflow-hidden rounded-lg"
              >
                <img
                  src={pic.imageUrl}
                  alt={pic.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-white">{pic.title}</h3>
                  <p className="text-sm text-gray-200">{pic.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section className="mx-auto px-6 pb-32 md:w-4/5 lg:w-3/5">
            <div className="flex items-center justify-center gap-4">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <ArrowBackIcon />
                </button>
                <span className="font-semibold">Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <ArrowForwardIcon />
                </button>
            </div>
        </section>

        {/* Footer */}
        <footer className="relative rounded-t-3xl bg-black py-16">
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

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
}
