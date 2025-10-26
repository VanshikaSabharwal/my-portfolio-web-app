"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const blog = {
      title,
      description,
      author: "Vanshika Sabharwal",
      date: new Date().toISOString().split("T")[0],
    };

    const res = await fetch("/api/createblog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });

    if (res.ok) {
      alert("Blog Created");
      setTitle("");
      setDescription("");
    } else {
      alert("Error saving blog");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add a New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium text-lg">Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium text-lg">Description (Markdown Supported)</label>
            <textarea
              placeholder="Write your blog here using paragraphs, lists, links..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-80 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg"
          >
            Save Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
