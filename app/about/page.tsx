import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="aboutContainer items-center justify-center md:1/2 bg-about ">
        <div className="grid grid-rows-1 grid-cols-2 xs:grid-cols-none xs:flex xs:grid-rows-none items-center justify-center">
          <div className="bgContent">
            <h1 className="text-3xl font-bold text-black">About Me</h1>
            <p className="text-black">
              I am a software developer with a passion for creating innovative
              and user-friendly applications. I have a strong background in
              computer science and a keen eye for detail. I am always looking
              for new challenges and opportunities to learn and grow as a
              developer.
            </p>
          </div>
          <div className="about-my-img hidden md:block">
            <Image
              src="/images/my-about-img.png"
              alt="my profile image"
              width={550}
              height={350}
            />
          </div>
        </div>
        <ul className="flex flex-col items-center justify-center about-contact-section">
          <li>
            <a href="mailto:vanshikasabharwal03@gmail" className="text-sm">
              vanshikasabharwal03@gmail.com
            </a>
          </li>
          <div className="socialLinks">
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
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
