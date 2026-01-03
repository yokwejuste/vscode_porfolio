import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import Pagination from "../components/Pagination";
import { AiOutlineLink } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

function Blog() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=yokwejuste")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = data ? data.slice(startIndex, endIndex) : [];

  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper justify-center flex-col pt-[150px] max-[500px]:pt-[100px]">
            <h1 className="text-[45px] max-[500px]:text-[30px]">My Blogs...</h1>
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-wrap gap-8 mt-[50px] w-[min(1200px,90vw)] justify-center min-h-[600px]">
                {currentArticles.map((article, index) => (
                  <div key={index} className="flex flex-col gap-4 w-[350px] text-[var(--text-primary)] dark:text-[#e1e1e6] bg-[var(--bg-tertiary)] dark:bg-[#1F2428] rounded-[5px] p-4 border border-[var(--border-color)] dark:border-[#2D333B] transition-transform duration-300 hover:-translate-y-1">
                    <div className="h-[177.75px]">
                      <img
                        src={article.cover_image}
                        alt={article.title + " image"}
                        className="object-cover object-center w-full h-full rounded-[5px]"
                      />
                    </div>
                    <h2 className="text-[#539BF5] text-[1.5rem]">{article.title}</h2>
                    <p>{article.description}</p>
                    <div className="flex gap-[0.4rem] flex-wrap">
                      {article.tag_list.map((tech) => (
                        <span key={tech} className="rounded-[20px] text-[#539BF5] bg-[#539cf531] text-[0.8rem] py-[0.2rem] px-[0.6rem]">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-[1.2rem] items-center mt-auto">
                      <i className="flex items-center gap-1 text-[#8b949e] text-[0.9rem] mr-auto">
                        <BsCalendar />
                        {article.readable_publish_date}
                      </i>
                      <i className="flex items-center gap-1 text-[#8b949e] text-[0.9rem]">
                        <FiEye/>
                      </i>
                      <a
                        href={article.url}
                        title={article.title}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#539BF5] text-[1.2rem] transition-colors duration-300 hover:text-[#e1e1e6]"
                      >
                        <AiOutlineLink />
                      </a>
                      <i className="flex items-center gap-1 text-[#8b949e] text-[0.9rem]">
                        <FaHeart />
                        {article.public_reactions_count}
                      </i>
                    </div>
                  </div>
                ))}
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

export default Blog;
