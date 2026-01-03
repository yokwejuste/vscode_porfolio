import React, { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import AppContext from "../context/AppContext";

function TitleBar() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <section className="bg-[var(--bg-secondary)] dark:bg-[#1F2428] border-b border-[var(--border-color)] dark:border-[#2D333B] text-[var(--text-primary)] dark:text-[#e1e1e6] text-[13px] h-10 flex items-center justify-center fixed top-0 left-0 w-screen z-[2]">
      <p>yokwejuste's portfolio</p>
      <div className="flex items-center absolute gap-[10px] left-[10px]">
        <span className="rounded-full w-3 h-3 bg-[#BF616A]"/>
        <span className="rounded-full w-3 h-3 bg-[#EBCB8B]"/>
        <span className="rounded-full w-3 h-3 bg-[#A3BE8C]"/>
      </div>
      <button
        onClick={toggleTheme}
        className="absolute right-[10px] p-2 rounded-md hover:bg-[var(--border-secondary)] dark:hover:bg-[#2D333B] transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <BsSun className="text-[#EBCB8B] w-4 h-4" />
        ) : (
          <BsMoon className="text-[#539BF5] w-4 h-4" />
        )}
      </button>
    </section>
  );
}

export default TitleBar;