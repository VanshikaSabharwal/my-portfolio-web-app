"use client";
import React from "react";
import Image from "next/image";
import { TiArrowRightThick } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io5";

const projects = () => {
  return (
    <div className="projectContainer grid md:grid-cols-2 md:grid-rows-2">
      <div className="project">
        <Image
          src="/images/bakery-website.png"
          alt="project"
          width={100}
          height={100}
        />
        <h1>Bakery Website</h1>
        <p>
          A website to meet the desire of exploring cakes and other bakery items
          from anywhere, anytime.
        </p>
        <div className="project-links">
          <a href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
            <TiArrowRightThick />
          </a>

          <a href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
            <IoLogoGithub />
          </a>
        </div>
      </div>
      <div className="project">
        <Image
          src="/images/bakery-website.png"
          alt="project"
          width={100}
          height={100}
        />
        <h1>Bakery Website</h1>
        <p>
          A website to meet the desire of exploring cakes and other bakery items
          from anywhere, anytime.
        </p>
        <div className="project-links">
          <a href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
            <TiArrowRightThick />
          </a>

          <a href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
            <IoLogoGithub />
          </a>
        </div>
      </div>
      <div className="project">
        <Image
          src="/images/bakery-website.png"
          alt="project"
          width={100}
          height={100}
        />
        <h1>Bakery Website</h1>
        <p>
          A website to meet the desire of exploring cakes and other bakery items
          from anywhere, anytime.
        </p>
        <div className="project-links">
          <a href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
            <TiArrowRightThick />
          </a>

          <a href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
            <IoLogoGithub />
          </a>
        </div>
      </div>
      <div className="project">
        <Image
          src="/images/bakery-website.png"
          alt="project"
          width={100}
          height={100}
        />
        <h1>Bakery Website</h1>
        <p>
          A website to meet the desire of exploring cakes and other bakery items
          from anywhere, anytime.
        </p>
        <div className="project-links">
          <a href="https://vanshikasabharwal.github.io/bakeryWebsite-V1/">
            <TiArrowRightThick />
          </a>

          <a href="https://github.com/VanshikaSabharwal/bakeryWebsite-V1">
            <IoLogoGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default projects;
