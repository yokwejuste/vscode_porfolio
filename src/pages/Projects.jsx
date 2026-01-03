import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import Pagination from "../components/Pagination";
import projects from "../data/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filterProjects = () => {
    if (typeFilter === "all") return projects;
    return projects.filter(({ type }) => type.includes(typeFilter));
  };

  const filteredProjects = filterProjects();
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [typeFilter]);

  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper justify-center flex-col pt-[150px] max-[500px]:pt-[100px]">
            <h1 className="text-[45px] max-[500px]:text-[30px]">My projects...</h1>
            <div className="mt-6 flex gap-4 justify-center">
              <button
                type="button"
                className={`border-none cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-300 ${typeFilter === "all" ? "bg-[#539BF5] text-[#e1e1e6]" : "bg-[#539cf531] text-[#539BF5] hover:bg-[#539BF5] hover:text-[#e1e1e6]"}`}
                onClick={() => setTypeFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                className={`border-none cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-300 ${typeFilter === "front" ? "bg-[#539BF5] text-[#e1e1e6]" : "bg-[#539cf531] text-[#539BF5] hover:bg-[#539BF5] hover:text-[#e1e1e6]"}`}
                onClick={() => setTypeFilter("front")}
              >
                Front-end
              </button>
              <button
                type="button"
                className={`border-none cursor-pointer py-[0.3rem] px-[0.5rem] rounded-[5px] transition-all duration-300 ${typeFilter === "back" ? "bg-[#539BF5] text-[#e1e1e6]" : "bg-[#539cf531] text-[#539BF5] hover:bg-[#539BF5] hover:text-[#e1e1e6]"}`}
                onClick={() => setTypeFilter("back")}
              >
                Back-end
              </button>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-wrap gap-4 mt-[50px] w-[min(1200px,90vw)] justify-center min-h-[600px]">
                {currentProjects.map(
                  (
                    {
                      type,
                      name,
                      src,
                      repository,
                      description,
                      site,
                      technologies,
                    },
                    index
                  ) => (
                    <div key={index} className="flex flex-col gap-4 w-[350px] text-[var(--text-primary)] dark:text-[#e1e1e6] bg-[var(--bg-tertiary)] dark:bg-[#1F2428] rounded-[5px] p-4 border border-[var(--border-color)] dark:border-[#2D333B] h-[500px] relative">
                      <div className="h-[177.75px]">
                        <img
                          src={src}
                          alt={name + " image"}
                          className="object-cover object-center w-full h-full rounded-[5px]"
                        />
                      </div>
                      <h2 className="text-[#539BF5]">{name}</h2>
                      <p>{description}</p>
                      <div className="flex gap-[0.4rem] flex-wrap">
                        {technologies.map((tech) => (
                          <span key={tech} className="rounded-[20px] text-[#539BF5] bg-[#539cf531] text-[0.8rem] py-[0.2rem] px-[0.6rem]">{tech}</span>
                        ))}
                      </div>
                      <div className="absolute flex gap-[1.2rem] right-4 bottom-4">
                        <a
                          href={repository}
                          title="Github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiGithub />
                        </a>
                        {site !== "" ? (
                          <a
                            href={site}
                            title={name}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiExternalLink />
                          </a>
                        ) : (
                          <i />
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
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
