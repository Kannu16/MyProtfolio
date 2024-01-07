import React from "react";
import ReactImg from "../Images/React.png";
import Redux from "../Images/Redux.png";
import HtmlImg from "../Images/Html.png";
import Css from "../Images/Css.png";
import Bootstarp from "../Images/Bootstrap.png";
import Tailwind from "../Images/Tailwind.png";
import JavaScript1 from "../Images/Js.png";
import Github from "../Images/Github.png";
import Git from "../Images/Git.png";
import Material from "../Images/Material_Ui.png";
import Sql from "../Images/sql.png"

import { useSelector } from "react-redux";

const Skills = () => {
  let skillsArry = [
    {
      techStack: ReactImg,
      level: 90,
      color: "bg-primary",
      name: "React",
    },
    {
      techStack: Redux,
      level: 80,
      name: "Redux",
      color: "bg-success",
    },
    {
      techStack: HtmlImg,
      level: 65,
      name: "Html",
      color: "bg-danger",
    },
    {
      techStack: Css,
      level: 75,
      name: "CSS",
      color: "bg-info",
    },
    {
      techStack: Bootstarp,
      level: 75,
      name: "Bootstarp",
      color: "bg-success",
    },
    {
      techStack: Tailwind,
      level: 50,
      name: "Tailwind",
      color: "bg-info",
    },
    {
      techStack: JavaScript1,
      level: 80,
      color: "bg-warning",
      name: "JavaScript",
    },
    {
      techStack: Github,
      level: 70,
      color: "bg-dark",
      name: "Github",
    },
    {
      techStack: Git,
      level: 70,
      color: "bg-dark",
      name: "Git",
    },
    {
      techStack: Material,
      level: 80,
      color: "bg-info",
      name: "Material UI",
    },
    {
      techStack: Sql,
      level: 90,
      color: "bg-dark",
      name: "SQL",
    },
  ];

  const myTogglemenu = useSelector((store) => store.toggle.isMenuOpen);

  return (
    <>
      <h2
        className="mt-4 mb-4 fs-2  border-bottom pb-2"
        style={{
          color: myTogglemenu ? "#10f0fc" : "",
        }}
      >
        {"< Skills />"}
      </h2>
      <h6
        style={{
          color: myTogglemenu ? "#f2f2f2" : "",
        }}
        className="Intro-text my-2"
      >
        As a front-end developer, I have honored a diverse set of skills to craft
        exceptional web experiences. <br /> <mark className="lh-lg">My expertise includes:</mark>
      </h6>
      <div className="skills-box d-flex flex-wrap mt-3">
        {skillsArry.map((items) => (
          <div
            className={`skills-card rounded mt-2 mx-2 ${
              myTogglemenu ? "ms-3 p-2" : "my-2"
            }`}
            style={{ backgroundColor: myTogglemenu ? "#27282f" : "" }}
            key={items.techStack}
            data-aos-duration="800"
            data-aos="fade-right"
          >
            <p
              className="text-center text-semibold mb-1"
              style={{
                color: myTogglemenu ? "#f2f2f2" : "#10637d",
              }}
            >
              {items.name}
            </p>
            <img
              className="my-skils card shadow rounded"
              alt={items.techStack}
              src={items.techStack}
            />
            <div
              className="progress mt-2"
              role="progressbar"
              aria-label="animated Success example"
              aria-valuenow={items.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className={`progress-bar ${items.color} progress-bar-striped progress-bar-animated`}
                style={{ width: items.level }}
              >
                {items.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
