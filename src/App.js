import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog/[slug]";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/test" Component={Test} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
      <SpeedInsights />
    </>
  );
}

export default App;
