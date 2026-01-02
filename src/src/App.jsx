import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Recommendation from "./pages/Recommendation";
import Followers from "./pages/Followers";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
