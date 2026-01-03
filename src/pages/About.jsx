import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import IconCloud from '../components/IconCloud';

function About() {
  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper justify-center gap-16 max-[1090px]:flex-col max-[1090px]:gap-2">
            <div className="w-[min(800px,90vw)] mt-[30px] max-[1090px]:w-[min(600px,90vw)] max-[1090px]:mt-[120px]">
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390]">{'<html>'}</span>
              <br/>
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390] ml-[0.8rem]">{'<body>'}</span>
              <br/>
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390] ml-[1.6rem]">{'<h1>'}</span>
                <h1 className="text-[45px] ml-10 text-[var(--text-primary)] dark:text-[#e1e1e6]">Hey there! </h1>
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390] ml-[1.6rem]">{'</h1>'}</span>
              <br/>
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390] ml-[1.6rem]">{'<p>'}</span>
                <p className="text-[var(--text-primary)] dark:text-[#e1e1e6] ml-[2.4rem] mb-6 text-[1.1rem]">
                 I'm <span className="text-[#539BF5]">Steve Yonkeu</span> I love solving problems! Helping you get the best of best for the task required.
                 <span className="text-[#539BF5]">Web Full Stack and Blogger</span>
                </p>
                <p className="text-[var(--text-primary)] dark:text-[#e1e1e6] ml-[2.4rem] mb-6 text-[1.1rem]">
                  Not to make noise and emphasize on useless matter, I'll say I'm a <span className="text-[#539BF5]">Fast learner</span>.
                  Having a lot of experience in <span className="text-[#539BF5]">Web Development</span> and <span className="text-[#539BF5]">Blogging</span>.
                </p>
                <p className="text-[var(--text-primary)] dark:text-[#e1e1e6] ml-[2.4rem] mb-0 text-[1.1rem]">
                  As said before, my stack includes the following: <span className="text-[#539BF5]">HTML, CSS, JavaScript, React, Node, Express, MongoDB, MySQL, PHP, Laravel, WordPress, Bootstrap, Tailwind, Material UI, etc.</span>
                </p>
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390] ml-[1.6rem]">{'</p>'}</span>
              <br/>
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390] ml-[0.8rem]">{'</body>'}</span>
              <br/>
              <span className="font-['La_Belle_Aurore',cursive] text-[var(--text-secondary)] dark:text-[#768390]">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </div>
  );
}

export default About;