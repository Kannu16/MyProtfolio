import React from "react";
import YouTube from "../Images/YouTube_Project.png";
import Hire_startup from "../Images/Hire_startup.png";
import Chat_GPT from "../Images/Chat_GPT.png";
import { useSelector } from "react-redux";
import Github from "../Images/Github.png";

const Project = () => {
  const myTogglemenu = useSelector((store) => store.toggle.isMenuOpen);

  const myProjectArray = [
    {
      image: YouTube,
      projectname: "YouTube Clone",
      projectLink: "https://youtube-clone-kannu16.netlify.app/",
      stackUsed: ["react", "redux"],
      description:
        "This YouTube clone project, built with React.js, boasts features such as live search, chat, nested comments, custom shimmer, and more.",
      github_link: "https://github.com/Kannu16/YouTube_Clone",
    },

    {
      image: Hire_startup,
      projectname: "Hire Startup webpage clone",
      projectLink: "https://hire-startup-kannu16.netlify.app/",
      stackUsed: ["react", "redux"],
      description:
        "This freelance project is a job board website, which was commissioned by a my client. It facilitates companies in hiring developers and was developed using React.",
      github_link: "https://github.com/Kannu16/StartUp_Demo",
    },
    {
      image: Chat_GPT,
      projectname: "ChatGPT clone",
      projectLink: "https://kannu16-chatgpt.netlify.app/",
      stackUsed: ["react", "redux"],
      description:
        "This ChatGPT clone, powered by React.js and Rapid API, offers features like search history and customizable API integration for users",
      github_link: "https://github.com/Kannu16/ChatGPT_Clone",
    },
  ];

  return (
    <>
      <h2
        className="my-4 fs-2  border-bottom pb-2"
        style={{ color: myTogglemenu ? "#10f0fc" : "" }}
      >
        {"< Projects />"}
      </h2>
      <h6
        style={{
          color: myTogglemenu ? "#f2f2f2" : "",
        }}
        className="Intro-text mt-2 mb-6"
      >
        Welcome to the heart of my ❤️portfolio❤️, where I showcase the projects that
        represent my passion for front-end development. Each project is a
        testament to my dedication to creating seamless, engaging, and
        user-friendly web experiences. <br /> <mark className="lh-lg">Here are a few highlights:</mark>
      </h6>
      <div className="project-container d-flex flex-wrap my-5">
        {myProjectArray.map((itmes, index) => {
          const {
            image,
            projectname,
            projectLink,
            stackUsed,
            description,
            github_link,
          } = itmes;
          return (
            <div
              className="my-project-card rounded-bottom ms-3 w-25 p-2"
              data-aos="flip-left"
              data-aos-duration="800"
              key={index}
            >
              <img src={image} className="w-100" alt={projectname} />
              <div className="project-card-front">
                <h2 className="fs-5 mt-3 border-bottom border-secondary pb-2">
                  {projectname}
                </h2>
                <button className="btn btn-info btn-sm" type="button">
                  {`#${stackUsed[0]}`}
                </button>
                <button className="btn btn-success btn-sm ms-2" type="button">
                  {`#${stackUsed[1]}`}
                </button>
              </div>
              <div className="hidden d-flex flex-column align-items-center">
                <div className="view-project-and-github d-flex justify-content-between align-items-center w-100 p-3">
                  <a href={projectLink} className="btn btn-outline-info">
                    Live Preview
                  </a>
                  <a className="btn btn-info" href={github_link}>
                    {" "}
                    <img
                      src={Github}
                      height="30"
                      width="30"
                      alt="Github-link"
                    />
                  </a>
                </div>
                <article className="p-2 fs-6">{description}</article>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
