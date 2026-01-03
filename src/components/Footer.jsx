import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="flex fixed bottom-0 w-screen h-[50px] items-center justify-center z-[2] bg-[var(--bg-primary)] dark:bg-[#24292E] text-[var(--text-primary)] dark:text-[#e1e1e6] border-t border-[var(--border-color)] dark:border-[#2D333B]">
      <div className="flex items-center fixed left-0">
        <p className="px-4 h-[45px] flex items-center text-[13px]">It's me :)</p>
        <a href="https://www.linkedin.com/in/yokwejuste/"
          target="_blank"
          className="w-[45px] h-[45px] flex items-center justify-center text-[var(--text-primary)] dark:text-[#e1e1e6]"
          rel="noreferrer"
        >
          <BsLinkedin className="text-xl transition-colors duration-500 hover:text-[#768390]"/>
        </a>
        <a href="https://github.com/yokwejuste"
          target="_blank"
          className="w-[45px] h-[45px] flex items-center justify-center text-[var(--text-primary)] dark:text-[#e1e1e6]"
          rel="noreferrer"
        >
          <BsGithub className="text-xl transition-colors duration-500 hover:text-[#768390]"/>
        </a>
      </div>

      <p className="text-sm max-[855px]:hidden">Developed with ❤ by Steve Yonkeu</p>
    </footer>
  );
}

export default Footer;