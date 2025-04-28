"use client";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    setStatus(null);

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16 bg-[#D8C7B4] text-[#2D2D2D]">
      <div className="max-w-4xl mx-auto bg-[#F4E8D4] border border-black rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#2D2D2D]">Contact Me</h1>
        </div>
        <div className="space-y-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg font-semibold mb-2 text-[#2D2D2D]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="p-3 border border-[#D8C7B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4E8D4] transition duration-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg font-semibold mb-2 text-[#2D2D2D]"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="p-3 border border-[#D8C7B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4E8D4] transition duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-lg font-semibold mb-2 text-[#2D2D2D]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Let's Talk"
                className="p-3 border border-[#D8C7B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4E8D4] transition duration-300 h-32 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F4E8D4] text-[#2D2D2D] py-3 rounded-lg border border-black hover:bg-[#D8C7B4] transition duration-300"
            >
              Submit
            </button>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
          <div className="flex justify-center space-x-6 mt-6">
            <Link
              href="https://www.linkedin.com/in/--vanshika--/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:text-[#005582] transition duration-300"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link
              href="https://x.com/Vanshika_0006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1da1f2] hover:text-[#0d95e8] transition duration-300"
            >
              <RiTwitterXFill className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
