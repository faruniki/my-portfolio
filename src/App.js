import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
