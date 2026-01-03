import React from "react";
import MenuBar from "../components/MenuBar";
import react_icon from "../images/react_icon.svg";
import js_icon from "../images/js_icon.svg";
import html_icon from "../images/html_icon.svg";
import css_icon from "../images/css_icon.svg";
import json_icon from "../images/json_icon.svg";
import python_icon from "../images/python.png";
import markdown_icon from "../images/markdown.png";

function Header() {
  return (
    <header className="bg-[var(--bg-secondary)] dark:bg-[#1F2428] h-9 fixed top-10 w-screen left-[17.5rem] z-[1] border-b border-[var(--border-color)] dark:border-[#2D333B] max-[1150px]:left-0">
      <nav className="flex">
        <MenuBar icon={react_icon} name="home.jsx" path="/" />
        <MenuBar icon={html_icon} name="about.html" path="/about" />
        <MenuBar icon={js_icon} name="projects.js" path="/projects" />
        <MenuBar
          icon={json_icon}
          name="recommendations.json"
          path="/recommendation"
        />
        <MenuBar icon={css_icon} name="contact.css" path="/contact" />
        <MenuBar icon={python_icon} name="followers.py" path="/followers" />
        <MenuBar icon={markdown_icon} name="blog.md" path="/blog" />
      </nav>
    </header>
  );
}

export default Header;
