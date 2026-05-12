import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import BlurText from "../../components/ReactBits/BlurText";
import CustomCursor from "../../components/ReactBits/CustomCursor";

// ---------------------------------------------------------------------------
// Static blog content — one object per post, keyed by slug
// ---------------------------------------------------------------------------
const POSTS = {
  "building-scalable-react-apps": {
    title: "Building Scalable React Apps",
    date: "May 5, 2025",
    category: "Development",
    readTime: "6 min read",
    tag: "React",
    content: `
When a React codebase is small, almost anything works. But as the team grows, as features pile up, and as the product matures, structural decisions that felt trivial at the start begin to cost real time.

After working across several mid-to-large React projects, here are the patterns I keep coming back to.

## 1. Feature-based folder structure

Resist the urge to organise by type (components/, hooks/, utils/). Instead, group code by feature:

src/
  features/
    auth/
      AuthForm.jsx
      useAuth.js
      authSlice.js
    dashboard/
      Dashboard.jsx
      useDashboardData.js

This way, when you touch the auth feature, everything you need lives in one place. Cross-cutting concerns (shared UI, global helpers) stay in a separate shared/ directory.

## 2. Treat state like layers

Not all state is equal. Think in layers:

- **Server state** — fetched data that lives on the server. Use React Query or SWR. Don't put this in Redux.
- **Global UI state** — things like theme, modal visibility, sidebar open/closed. Zustand or a small Context works well here.
- **Local component state** — anything that only one component cares about. useState is fine.

The most common mistake I see is putting server data into Redux, then writing boilerplate to sync it. Let React Query handle caching, invalidation, and background refetching.

## 3. Co-locate your tests

Keep tests next to the files they test — AuthForm.test.jsx beside AuthForm.jsx. It reduces friction and makes it obvious when a test is missing.

## 4. Abstract your API layer

Never call fetch or axios directly from a component. Put all API calls behind a service layer:

// features/auth/authService.js
export const login = (credentials) =>
  api.post('/auth/login', credentials);

This makes mocking in tests trivial and means you can swap the HTTP client later without touching components.

## 5. Be deliberate about re-renders

Profile before you optimise, but keep these principles in mind:

- Prefer deriving values over storing derived state
- Use useMemo and useCallback sparingly and purposefully, not as a default
- Virtualise long lists with react-window or tanstack-virtual

The goal isn't zero re-renders — it's no unnecessary re-renders.

---

These patterns won't solve every problem, but they'll give you a foundation that scales. The biggest wins come from consistency — pick a pattern and apply it everywhere.
    `.trim(),
  },

  "ux-principles-for-developers": {
    title: "UX Principles Every Developer Should Know",
    date: "April 18, 2025",
    category: "Design",
    readTime: "5 min read",
    tag: "UI/UX",
    content: `
You don't need to be a designer to care about UX. As a developer you make UX decisions constantly — which error message to show, how a form behaves on submit, whether a loading state needs a spinner or a skeleton. These choices accumulate.

Here are the principles I wish someone had handed me earlier.

## Hick's Law: fewer choices, faster decisions

The more options you present, the longer a user takes to decide. This shows up everywhere:

- Navigation menus with 10+ items slow people down
- Forms that ask for optional info during onboarding reduce completion rates
- Dashboards that show every metric overwhelm rather than inform

Default to showing less. Make it easy to access more if needed.

## Fitts's Law: big targets are easier to hit

The time to click a target depends on its distance and size. Practically:

- Primary buttons should be large and easy to reach
- Don't put destructive actions (Delete, Remove) right next to safe ones
- On mobile, touch targets should be at least 44×44px

## Feedback matters more than you think

Every action should have a visible response. If a user clicks a button and nothing happens for 300ms, they'll click it again. Optimistic UI updates, loading skeletons, subtle micro-animations — these aren't polish, they're communication.

## Don't make me think

Steve Krug's principle: if a user has to pause and puzzle over how to do something, you've lost. Labels should be obvious, flows should be linear, and error messages should tell you what to do, not just what went wrong.

## Progressive disclosure

Show what's necessary now; reveal more as needed. Wizards, collapsible sections, and "Advanced settings" links all follow this pattern. It keeps interfaces approachable for new users while staying powerful for experienced ones.

---

Good UX isn't magic — it's applying these principles consistently and paying attention to how people actually use your product, not how you imagine they will.
    `.trim(),
  },

  "fastapi-vs-express": {
    title: "FastAPI vs Express: Which Should You Choose?",
    date: "March 30, 2025",
    category: "Backend",
    readTime: "8 min read",
    tag: "Backend",
    content: `
Two frameworks, two languages, two different philosophies. I've used both in production. Here's the honest comparison.

## Developer experience

FastAPI wins on DX if your team knows Python. Automatic OpenAPI docs, Pydantic-based request validation, and type hints that actually do something make it a joy to work with. You write a function, add type annotations, and you get validation and docs for free.

Express is more explicit. You define your routes, pull body from req.body, and handle validation yourself (or reach for Zod, Joi, etc.). It's more ceremony, but it's also more control.

## Performance

FastAPI is built on Starlette and uses asyncio. For I/O-bound workloads (database queries, external API calls), it benchmarks well and competes with Node. Express is non-blocking by default and fast, but raw performance is rarely the bottleneck in real apps.

If you're doing CPU-heavy work, neither is the right choice — consider Rust or Go.

## Ecosystem

Express wins here. The Node ecosystem is enormous. Middleware for everything, countless integrations, and a massive community. If you need a library, it almost certainly exists.

Python's ecosystem is excellent for data-heavy work (ML inference, data pipelines, scientific computing). FastAPI shines when you're bridging a Python ML model with an HTTP API.

## When to choose FastAPI

- Your team knows Python
- You're serving ML models or doing data processing
- You want automatic validation and docs with minimal boilerplate
- You're building internal tools or data APIs

## When to choose Express

- Your team is primarily JavaScript/TypeScript
- You want a unified language across frontend and backend
- You need access to a broad middleware ecosystem
- You're building a general-purpose REST or GraphQL API

## The real answer

The best framework is the one your team is most productive in. I've seen beautiful codebases in both. I've also seen disasters in both. The language matters less than the discipline around structure, error handling, and testing.
    `.trim(),
  },

  "designing-with-tailwind": {
    title: "Designing Directly in Tailwind CSS",
    date: "March 10, 2025",
    category: "Design",
    readTime: "4 min read",
    tag: "CSS",
    content: `
For years my workflow looked like this: design in Figma, hand off to myself, translate to code, notice it looks slightly off, tweak in CSS, update Figma, repeat. It was slow and the two sources of truth were never quite in sync.

At some point I started designing directly in the browser with Tailwind. I haven't looked back.

## Why it works

Tailwind forces you to think in the same constraints as the browser. You can't set a width to 347px without it feeling wrong — you reach for w-80 or w-96 and it looks right because it's built on a consistent scale. The design system is baked into the utility classes.

Working directly in code means you see the real thing immediately. Fonts render differently in browsers than in Figma. Shadows, border radii, hover states — these only make sense when you interact with them.

## The workflow

I start with structure: rough HTML with minimal classes, just to get the layout right. Then I layer in typography, spacing, and colour. Interactive states (hover, focus, active) come last.

I keep a browser window and my editor side by side. Hot reloading means changes appear instantly. I iterate fast.

## Where it breaks down

Tailwind design-in-code doesn't replace Figma for everything. Complex multi-screen user flows, stakeholder presentations, and handoff to other developers still benefit from a proper design file. And if you're collaborating with a dedicated designer, you need a shared source of truth.

But for solo work or small teams where the developer is also making design decisions? Designing in Tailwind is faster, more consistent, and produces code that's closer to production-ready from the start.
    `.trim(),
  },

  "mongodb-schema-design": {
    title: "MongoDB Schema Design Patterns",
    date: "February 22, 2025",
    category: "Database",
    readTime: "7 min read",
    tag: "Database",
    content: `
"NoSQL means no schema" is one of the most harmful myths in backend development. MongoDB's flexibility is a feature, but without intentional schema design, you end up with documents that are inconsistent, queries that are slow, and migrations that are nightmares.

Here's what I've learned from designing MongoDB schemas in production.

## Embed vs. reference: the core decision

The fundamental choice in every MongoDB schema is whether related data should be embedded in a document or referenced via an ID.

**Embed when:**
- The data is always read together (user profile and preferences)
- The related data has no independent existence
- The embedded array won't grow unboundedly

**Reference when:**
- The related data is large or changes frequently
- The data is shared across multiple documents
- The array could grow very large over time

The anti-pattern I see most often: referencing when you should be embedding, then wondering why every read requires multiple round trips.

## The Outlier Pattern

If most documents have a small array but some have thousands of entries, don't let the outliers define your schema. Use a flag like has_extras and store the overflow in a separate collection. Your 99th-percentile case shouldn't penalise your 50th-percentile case.

## Index everything you query on

MongoDB queries without indexes do a collection scan — they read every document. Add indexes on every field you filter or sort on. Use compound indexes for multi-field queries. Use explain() to verify your queries are using indexes.

## Be explicit about what you store

Even though MongoDB doesn't enforce a schema, define one in your application layer. Mongoose, Zod + a custom validator, or even just a well-documented JS object shape — whatever it takes to ensure your documents are consistent. Inconsistent documents are the root of almost every MongoDB debugging session I've had.

## Avoid deeply nested documents

Deep nesting makes queries and updates awkward. If you find yourself doing $set on a nested.nested.nested.field, that's a signal to reconsider the structure.

---

The schema decisions you make early are hard to undo. Think about your access patterns before you think about your data shape.
    `.trim(),
  },

  "freelancing-as-a-dev": {
    title: "What Nobody Tells You About Freelancing as a Dev",
    date: "February 3, 2025",
    category: "Career",
    readTime: "9 min read",
    tag: "Career",
    content: `
Freelancing looks great from the outside: set your own hours, work from anywhere, pick your projects. The reality is more complicated — and more interesting — than the Instagram version.

Here's what I wish I knew when I started.

## Pricing is the hardest skill

Nobody teaches you how to price your work. Most developers start too low, driven by imposter syndrome and fear of rejection. The problem with being cheap is that it attracts clients who will squeeze every hour and question every invoice.

Charge for the value you deliver, not the hours you spend. A landing page that converts 3% better is worth far more than 10 hours of your time. Figure out what the outcome is worth to the client, then price accordingly.

Raise your rates with every new client. If nobody pushes back, you're still too cheap.

## Scope creep is real and it will eat you

You agree to build a form. Then there are three extra fields. Then it needs to connect to their CRM. Then they want email notifications. Then a PDF export.

Prevent it with a clear written scope document before you start. When requests come in outside that scope, it's simple: "Happy to add that — here's what it would cost." Most clients respect clear boundaries. The ones who don't are telling you something important about the relationship.

## Cash flow is not profit

You might invoice $10k in a month and have $2k in your account. Clients pay late. Projects stall. Tax season arrives and you realise you didn't save enough.

Invoice immediately. Chase late payments without apology. Keep three months of expenses in reserve. Set aside ~30% for taxes from every payment.

## Your network is everything

Most good freelance work comes from referrals. Former clients, ex-colleagues, people you've helped in online communities — these are your pipeline. Be generous with your knowledge. Help people. Stay in touch.

Cold outreach works, but it's exhausting. Warm referrals are where the good clients come from.

## It's not for everyone, and that's fine

Freelancing trades security for freedom. Some months are great. Some months you'll wonder why you didn't just take the salaried job. You'll deal with difficult clients, unclear briefs, and the constant low-level anxiety of not knowing what comes next.

For me, the autonomy is worth it. But it's a genuine trade-off, not a cheat code.

---

If you're thinking about making the jump: do it with a financial cushion, a clear niche, and realistic expectations. It's a different kind of hard than employment — but it's a good hard.
    `.trim(),
  },
};

// ---------------------------------------------------------------------------
// Utility: parse the post's markdown-lite content into React elements
// ---------------------------------------------------------------------------
function renderContent(raw) {
  const lines = raw.split("\n");
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mt-10 mb-4 text-2xl font-bold text-black"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      // Collect consecutive list items
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      i--; // step back so outer loop doesn't skip a line
      elements.push(
        <ul key={key++} className="ml-6 mt-3 mb-3 list-disc space-y-1">
          {items.map((item, idx) => (
            <li key={idx} className="text-base font-light text-gray-700 leading-relaxed">
              {/* render **bold** inline */}
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    } else if (line.match(/^[a-zA-Z0-9].*\/$/) || line.includes("/")) {
      // code-like path lines
      elements.push(
        <pre
          key={key++}
          className="my-4 overflow-x-auto rounded-xl bg-neutral-900 px-5 py-4 text-sm text-green-400 font-mono leading-relaxed"
        >
          {line}
        </pre>
      );
    } else if (line === "---") {
      elements.push(
        <hr key={key++} className="my-10 border-gray-200" />
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="mt-2" />);
    } else {
      elements.push(
        <p
          key={key++}
          className="mt-3 text-base font-light text-gray-700 leading-relaxed"
        >
          {renderInline(line)}
        </p>
      );
    }
  }

  return elements;
}

function renderInline(text) {
  // Render **bold** and inline `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm font-mono text-neutral-700"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function BlogPost() {
  const { slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollTop = useRef(0);

  const post = POSTS[slug];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop.current && currentScroll > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-montserrat relative w-full">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-lg font-bold">
          <a href="/">Nazib Akbar</a>
        </div>
        <div
          className="text-2xl md:hidden"
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
            {["Home", "About", "Clients", "Contact"].map((item) => (
              <li
                key={item}
                className="relative list-none text-sm font-semibold after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                <a href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
            <a
              href="/Najib Fahruna Akbar - Resume.pdf"
              download="Najib Fahruna Akbar - Resume.pdf"
              className="mt-2 md:mt-0 rounded-full border border-black px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Resume
            </a>
            <div className="w-px rounded-full h-6 bg-gray-300 hidden md:block" />
            <a
              href="/blog"
              className="mt-2 pointer-events-none md:mt-0 rounded-full border border-black bg-black px-5 py-2 text-sm font-semibold text-white transition-all duration-300"
            >
              Blog
            </a>
          </ul>
        </div>
      </nav>

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
    </div>
  );
}
