import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import BlurText from "../../components/ReactBits/BlurText";
import CustomCursor from "../../components/ReactBits/CustomCursor";
import Navbar from "../../components/navbar.jsx";
import ResumeModal from "../../components/ResumeModal";

import { POSTS } from "./posts.js";

// ---------------------------------------------------------------------------
// Utility: parse the post's markdown-lite content into React elements
// ---------------------------------------------------------------------------
function renderInline(nodes) {
  return nodes.map((node, i) => {
    if (node.type === "strong") {
      return <strong key={i}>{node.value}</strong>;
    }
    if (node.type === "code") {
      return (
        <code
          key={i}
          className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm font-mono text-neutral-700"
        >
          {node.value}
        </code>
      );
    }
    return node.value;
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function BlogPost() {
  // This is a simplified renderer. For a real app, you'd want something more robust.
  // Or, even better, use a library like `react-markdown`.
  const renderContent = (content) => {
    if (typeof content === "string") {
      // This is for the posts that haven't been converted to the new format yet.
      // You can remove this once all posts are converted.
      return <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />;
    }

    return content.map((block, i) => {
      switch (block.type) {
        case "h2":
          return (
            <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-black">
              {renderInline(block.children)}
            </h2>
          );
        case "p":
          return (
            <p key={i} className="mt-3 text-base font-light text-gray-700 leading-relaxed">
              {renderInline(block.children)}
            </p>
          );
        case "ul":
          return (
            <ul key={i} className="ml-6 mt-3 mb-3 list-disc space-y-1">
              {block.children.map((item, idx) => (
                <li key={idx} className="text-base font-light text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
        case "pre":
          return (
            <pre key={i} className="my-4 overflow-x-auto rounded-xl bg-neutral-900 px-5 py-4 text-sm text-green-400 font-mono leading-relaxed">
              {block.value}
            </pre>
          );
        case "hr":
          return <hr key={i} className="my-10 border-gray-200" />;
        default:
          return null;
      }
    });
  };
  const { slug } = useParams();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const post = POSTS[slug];

  return (
    <div className="font-montserrat relative w-full">
      <Navbar theme="light" onResumeClick={() => setIsResumeModalOpen(true)} activePage="blog" />

      <CustomCursor />

      <main className="pt-24">
        {post ? (
          <>
            {/* Post Header */}
            <article className="mx-auto px-6 pt-12 pb-24 md:w-4/5 lg:w-3/5">
              {/* Back link */}
              <a
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-black transition-colors mb-10"
              >
                <ArrowBackIcon fontSize="small" />
                All posts
              </a>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                  {post.tag}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {post.date}
                </span>
                <span className="text-xs text-gray-400 font-medium">·</span>
                <span className="text-xs text-gray-400 font-medium">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <BlurText
                animateBy="words"
                direction="top"
                delay={20}
                className="text-4xl font-bold leading-tight md:text-5xl"
                text={post.title}
              />

              {/* Divider */}
              <div className="mt-10 mb-10 border-t border-gray-200" />

              {/* Content */}
              <div className="prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Bottom divider */}
              <div className="mt-16 border-t border-gray-200 pt-10">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-black transition-colors"
                >
                  <ArrowBackIcon fontSize="small" />
                  Back to all posts
                </a>
              </div>
            </article>
          </>
        ) : (
          /* 404 state */
          <section className="mx-auto px-6 pt-24 pb-32 text-center md:w-4/5 lg:w-3/5">
            <p className="text-6xl font-bold text-gray-100">404</p>
            <p className="mt-4 text-xl font-semibold text-gray-400">
              Post not found.
            </p>
            <a
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-black px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white"
            >
              <ArrowBackIcon fontSize="small" />
              Back to Blog
            </a>
          </section>
        )}

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
