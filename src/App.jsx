import React, { useEffect } from 'react';
import "./App.css";
import Hero from './componets/Hero';
import { Provider } from 'react-redux';
import store from './utils/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();

    const handleMouseMove = (e) => {
      const body = document.querySelector('body');
      const heart = document.createElement('span');
      heart.classList.add("my-name-animation");
      const x = e.clientX;
      const y = e.clientY;
      heart.style.left = x + "px";
      heart.style.top = y + "px";

      body.appendChild(heart);

      const size = Math.random() * 20;
      heart.style.maxWidth= 100 + size + "vw";
      heart.style.maxHeight = 100 + size + "vh";

      const transformStyle = Math.random() * 360;
      heart.style.transform = 'rotate(' + transformStyle + 'deg)';

      setTimeout(() => {
        heart.remove();
      }, 3000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <Hero />
      </Provider>
    </>
  );
}

export default App;
