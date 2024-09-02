import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";

import Link from "next/link";

const services = () => {
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
      </div>
    </div>
  );
};

export default services;
