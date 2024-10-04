import { SiLeetcode } from "react-icons/si";
import { FaHackerrank, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";
import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-[#f0f4f8] text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#f32170]">
        My Services & Profiles
      </h1>
      <p className="text-center mb-12 text-lg text-gray-700">
        Explore my profiles and services below. Click on the icons to learn more
        or get in touch with me.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* LeetCode */}
        <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <Link href="https://leetcode.com/u/0rxMRmM6UV/">
            <SiLeetcode className="text-4xl text-[#f14e5b] mb-2" />
            <p className="text-sm font-semibold">LeetCode</p>
          </Link>
        </div>

        {/* HackerRank */}
        <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <Link href="https://www.hackerrank.com/profile/vanshikasabharw1">
            <FaHackerrank className="text-4xl text-green-500 mb-2" />
            <p className="text-sm font-semibold">HackerRank</p>
          </Link>
        </div>

        {/* GitHub */}
        <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <Link href="https://github.com/VanshikaSabharwal">
            <IoLogoGithub className="text-4xl text-gray-800 mb-2" />
            <p className="text-sm font-semibold">GitHub</p>
          </Link>
        </div>

        {/* Fiverr */}
        <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <Link href="https://www.fiverr.com/vanshika200000">
            <TbBrandFiverr className="text-4xl text-green-600 mb-2" />
            <p className="text-sm font-semibold">Fiverr</p>
          </Link>
        </div>

        {/* Upwork */}
        <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <Link href="https://www.upwork.com/freelancers/~0119b5c2cd48443fed">
            <FaSquareUpwork className="text-4xl text-blue-600 mb-2" />
            <p className="text-sm font-semibold">Upwork</p>
          </Link>
        </div>

        {/* LinkedIn */}
        <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <Link href="https://www.linkedin.com/in/vanshika-sabharwal-867237284/">
            <FaLinkedin className="text-4xl text-blue-700 mb-2" />
            <p className="text-sm font-semibold">LinkedIn</p>
          </Link>
        </div>

        {/* X (formerly Twitter) */}
        <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <Link href="https://x.com/Vanshika_0006">
            <RiTwitterXFill className="text-4xl text-blue-500 mb-2" />
            <p className="text-sm font-semibold">X.com</p>
          </Link>
        </div>
      </div>

      {/* Skill Tree Section */}
      <div className="mt-16">
        <div className="flex flex-col items-center">
          {/* Full Stack Development */}
          <div className="w-full flex justify-center">
            <div className="p-4 bg-white shadow-lg rounded-lg text-center">
              <p className="font-bold text-lg">Full Stack Development</p>
            </div>
          </div>

          {/* Branches: Frontend, Backend, DevOps */}
          <div className="flex justify-around mt-6 w-full max-w-xl">
            {/* Frontend */}
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white shadow-md rounded-lg text-center">
                <p className="font-semibold">Frontend</p>
              </div>
              <ul className="mt-4 space-y-2 text-center">
                <li>React.js</li>
                <li>Redux</li>
                <li>Recoil</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white shadow-md rounded-lg text-center">
                <p className="font-semibold">Backend</p>
              </div>
              <ul className="mt-4 space-y-2 text-center">
                <li>Node.js</li>
                <li>Express</li>
                <li>Prisma</li>
                <li>Postgres</li>
                <li>AWS</li>
                <li>GraphQL</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white shadow-md rounded-lg text-center">
                <p className="font-semibold">DevOps</p>
              </div>
              <ul className="mt-4 space-y-2 text-center">
                <li>Dockerization</li>
                <li>Kubernetes</li>
                <li>Terraform</li>
                <li>Helm</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
