import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Contact.css";
import contacts from "../data/contacts";

function Contact() {
  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper contact">
            <div className="title-container">
              <h1 className="title-contact">Come let's chat🤙</h1>
              <h2 className="message-contact">
                " Isn't it funny how just one little phone call or text can make
                your bad day suddenly wonderful?! " – Nishan Panwar
              </h2>
            </div>
            <div className="list-contact">
              <p className="class-name line">
                .contact<span className="element">{" {"}</span>
              </p>
              {contacts.map(({ social, href, text }) => (
                <p className="key-name line" key={social}>
                  {social}:
                  <a href={href} target="_blank" rel="noreferrer">
                    {text}
                  </a>
                  ;
                </p>
              ))}
              <p className="element line">{"}"}</p>
            </div>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
