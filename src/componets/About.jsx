import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const myTogglemenu = useSelector((store) => store.toggle.isMenuOpen);
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2
        className="fs-2 mb-4"
          style={{
            color: myTogglemenu ? "#10f0fc" : "",
          }}
        >
         {"< About />"}
        </h2>
        <p className="mb-4" style={{ color: myTogglemenu ? "#b3c3d7" : "" }}>
          I'm a driven front-end developer dedicated to translating design
          concepts into immersive digital experiences. With a strong foundation
          in HTML, CSS, and JavaScript, I specialize in creating responsive,
          user-centric interfaces that marry aesthetics with seamless
          functionality. My obsession with pixel-perfection drives me to
          meticulously craft every detail of a website, ensuring it not only
          looks stunning but also offers an intuitive and accessible user
          journey. I thrive in collaborative environments, constantly seeking
          opportunities to learn and adapt in this ever-evolving tech landscape.
          Let's work together to bring impactful ideas to life on the web.
        </p>
      </div>
    </>
  );
};

export default About;
