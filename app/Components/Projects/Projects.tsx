"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import projectData from "../../../projects.json";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [projectImages, setProjectImages] = useState<any[]>([]);

  const openModal = (images: any) => {
    setProjectImages(images);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) =>
        (prevImage - 1 + projectImages.length) % projectImages.length
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-[#D8C7B4] text-gray-300">
      <h1 className="text-center text-4xl font-bold mb-4 text-black">
        Projects
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#2D2D2D] text-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center border-2 border-[#f5deb3] border-dashed"
          >
            <Image
              src={project.imageUrls[0]}
              alt={`${project.name} Project`}
              width={300}
              height={200}
              className="rounded-lg cursor-pointer"
              onClick={() => openModal(project.imageUrls)}
            />
            <h2 className="text-2xl font-bold mt-4 text-[#f5deb3]">
              {project.name}
            </h2>
            <p className="text-gray-300 mt-2 text-center">
              {project.description}
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href={project.liveUrl}>
                <TiArrowRightThick className="text-[#F4E8D4] hover:text-[#f32170] transition duration-300 text-2xl" />
              </Link>
              <Link href={project.githubUrl}>
                <IoLogoGithub className="text-[#F4E8D4] hover:text-[#f32170] transition duration-300 text-2xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="relative bg-black text-gray-300 p-6 rounded-lg max-w-2xl w-full mx-auto">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-300 hover:text-gray-500"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
            <Image
              src={projectImages[currentImage]}
              alt="Project Image"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevImage}
                className="text-gray-300 text-2xl hover:text-[#f32170]"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="text-gray-300 text-2xl hover:text-[#f32170]"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
