import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="contactContainer">
      <div className="contactme">
        <h1 className="text-lg contact-title">Contact Me</h1>
      </div>
      <div className="form">
        <form action="">
          <div className="nameForm">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div className="emailForm">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's Talk"
            ></textarea>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default page;
