import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "@formspree/react";
import ContactUS from "../Images/Contact_us.png";

const ContactUs = () => {
  const myTogglemenu = useSelector((store) => store.toggle.isMenuOpen);
  const [state, handleSubmit] = useForm("xyyqjjlp");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const showAndHideSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 4000); // 4 seconds delay
  };

  useEffect(() => {
    if (state.succeeded) {
      showAndHideSuccessMessage();
    }
  }, [state.succeeded]);

  return (
    <>
      <h2
        className="my-4 fs-2 border-bottom pb-2"
        style={{ color: myTogglemenu ? "#10f0fc" : "" }}
      >
        {"< Contact Me />"}
      </h2>
      <h6
        style={{
          color: myTogglemenu ? "#f2f2f2" : "",
        }}
        className="Intro-text mt-2 mb-6"
      >
        Have a project in mind or just want to chat about web development? Don't
        hesitate to reach out. I'm always eager to connect with fellow
        enthusiasts and potential collaborators. Feel free to send me a message
        or connect with me on social media. I look forward to hearing from you
        and discussing how we can bring your web development ideas to life!
      </h6>
      {showSuccessMessage && (
        <h5 className="text-success">
          {state.succeeded ? "Message has been sent successfully!" : ""}
        </h5>
      )}
      <div className="contactus-container d-flex align-items-center justify-content-center">
        <div className="conatct-us-image-container w-50">
          <img
            data-aos="flip-left"
            data-aos-duration="800"
            src={ContactUS}
            className="img-fluid"
            alt="Contac_us"
          />
        </div>
        <div className="contactus-form-container w-75">
          <form
            data-aos="flip-right"
            data-aos-duration="800"
            className="row g-3"
            onSubmit={handleSubmit}
          >
            <div className="col-md-6">
              <input
                type="text"
                autoComplete="off"
                name="firstname"
                className={`form-control shadow ${myTogglemenu ? "dark-textarea" : ""}`}
                placeholder="First name"
                style={{
                  backgroundColor: myTogglemenu ? "#27282f" : "",
                  color: myTogglemenu ? "#f2f2f2" : "",
                }}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                autoComplete="off"
                name="lastname"
                className={`form-control shadow ${myTogglemenu ? "dark-textarea" : ""}`}
                placeholder="Last name"
                style={{
                  backgroundColor: myTogglemenu ? "#27282f" : "",
                  color: myTogglemenu ? "#f2f2f2" : "",
                }}
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                autoComplete="off"
                name="email"
                className={`form-control shadow ${myTogglemenu ? "dark-textarea" : ""}`}
                placeholder="Enter Your Email address"
                id="inputEmail4"
                style={{
                  backgroundColor: myTogglemenu ? "#27282f" : "",
                  color: myTogglemenu ? "#f2f2f2" : "",
                }}
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                autoComplete="off"
                className={`form-control shadow ${myTogglemenu ? "dark-textarea" : ""}`}
                placeholder="Message Field"
                rows="3"
                style={{
                  backgroundColor: myTogglemenu ? "#27282f" : "",
                  color: myTogglemenu ? "#f2f2f2" : "",
                }}
              ></textarea>
            </div>
            <div className="col-12">
              <button
                style={{
                  backgroundColor: myTogglemenu ? "#10f0fc" : "#10637d",
                  color: myTogglemenu ? "#27282f" : "#f2f2f2",
                }}
                type="submit"
                disabled={state.submitting}
                className="btn btn-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
