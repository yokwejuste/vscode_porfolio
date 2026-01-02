import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import "../styles/Home.css";
import profile_image from "../images/img-yokwejuste.png";
import { FiDownload } from "react-icons/fi";
import MenuMobile from "../components/MenuMobile";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p>
                <span className="span">{"<"}</span>HelloWorld
              </p>
              <h1>
                Steve Yonkeu <span className="span">{"/>"}</span>{" "}
              </h1>
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  1000,
                  "Full stack Web developer",
                  1000,
                  "Backend and API lover",
                  1000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
              />
              <a
                href="https://bit.ly/Yokwejuste-CV"
                target="_blank"
                className="btn-download"
                rel="noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>
            <img
              src={profile_image}
              alt="My profile"
              className="image-perfil"
            />
          </main>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
