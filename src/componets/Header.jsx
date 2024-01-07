import React, {useState, useEffect} from "react";
import Logo from "../Images/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/toggleSlice";

const Header = () => {
  const myTogglemenu = useSelector(store => store.toggle.isMenuOpen);
  const [scrolled, setScrolled] = useState(false);

  const dispatch = useDispatch()

  const toggleDarkMode = ()=>{
  dispatch(toggleMenu())
  }


   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  


  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top py-2 ${myTogglemenu ? scrolled ? "bg-color-on-scroll shadow" : "" : ""}`} style={{transition:"0.9s ease"}}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img alt="logo" className="protfolio-logo" src={Logo} />
          </a>
          <div>
          <button
            className="navbar-toggler shadow-none"
            style={{color : myTogglemenu ? "#10f0fc" : "", boxShadow : !myTogglemenu ? "none" : ''}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`${myTogglemenu ? "my-toggler" : "navbar-toggler-icon"}`}></span>
          </button>
          <div className="form-check form-switch dark-switch dark-switch-top mt-2 ms-4 d-none">
                <input
                  className="form-check-input shadow-none"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={toggleDarkMode}
                  style={{width:"3em", padding: "10px 0",cursor:"pointer"}}
                />
              </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link text-uppercase ms-2 nav-about my-nav" href="#about" style={{color: myTogglemenu ? "#f2f2f2" : ""}}>
                about
              </a>
              <a
                className="nav-link text-uppercase ms-2 nav-experience my-nav"
                href="#project"
                style={{color: myTogglemenu ? "#f2f2f2" : ""}}
              >
                Project
              </a>
              <a className="nav-link text-uppercase ms-2 nav-skills my-nav" href="#skills" style={{color: myTogglemenu ? "#f2f2f2" : ""}}>
                skills
              </a> 
              <a className="nav-link text-uppercase ms-2 nav-contact my-nav" href="#contact" style={{color: myTogglemenu ? "#f2f2f2" : ""}}>
                contact
              </a>
              <div className="form-check form-switch dark-switch-bottom mt-2 ms-4" style={{color: myTogglemenu ? "#f2f2f2" : ""}}>
                <input
                  className="form-check-input cursor-pointer"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={toggleDarkMode}
                  style={{cursor:"pointer"}}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
