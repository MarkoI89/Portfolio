import NavBar from "../../components/navBar/NavBar";
import "./contact.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageWarning, setMessageWarning] = useState(null);
  const [messageSent, setMessageSent] = useState(null);
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [messageError, setMessageError] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const form = useRef();

  const handleNameField = (e) => {
    setName(e.target.value);
    if (name !== "") {
      setNameError(false);
    } else {
      setNameError(false);
    }
  };

  const handleEmailField = (e) => {
    setEmail(e.target.value);
    if (email !== "") {
      setEmailError(false);
    } else {
      setEmailError(false);
    }
  };
  const handleMessageField = (e) => {
    setMessage(e.target.value);
    if (message !== "") {
      setMessageError(false);
    } else {
      setMessageError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameError || emailError || messageError) {
      setShowErrorMessage(true);
      return;
    } else {
      // setMessageWarning(null);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            setMessageSent(true);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contactPage">
      <NavBar />
      <div className="contactForm">
        <div className="description">
          <h2>Contact</h2>
          <hr />
          <h4>Fill the form below if you have any question or offer.</h4>
        </div>
        {/* {messageWarning && (
            <p style={{ color: "red" }}>All the fields are required</p>
          )} */}
        {messageSent && (
          <p style={{ color: "#42db55" }}>Message has been sent</p>
        )}
        <form className="form" ref={form} onSubmit={handleSubmit}>
          {nameError && showErrorMessage && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
          <input
            placeholder="Name"
            type="text"
            onChange={handleNameField}
            name="name"
            className={nameError && showErrorMessage ? "inputError" : "input" }
          />
          {emailError && showErrorMessage && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
          <input
            placeholder="Email"
            type="text"
            onChange={handleEmailField}
            name="email"
            className={emailError && showErrorMessage ? "inputError" : "input" }
          />
          {messageError && showErrorMessage && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
          <textarea
            placeholder="Message"
            type="text"
            rows="10"
            onChange={handleMessageField}
            name="message"
            className={messageError && showErrorMessage ? "textInputError" : "textInput" }
          />
          <button className="submitForm">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
