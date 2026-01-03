import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import Pagination from "../components/Pagination";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

function Followers() {
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalFollowers, setTotalFollowers] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchAllFollowers = async () => {
      try {
        setLoading(true);
        
        const userResponse = await fetch("https://api.github.com/users/yokwejuste");
        const userData = await userResponse.json();
        const followerCount = userData.followers;
        setTotalFollowers(followerCount);
        
        const perPage = 100;
        const maxFollowers = 1000;
        const followersToFetch = Math.min(followerCount, maxFollowers);
        const totalApiPages = Math.ceil(followersToFetch / perPage);
        
        const fetchPromises = [];
        for (let page = 1; page <= totalApiPages; page++) {
          fetchPromises.push(
            fetch(`https://api.github.com/users/yokwejuste/followers?per_page=${perPage}&page=${page}`)
              .then(res => res.json())
          );
        }
        
        const results = await Promise.all(fetchPromises);
        const allFollowers = results.flat();
        setFollowers(allFollowers);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllFollowers();
  }, []);

  const totalPages = Math.ceil(followers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFollowers = followers.slice(startIndex, endIndex);

  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper justify-center flex-col pt-[150px]">
            <h1 className="text-[45px] max-[500px]:text-[30px] flex items-center justify-center">
              They show me love 🫶 on GitHub &nbsp;
              <BsGithub />
            </h1>
            {totalFollowers > 0 && (
              <p className="text-[var(--text-secondary)] dark:text-[#768390] text-center mt-2">
                {totalFollowers.toLocaleString()} {totalFollowers === 1 ? 'follower' : 'followers'} {followers.length < totalFollowers && `(showing first ${followers.length.toLocaleString()})`}
              </p>
            )}
            <div className="flex flex-col items-center w-full">
              {loading ? (
                <div className="flex items-center justify-center min-h-[600px]">
                  <div className="text-[var(--text-primary)] dark:text-[#e1e1e6] text-xl">Loading followers...</div>
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-4 mt-[50px] w-[min(1200px,90vw)] justify-center min-h-[600px]">
                    {currentFollowers.map((follower, index) => (
                      <div key={follower.id} className="flex flex-col gap-4 w-[350px] text-[var(--text-primary)] dark:text-[#e1e1e6] bg-[var(--bg-tertiary)] dark:bg-[#1F2428] rounded-[5px] p-4 border border-[var(--border-color)] dark:border-[#2D333B] h-[430px] relative transition-transform duration-300 hover:-translate-y-1">
                        <div className="h-[280px]">
                          <img
                            src={follower.avatar_url}
                            alt={follower.login + " image"}
                            className="object-cover object-center w-full h-full rounded-[5px]"
                          />
                        </div>
                        <h2 className="text-[#539BF5]">{follower.login}</h2>
                        <div className="flex gap-[0.4rem] flex-wrap">
                          <span className="rounded-[20px] text-[#539BF5] bg-[#539cf531] text-[0.8rem] py-[0.2rem] px-[0.6rem]">{follower.type}</span>
                        </div>
                        <div className="absolute flex gap-[1.2rem] right-4 bottom-4">
                          <a
                            href={follower.html_url}
                            title={follower.login}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#539BF5] text-[1.2rem] transition-colors duration-300 hover:text-[#e1e1e6]"
                          >
                            <AiOutlineLink />
                          </a>
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
                </>
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

export default Followers;
