import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Followers.css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

function Followers() {
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/yokwejuste/followers")
      .then((res) => res.json())
      .then((data) => setFollowers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper projects">
            <h1 className="title-page-projects">
              They show me love 🫶 on GitHub &nbsp;
              <BsGithub />
            </h1>
            <div className="projects-container">
              {followers &&
                followers.map((follower, index) => (
                  <div key={index} className="card-project-f">
                    <div className="img-container-f">
                      <img
                        src={follower.avatar_url}
                        alt={follower.login + " image"}
                        className="img-project"
                      />
                    </div>
                    <h2 className="title-project">{follower.login}</h2>
                    <div className="technologies-container">
                      <span className="span-technologies">{follower.type}</span>
                    </div>
                    <div className="links-container">
                      <a
                        href={follower.html_url}
                        title={follower.login}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineLink />
                      </a>
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

export default Followers;
