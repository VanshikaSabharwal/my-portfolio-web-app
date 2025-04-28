"use client";
import { useState, useEffect } from "react";
import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaHackerrank,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMobile,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import {
  SiLeetcode,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiFigma,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

// Define types for X and LinkedIn posts
type Post = {
  id: number;
  platform: string;
  image: string;
  link: string;
};

// Define skill category type
type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

// Define skill type
type Skill = {
  name: string;
  icon: React.ReactNode;
  proficiency: number; // 1-5
};

const About = () => {
  const [xPosts, setXPosts] = useState<Post[]>([]);
  const [linkedinPosts, setLinkedinPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  // Skills data
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <FaCode className="w-5 h-5" />,
      skills: [
        { name: "React", icon: <SiReact />, proficiency: 5 },
        { name: "Next.js", icon: <SiNextdotjs />, proficiency: 4 },
        { name: "JavaScript", icon: <SiJavascript />, proficiency: 5 },
        { name: "TypeScript", icon: <SiTypescript />, proficiency: 4 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, proficiency: 4 },
      ],
    },
    {
      name: "Backend",
      icon: <FaServer className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, proficiency: 4 },
        { name: "Python", icon: <SiPython />, proficiency: 3 },
        { name: "Express", icon: <SiNodedotjs />, proficiency: 4 },
      ],
    },
    {
      name: "Database",
      icon: <FaDatabase className="w-5 h-5" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 4 },
        { name: "PostGresQL", icon: <SiPostgresql />, proficiency: 3 },
        { name: "Supabase", icon: <SiSupabase />, proficiency: 3 },
        { name: "SQL", icon: <FaDatabase />, proficiency: 3 },
      ],
    },
    {
      name: "Tools",
      icon: <FaTools className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: <SiGit />, proficiency: 5 },
        { name: "Docker", icon: <SiDocker />, proficiency: 3 },
        { name: "Figma", icon: <SiFigma />, proficiency: 4 },
      ],
    },
    {
      name: "Mobile",
      icon: <FaMobile className="w-5 h-5" />,
      skills: [{ name: "React Native", icon: <SiReact />, proficiency: 3 }],
    },
  ];

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
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-16 bg-[#D8C7B4] text-gray-300">
      <div className="max-w-4xl w-full bg-[#D8C7B4] border border-gray-800 rounded-lg shadow-2xl p-6 md:p-8 overflow-hidden">
        {/* Skills Tree Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black mb-6">My Skills</h2>

          {/* Skills Tree */}
          <div className="skills-tree">
            {/* Categories Navigation */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              {skillCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    activeCategory === category.name
                      ? "bg-[#f5deb3]/20 text-black border border-black"
                      : "bg-black border border-gray-700 hover:border-black"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Visualization */}
            <div className="relative rounded-lg p-6 ">
              {/* Tree Trunk */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#f5deb3]/20 hidden md:block"></div>

              {/* Skills List */}
              <div className="space-y-8">
                {skillCategories
                  .find((category) => category.name === activeCategory)
                  ?.skills.map((skill, index) => (
                    <div key={skill.name} className="relative">
                      {/* Tree Branch (desktop only) */}
                      <div className="absolute left-8 top-1/2 w-8 h-0.5 bg-[#f5deb3]/20 -translate-y-1/2 hidden md:block"></div>

                      {/* Skill Item */}
                      <div className="md:ml-20 flex flex-col bg-[#2D2D2D] md:flex-row md:items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-[#f5deb3]/30 transition-all">
                        {/* Skill Icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f5deb3]/10 text-[#f5deb3]">
                          {skill.icon}
                        </div>

                        <div className="flex-1">
                          {/* Skill Name */}
                          <h3 className="text-lg font-medium text-[#F4E8D4]">
                            {skill.name}
                          </h3>

                          {/* Proficiency Bar */}
                          <div className="w-full rounded-full h-2.5 mt-2">
                            <div
                              className="bg-[#F4E8D4] h-2.5 rounded-full"
                              style={{
                                width: `${(skill.proficiency / 5) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <ul className="flex flex-wrap justify-center mt-8 space-y-4 md:space-y-0 space-x-6">
          <li>
            <Link href="mailto:vanshikasabharwal03@gmail.com">
              <span className="text-sm md:text-lg hover:underline hover:text-[#2D2D2D] text-black transition-colors duration-300">
                vanshikasabharwal03@gmail.com
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/vanshikasabharwal0006/">
              <FaLinkedin className="text-3xl hover:text-[#2D2D2D] text-black transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/Vanshika_0006">
              <RiTwitterXFill className="text-3xl hover:text-[#2D2D2D] text-black transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/VanshikaSabharwal">
              <IoLogoGithub className="text-3xl hover:text-[#2D2D2D] text-black transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://www.hackerrank.com/profile/vanshikasabharw1">
              <FaHackerrank className="text-3xl hover:text-[#2D2D2D] text-black transition duration-300" />
            </Link>
          </li>
          <li>
            <Link href="https://leetcode.com/u/vanshika__sabharwal/">
              <SiLeetcode className="text-3xl hover:text-[#2D2D2D] text-black transition duration-300" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
