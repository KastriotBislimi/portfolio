import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

import "./contact.css";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wvl5sb",
        "template_n2m4sl9",
        form.current,
        "zJzPWOPLE4rb6WKyP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Mail received. I will reach out to you ASAP!");

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>k.bislimi96@gmail.com</h5>
            <a
              href="mailto:k.bislimi96@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+38345641938</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+38345641938"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
