import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import contacts from "../data/contacts";

function Contact() {
  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper justify-center gap-24 items-center max-[1150px]:flex-col max-[1150px]:gap-16">
            <div className="w-[min(400px,90vw)] mt-[30px] text-center max-[1150px]:border-b max-[1150px]:border-b-[var(--border-secondary)] dark:max-[1150px]:border-b-[#3f4244] max-[1150px]:pb-16">
              <h1 className="text-[2rem] text-[var(--text-primary)] dark:text-[#e1e1e6] max-[1150px]:text-[1.8rem]">Come let's chat🤙</h1>
              <h2 className="text-[var(--text-secondary)] dark:text-[#768390] text-base mt-6">
                " Isn't it funny how just one little phone call or text can make
                your bad day suddenly wonderful?! " – Nishan Panwar
              </h2>
            </div>
            <div className="relative whitespace-pre-wrap pl-28 max-[1150px]:pl-[1.6rem] [counter-reset:line] [counter-increment:line_0]">
              <p className="text-[#539BF5] text-[1.2rem] block leading-[1.5em] before:text-base before:font-normal before:absolute before:left-[-10px] before:content-[counter(line)] before:[counter-increment:line] before:inline-block before:border-none before:text-[var(--text-secondary)] dark:before:text-[#768390] before:font-['Fira_Code',monospace] before:pl-24 before:border-l before:border-l-[var(--border-secondary)] dark:before:border-l-[#3f4244] max-[1150px]:before:border-l-0 max-[1150px]:before:pl-4">
                .contact<span className="text-[var(--text-primary)] dark:text-[#e1e1e6] text-[1.2rem]">{" {"}</span>
              </p>
              {contacts.map(({ social, href, text }) => (
                <p className="text-[var(--text-primary)] dark:text-[#e1e1e6] ml-[1.2rem] text-[1.2rem] block leading-[1.5em] before:text-base before:font-normal before:absolute before:left-[-10px] before:content-[counter(line)] before:[counter-increment:line] before:inline-block before:border-none before:text-[var(--text-secondary)] dark:before:text-[#768390] before:font-['Fira_Code',monospace] before:pl-24 before:border-l before:border-l-[var(--border-secondary)] dark:before:border-l-[#3f4244] max-[1150px]:before:border-l-0 max-[1150px]:before:pl-4" key={social}>
                  {social}:
                  <a href={href} target="_blank" rel="noreferrer" className="text-[#539BF5] list-none text-[1.2rem]">
                    {text}
                  </a>
                  ;
                </p>
              ))}
              <p className="text-[var(--text-primary)] dark:text-[#e1e1e6] text-[1.2rem] block leading-[1.5em] before:text-base before:font-normal before:absolute before:left-[-10px] before:content-[counter(line)] before:[counter-increment:line] before:inline-block before:border-none before:text-[var(--text-secondary)] dark:before:text-[#768390] before:font-['Fira_Code',monospace] before:pl-24 before:border-l before:border-l-[var(--border-secondary)] dark:before:border-l-[#3f4244] max-[1150px]:before:border-l-0 max-[1150px]:before:pl-4">{"}"}</p>
            </div>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
