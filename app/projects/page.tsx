"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io5";

const Projects = () => {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-[#f0f4f8] text-gray-900">
      <h1 className="text-center text-4xl font-bold mb-4 text-[#f32170]">
        Projects
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image
            src="/images/hotel-management.png"
            alt="Bakery Website Project"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 text-[#f32170]">
            Hotel-Management-Web-App
          </h2>
          <p className="text-gray-700 mt-2 text-center">
            A website to meet the desire of exploring cakes and other bakery
            items from anywhere, anytime.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
              <TiArrowRightThick className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
            <Link href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
              <IoLogoGithub className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image
            src="/images/v_wallet.png"
            alt="Bakery Website Project"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 text-[#f32170]">
            V-Wallet-Web-App
          </h2>
          <p className="text-gray-700 mt-2 text-center">
            V Wallet is a web app inspired by Paytm, offering secure and
            seamless peer-to-peer payments and fund management.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
              <TiArrowRightThick className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
            <Link href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
              <IoLogoGithub className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image
            src="/images/nintendo-clone.png"
            alt="Bakery Website Project"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 text-[#f32170]">
            Nintendo-Clone-Web-App
          </h2>
          <p className="text-gray-700 mt-2 text-center">
            Nintendo Clone Web App is a web app inspired by the official
            Nintendo app, providing features for managing and exploring Nintendo
            games.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
              <TiArrowRightThick className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
            <Link href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
              <IoLogoGithub className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <Image
            src="/images/bakery-website.png"
            alt="Bakery Website Project"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 text-[#f32170]">
            Bakery Website
          </h2>
          <p className="text-gray-700 mt-2 text-center">
            A website to meet the desire of exploring cakes and other bakery
            items from anywhere, anytime.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
              <TiArrowRightThick className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
            <Link href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
              <IoLogoGithub className="text-[#cf23cf] hover:text-[#f32170] transition duration-300 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
