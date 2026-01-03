import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({name, icon, path}) {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={`border-none outline-none px-6 py-2 cursor-pointer border-r border-[var(--border-color)] dark:border-[#2D333B] bg-[var(--bg-secondary)] dark:bg-[#1F2428] text-[var(--text-secondary)] dark:text-[#768390] text-sm text-center flex items-center justify-center gap-2 h-9 no-underline border-b border-b-[var(--border-color)] dark:border-b-[#2D333B]
        ${pathname === path ? 'border-r border-r-[var(--border-color)] dark:border-r-[#2D333B] border-b-0 border-t-2 border-t-[#AD5B64] bg-[var(--bg-primary)] dark:bg-[#24292E] text-[var(--text-primary)] dark:text-[#e1e1e6]' : ''}
        max-[1150px]:hidden
        ${pathname === path ? 'max-[1150px]:flex' : ''}`}
    >
      <img src={icon} alt="icon" className="w-[18px]"/>
      <p>{name}</p>
    </Link>
  );
}

export default Header;