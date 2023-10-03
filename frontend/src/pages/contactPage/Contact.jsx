import NavBar from "../../components/navBar/NavBar";
import "./contact.css";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { colors } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageWarning, setMessageWarning] = useState(null);
  const [messageSent, setMessageSent] = useState(null);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setMessageSent(null);
      setMessageWarning(true);
      return;
    } else {
      setMessageWarning(null);
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
        {messageWarning && (
            <p style={{ color: "red" }}>All the fields are required</p>
          )}
          {messageSent && <p style={{color: "#42db55"}} >Message has been sent</p>}
        <form className="form" ref={form} onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <input
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <textarea
            placeholder="Message"
            type="text"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
          <button className="submitForm">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
