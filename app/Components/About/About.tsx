import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-[#f0f4f8] text-gray-900">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 md:p-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-[#f32170]">About Me</h1>
            <p className="text-lg leading-relaxed text-gray-700">
              I am a software developer with a passion for creating innovative
              and user-friendly applications. I have a strong background in
              computer science and a keen eye for detail. I am always looking
              for new challenges and opportunities to learn and grow as a
              developer.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full md:w-auto max-w-xs">
              <Image
                src="/images/my-about-img.png"
                alt="my profile image"
                width={550}
                height={350}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center mt-8 space-y-4 md:space-y-0 space-x-6">
          <li>
            <Link href="mailto:vanshikasabharwal03@gmail.com">
              <span className="text-sm md:text-lg hover:underline text-[#333]">
                vanshikasabharwal03@gmail.com
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/vanshikasabharwal0006/">
              <FaLinkedin className="text-3xl hover:text-[#0077b5] transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/Vanshika_0006">
              <RiTwitterXFill className="text-3xl hover:text-[#1da1f2] transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/VanshikaSabharwal">
              <IoLogoGithub className="text-3xl hover:text-[#333] transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://www.hackerrank.com/profile/vanshikasabharw1">
              <FaHackerrank className="text-3xl hover:text-[#2ece5d] transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://leetcode.com/u/vanshika__sabharwal/">
              <SiLeetcode className="text-3xl hover:text-[#f14e5b] transition duration-300" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
