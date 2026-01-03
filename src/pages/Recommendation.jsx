import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import recommendation from "../data/recommendation"


function Projects() {
  return ( 
    <div>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper justify-center items-center flex-col">
          <h1 className="text-[45px] w-[min(570px,90vw)] max-[925px]:text-[30px] max-[925px]:mt-[100px] max-[925px]:text-center">Testimonials on my past works</h1>
          <div className="mt-20 flex flex-wrap items-center justify-center w-[min(1200px,90vw)] gap-8 max-[925px]:mt-12 max-[925px]:flex-col max-[925px]:mb-20">
            {recommendation.map(({name, message, social}, index) => (
              <div className={`w-[400px] text-[var(--text-primary)] dark:text-[#e1e1e6] max-[500px]:w-full ${index === 1 ? 'max-[925px]:border-t max-[925px]:border-b max-[925px]:border-[var(--border-color)] dark:max-[925px]:border-[#2D333B] max-[925px]:pt-[25px] max-[925px]:pb-[25px]' : ''}`} key={name}>
                <p>{message}</p>
                <a href={social} target="_blank" rel="noreferrer" className="hover:text-[#539BF5] transition-colors duration-300"><h2 className="text-[1.2rem] mt-4">{name}</h2></a>
              </div>
            ))}
          </div>
        </main>
      </section>
      <SideBar />
    </section>
    <Footer />
  </div>
  );
}

export default Projects;