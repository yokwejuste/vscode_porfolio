import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import { AiOutlineLink } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import "../styles/Projects.css";
import { BsCalendar } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

function Blog() {
  
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=yokwejuste")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper projects">
            <h1 className="title-page-projects">My Blogs...</h1>
            <div className="projects-container">
              {data &&
                data.map((article, index) => (
                  <div key={index} className="card-project">
                    <div className="img-container">
                      <img
                        src={article.cover_image}
                        alt={article.title + " image"}
                        className="img-project"
                      />
                    </div>
                    <h2 className="title-project">{article.title}</h2>
                    <p>{article.description}</p>
                    <div className="technologies-container">
                      {article.tag_list.map((tech) => (
                        <span className="span-technologies">{tech}</span>
                      ))}
                    </div>
                    <div className="links-container">
                      <i className="to_the_left">
                        <BsCalendar />
                        &nbsp;
                        {article.readable_publish_date}
                      </i>
                      <i>
                        <FiEye/>
                      </i>
                      <a
                        href={article.url}
                        title={article.title}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineLink />
                      </a>
                      <i>
                        <FaHeart />
                        {article.public_reactions_count}
                      </i>
                    </div>
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

export default Blog;
