import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
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
          <main className="main-wrapper justify-center max-[1375px]:flex-col">
            <div className="p-4 mt-[100px] max-[1375px]:mt-0 max-[1375px]:mb-20 max-[1375px]:order-2">
              <p className="text-[20px] text-[#539BF5] max-[1375px]:text-base">
                <span className="text-[#539BF5]">{"<"}</span>HelloWorld
              </p>
              <h1 className="text-[45px] text-[var(--text-primary)] dark:text-[#e1e1e6] max-[1375px]:text-[35px]">
                Steve Yonkeu <span className="text-[#539BF5]">{"/>"}</span>{" "}
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
                className="text-[22px] font-normal text-[var(--text-secondary)] dark:text-[#768390] max-[1375px]:text-[20px]"
              />
              <a
                href="https://bit.ly/Yokwejuste-CV"
                target="_blank"
                className="no-underline border-none outline-none rounded-[5px] h-[50px] w-[150px] text-base font-medium mt-8 cursor-pointer flex items-center justify-center gap-2 bg-[#306DCA] text-[#e1e1e6] transition-colors duration-300 hover:bg-[#225aad] hover:text-[#e1e1e6] max-[1375px]:w-full"
                rel="noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>
            <img
              src={profile_image}
              alt="My profile"
              className="w-[500px] mt-[50px] max-[1375px]:w-[300px] max-[1375px]:mt-[100px] max-[1375px]:order-1 max-[1375px]:mb-4"
            />
          </main>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
