import React, { useRef, useState, useEffect } from "react";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import BlurText from "../../components/ReactBits/BlurText";
import SpotlightCard from "../../components/ReactBits/SpotlightCard";
import CustomCursor from "../../components/ReactBits/CustomCursor";
import Navbar from "../../components/Navbar";
import ResumeModal from "../../components/ResumeModal";

// Static blog posts data
const blogPosts = [
  {
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Apps",
    date: "May 5, 2025",
    category: "Development",
    excerpt:
      "Lessons learned from architecting large React codebases — folder structures, state management, and keeping things sane as teams grow.",
    readTime: "6 min read",
    tag: "React",
  },
  {
    slug: "ux-principles-for-developers",
    title: "UX Principles Every Developer Should Know",
    date: "April 18, 2025",
    category: "Design",
    excerpt:
      "You don't need to be a designer to care about UX. Here are the fundamentals that will make your interfaces feel more intentional and human.",
    readTime: "5 min read",
    tag: "UI/UX",
  },
  {
    slug: "fastapi-vs-express",
    title: "FastAPI vs Express: Which Should You Choose?",
    date: "March 30, 2025",
    category: "Backend",
    excerpt:
      "A side-by-side comparison of two popular backend frameworks — performance, DX, ecosystem, and when to reach for each.",
    readTime: "8 min read",
    tag: "Backend",
  },
  {
    slug: "designing-with-tailwind",
    title: "Designing Directly in Tailwind CSS",
    date: "March 10, 2025",
    category: "Design",
    excerpt:
      "How I stopped jumping between Figma and code and started designing in the browser with Tailwind — pitfalls, workflow tips, and real examples.",
    readTime: "4 min read",
    tag: "CSS",
  },
  {
    slug: "mongodb-schema-design",
    title: "MongoDB Schema Design Patterns",
    date: "February 22, 2025",
    category: "Database",
    excerpt:
      "NoSQL doesn't mean no structure. A deep dive into embedding vs referencing, indexing strategies, and avoiding common anti-patterns.",
    readTime: "7 min read",
    tag: "Database",
  },
  {
    slug: "freelancing-as-a-dev",
    title: "What Nobody Tells You About Freelancing as a Dev",
    date: "February 3, 2025",
    category: "Career",
    excerpt:
      "The honest, unfiltered truth about client work, pricing your time, managing scope creep, and staying sane while building for others.",
    readTime: "9 min read",
    tag: "Career",
  },
];

const CATEGORIES = ["All", "Development", "Design", "Backend", "Database", "Career"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="font-montserrat relative w-full">
      <Navbar theme="light" onResumeClick={() => setIsResumeModalOpen(true)} activePage="blog" />

      <CustomCursor />

      <main className="pt-24">
        {/* Hero */}
        <section className="mx-auto px-6 pt-16 pb-8 text-center md:w-4/5 lg:w-3/5">
          <BlurText
            animateBy="chars"
            direction="top"
            delay={60}
            className="text-5xl font-bold"
            text="Welcome to my blog!"
          />
          <BlurText
            animateBy="words"
            direction="top"
            delay={15}
            className="mt-4 text-base font-light text-gray-500"
            text="Thoughts on development, design, and building things that matter."
          />
        </section>

        {/* Category Filter */}
        <section className="mx-auto px-6 md:w-4/5 lg:w-3/5">
          <div className="flex flex-wrap gap-2 justify-center mt-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mx-auto px-6 pb-32 md:w-4/5 lg:w-3/5">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Tag */}
                <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                  {post.tag}
                </span>

                {/* Title */}
                <h2 className="mt-4 text-lg font-bold leading-snug text-black group-hover:underline underline-offset-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-3 text-sm font-light text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center justify-between text-xs text-gray-400 font-medium">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </a>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-400 mt-16">
              No posts in this category yet.
            </p>
          )}
        </section>

        {/* Services dark section */}
        <section className="bg-neutral-900 py-16 md:py-20">
          <div className="mx-auto w-4/5 lg:w-3/5">
            <h2 className="text-center text-3xl font-bold text-gray-200">
              What I can do for you?
            </h2>
            <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row">
              {[
                {
                  title: "For business",
                  body: "I design interfaces that are friendly and valuable for customers and easy to implement for engineers.",
                },
                {
                  title: "For startups",
                  body: "I help to identify the problem and design an MVP. I will advise on tools for building if you don't have an engineer or development resources.",
                },
                {
                  title: "For products",
                  body: "I design growth experiments and help your team look at the challenges differently to build a better product.",
                },
              ].map((card) => (
                <SpotlightCard
                  key={card.title}
                  className="custom-spotlight-card md:w-[30%] text-white"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <p className="text-lg font-bold">{card.title}</p>
                  <p className="mt-5 text-md font-semibold text-gray-500 hover:text-gray-400 transition-all">
                    {card.body}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative -mt-8 rounded-t-3xl bg-black py-16">
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
