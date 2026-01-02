import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return ( 
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br/>
              <span className="span-tag body">{'<body>'}</span>
              <br/>
              <span className="span-tag content">{'<h1>'}</span>
                <h1 className="title-about">Hey there! </h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content">{'<p>'}</span>
                <p className="text-about">
                 I'm <span className="span-highlight">Steve Yonkeu</span> I love solving problems! Helping you get the best of best for the task required.
                 <span className="span-highlight">Web Full Stack and Blogger</span>
                </p>
                <p className="text-about">
                  Not to make noise and emphasize on useless matter, I'll say I'm a <span className="span-highlight">Fast learner</span>. 
                  Having a lot of experience in <span className="span-highlight">Web Development</span> and <span className="span-highlight">Blogging</span>.
                </p>
                <p className="text-about last">
                  As said before, my stack includes the following: <span className="span-highlight">HTML, CSS, JavaScript, React, Node, Express, MongoDB, MySQL, PHP, Laravel, WordPress, Bootstrap, Tailwind, Material UI, etc.</span>
                </p>
              <span className="span-tag content">{'</p>'}</span>
              <br/>
              <span className="span-tag body">{'</body>'}</span>
              <br/>
              <span className="span-tag html">{'</html>'}</span>
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