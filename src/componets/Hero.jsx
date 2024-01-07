import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Developer from "../Images/Developer.jpg";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Conactus from "./Conactus";
import Linkedin from "../Images/Linkendin.png";
import Github from "../Images/Github.png";
import Email from "../Images/Email.png";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import myResume from "../resume/Kunal_Nath_New.pdf";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Set the duration for the animations
    });
  }, []);

  const myTogglemenu = useSelector((store) => store.toggle.isMenuOpen);

  return (
    <div
      className="hero-container position-absolute"
      style={{ backgroundColor: myTogglemenu ? "#1c2025" : "" }}
    >
      <Header />
      {/* Portfolio Intro section */}
      <div className="my-main-hero-container">
        <div
          className="hero-container-inner d-flex justify-content-center align-items-center"
        >
          <div className="hero-left w-25" data-aos="fade-right">
            <img
              alt="developerimage"
              className="developer-image rounded"
              src={Developer}
            />
          </div>
          <div className="hero-right w-75">
            <h6
              className="hey-there"
              style={{ color: !myTogglemenu ? "black" : "" }}
              data-aos="fade-right"
            >
              Hey, there!
            </h6>
            <h1
              className="developer-name"
              data-aos="fade-left"
              style={{ color: myTogglemenu ? "#f2f2f2" : "" }}
            >
              <span
                style={{ color: !myTogglemenu ? "black" : "" }}
                className="hey-there"
              >
                I am{" "}
              </span>{" "}
              Kunal Kanti Nath
            </h1>
            <p
              data-aos="zoom-in"
              className="fs-5 mb-5 mt-4 fw-light lh-sm developer-intro"
              style={{ color: myTogglemenu ? "#b3c3d7" : "" }}
            >
              Dedicated{" "}
              <span
                className="text-semibold text-uppercase"
                style={{
                  color: myTogglemenu ? "#10f0fc" : "#10637d",
                }}
              >
                front-end developer
              </span>{" "}
              with a keen eye for detail. Crafting engaging user interfaces
              through a blend of creativity, code, and user-centric design.
              Let's build captivating digital experiences together!
            </p>
            <a
              className="btn download-resume-button"
              style={{
                backgroundColor: myTogglemenu ? "#10f0fc" : "",
                color: myTogglemenu ? "#1c2025" : "",
              }}
              href={myResume}
              download={myResume}
            >
              Download Resume
            </a>
            <div className="social-icons my-3">
              <a
                rel="noreferrer"
                style={{
                  backgroundColor: myTogglemenu ? "#f2f2f2" : "",
                  padding: myTogglemenu ? "10px" : "",
                  borderRadius: myTogglemenu ? "5px" : "",
                }}
                href="https://github.com/Kannu16"
                target="_blank"
              >
                <img alt="Github" src={Github} />
              </a>
              <a
                rel="noreferrer"
                style={{
                  backgroundColor: myTogglemenu ? "#f2f2f2" : "",
                  padding: myTogglemenu ? "10px" : "",
                  borderRadius: myTogglemenu ? "5px" : "",
                  marginLeft: myTogglemenu ? "10px" : "",
                }}
                href="https://www.linkedin.com/in/kunal-kanti-nath-576476214"
                target="_blank"
              >
                <img
                  className={`${!myTogglemenu ? "ms-3" : ""}`}
                  alt="Linkedin"
                  src={Linkedin}
                />
              </a>
              <a
                rel="noreferrer"
                style={{
                  backgroundColor: myTogglemenu ? "#f2f2f2" : "",
                  padding: myTogglemenu ? "10px" : "",
                  borderRadius: myTogglemenu ? "5px" : "",
                  marginLeft: myTogglemenu ? "10px" : "",
                }}
                href="mailto:kannudev16@gmail.com"
                target="_blank"
              >
                <img
                  className={`${!myTogglemenu ? "ms-3" : ""}`}
                  alt="Email"
                  src={Email}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="About-section my-4" id="about">
          <About />
        </div>
        <div className="skills my-5" id="skills">
          <Skills />
        </div>
        <div className="project-section my-5" id="project">
          <Project />
        </div>
        <div className="conactus-section my-5" id="contact">
          <Conactus />
        </div>
        <div className="footer-section mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
