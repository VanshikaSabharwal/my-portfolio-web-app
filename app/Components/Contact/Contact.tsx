import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="contactme">
      <h1>You can Contact me on :-</h1>
      <ul className="flex items-center justify-center">
        <li className="mr-4">
          Email:{" "}
          <a href="mailto:your-email@gmail">vanshikasabharwal03@gmail.com</a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/vanshika-sabharwal-867237284/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://x.com/Vanshika_0006">
            <RiTwitterXFill />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
