"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Define types for X and LinkedIn posts
type Post = {
  id: number;
  platform: string;
  image: string;
  link: string;
};

const About = () => {
  const [xPosts, setXPosts] = useState<Post[]>([]);
  const [linkedinPosts, setLinkedinPosts] = useState<Post[]>([]);

  // Fetch posts data
  useEffect(() => {
    // Fetch X posts
    fetch("/x.json")
      .then((response) => response.json())
      .then((data) => setXPosts(data))
      .catch((error) => console.error("Error fetching X posts:", error));

    // Fetch LinkedIn posts
    fetch("/linkedin.json")
      .then((response) => response.json())
      .then((data) => setLinkedinPosts(data))
      .catch((error) => console.error("Error fetching LinkedIn posts:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-[#D8C7B4] text-gray-300">
      <div className="max-w-4xl w-full bg-[#2D2D2D] border-2 border-[#f5deb3] border-dashed rounded-lg shadow-2xl p-6 md:p-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-[#f5deb3]">About Me</h1>
            <p className="text-lg leading-relaxed text-gray-300">
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
                className=" w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <ul className="flex flex-wrap justify-center mt-8 space-y-4 md:space-y-0 space-x-6">
          <li className="w-full text-center mb-2">
            <Link href="mailto:vanshikasabharwal03@gmail.com">
              <span className="text-sm md:text-lg hover:underline text-gray-300 hover:text-[#f5deb3] transition-colors duration-300">
                vanshikasabharwal03@gmail.com
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/--vanshika--/">
              <FaLinkedin className="text-3xl hover:text-[#0077b5] transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/Vanshika_0006">
              <RiTwitterXFill className="text-3xl text-gray-400 hover:text-[#1da1f2] transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/VanshikaSabharwal">
              <IoLogoGithub className="text-3xl text-gray-400 hover:text-white transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://www.hackerrank.com/profile/vanshikasabharw1">
              <FaHackerrank className="text-3xl text-gray-400 hover:text-[#2ece5d] transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://leetcode.com/u/vanshika__sabharwal/">
              <SiLeetcode className="text-3xl text-gray-400 hover:text-[#f14e5b] transition duration-300" />
            </Link>
          </li>
        </ul>
      </div>
      {/* Posts Section */}
      <div className="mt-12 w-full max-w-4xl">
        {/* <h2 className="text-3xl font-bold text-[#f5deb3] text-center mb-6">
          My Posts
        </h2> */}

        {/* LinkedIn Posts */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center text-black mb-4">
            LinkedIn Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {linkedinPosts.map((post) => (
              <Link key={post.id} href={post.link} passHref>
                <div className="cursor-pointer border border-[#0077b5]/30 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt="LinkedIn Post"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:opacity-90 transition duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* X Posts */}
        <div>
          <h3 className="text-xl font-semibold text-center text-black mb-4">
            X Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {xPosts.map((post) => (
              <Link key={post.id} href={post.link} passHref>
                <div className="cursor-pointer border border-[#1da1f2]/30 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt="X Post"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md hover:opacity-90 transition duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
