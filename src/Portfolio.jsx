import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-purple-800 to-pink-700 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <header className="text-center py-20">
        <img
          src="/assets/profile-optimized.png"
          alt="Umme Ayman"
          className="w-32 h-32 rounded-full mx-auto border-4 border-pink-400 shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">Umme Ayman Z</h1>
        <p className="text-lg text-pink-200 mt-2">AI & Full-Stack Developer</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="mailto:ummezainab2003@gmail.com"
            className="hover:text-pink-300"
          >
            📧
          </a>
          <a
            href="https://github.com/Umme-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            💻
          </a>
          <a
            href="https://www.linkedin.com/in/umme-ayman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            🔗
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Cogito */}
          <div className="bg-purple-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Cogito</h3>
            <p className="text-sm mb-4">
              AI-driven knowledge management system.
            </p>
            <a
              href="https://github.com/Umme-2003/Cogito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:underline"
            >
              Source Code →
            </a>
          </div>

          {/* AlgbrAI */}
          <div className="bg-purple-800 rounded-lg p-6 shadow-md">
            <h3 className
