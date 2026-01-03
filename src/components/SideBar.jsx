import React, { useState, useContext } from "react";
import react_icon from "../images/react_icon.svg";
import js_icon from "../images/js_icon.svg";
import html_icon from "../images/html_icon.svg";
import css_icon from "../images/css_icon.svg";
import json_icon from "../images/json_icon.svg";
import python_icon from "../images/python.png";
import markdown_icon from "../images/markdown.png";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import myContext from "../context/AppContext";

function SideBar() {
  const { activeSideBar } = useContext(myContext);
  const [open, setOpen] = useState(true);
  return (
    <aside className={`h-full bg-[var(--bg-secondary)] dark:bg-[#1F2428] w-[17.5rem] text-[var(--text-primary)] dark:text-[#e1e1e6] border-r border-[var(--border-color)] dark:border-[#2D333B] fixed top-10 left-0 overflow-x-hidden z-[2] transition-[width] duration-300 ease-in
      max-[1150px]:border-l max-[1150px]:border-r-0 max-[1150px]:w-0 max-[1150px]:right-0 max-[1150px]:left-auto
      ${activeSideBar ? "max-[1150px]:w-[300px] max-[1150px]:block" : ""}`}>
      <div className={`py-[0.7rem] px-4 tracking-wider mb-3 text-sm ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-500 max-[1150px]:ease-in-out"}`}>
        <p>EXPLORER</p>
      </div>
      <button
        type="button"
        className={`py-[0.2rem] px-5 flex items-center text-sm cursor-pointer transition-all duration-300 gap-2 border-none outline-none bg-[var(--bg-secondary)] dark:bg-[#1F2428] text-[var(--text-primary)] dark:text-[#e1e1e6] w-full hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-[400ms] max-[1150px]:ease"}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {open ? <FaFolderOpen color="#EBCB8B" /> : <FaFolder color="#EBCB8B" />}
        <p>Portfolio</p>
      </button>
      {open && (
        <>
          <Link to="/" className={`py-[0.3rem] px-12 flex items-center text-sm gap-2 cursor-pointer transition-all duration-300 no-underline text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-300 max-[1150px]:ease"}`}>
            <img src={react_icon} alt="icon" className="w-[18px]" />
            <p>home.jsx</p>
          </Link>
          <Link to="/about" className={`py-[0.3rem] px-12 flex items-center text-sm gap-2 cursor-pointer transition-all duration-300 no-underline text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-300 max-[1150px]:ease"}`}>
            <img src={html_icon} alt="icon" className="w-[18px]" />
            <p>about.html</p>
          </Link>
          <Link to="/projects" className={`py-[0.3rem] px-12 flex items-center text-sm gap-2 cursor-pointer transition-all duration-300 no-underline text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-300 max-[1150px]:ease"}`}>
            <img src={js_icon} alt="icon" className="w-[18px]" />
            <p>projects.js</p>
          </Link>
          <Link to="/recommendation" className={`py-[0.3rem] px-12 flex items-center text-sm gap-2 cursor-pointer transition-all duration-300 no-underline text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-300 max-[1150px]:ease"}`}>
            <img src={json_icon} alt="icon" className="w-[18px]" />
            <p>recommendations.json</p>
          </Link>
          <Link to="/contact" className={`py-[0.3rem] px-12 flex items-center text-sm gap-2 cursor-pointer transition-all duration-300 no-underline text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-300 max-[1150px]:ease"}`}>
            <img src={css_icon} alt="icon" className="w-[18px]" />
            <p>contact.css</p>
          </Link>
          <Link to="/followers" className={`py-[0.3rem] px-12 flex items-center text-sm gap-2 cursor-pointer transition-all duration-300 no-underline text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-300 max-[1150px]:ease"}`}>
            <img src={python_icon} alt="icon" className="w-[18px]" />
            <p>followers.py</p>
          </Link>
          <Link to="/blog" className={`py-[0.3rem] px-12 flex items-center text-sm gap-2 cursor-pointer transition-all duration-300 no-underline text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[var(--border-secondary)] dark:hover:bg-[#24292E] ${!activeSideBar ? "max-[1150px]:opacity-0" : "max-[1150px]:opacity-100 max-[1150px]:transition-opacity max-[1150px]:duration-300 max-[1150px]:ease"}`}>
            <img src={markdown_icon} alt="icon" className="w-[18px]" />
            <p>blog.md</p>
          </Link>
        </>
      )}
    </aside>
  );
}

export default SideBar;
