import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-purple-800 to-pink-700 min-h-screen text-white font-sans">
      {/* Hero */}
      <header className="text-center py-20">
        <img
          src="/assets/profile-optimized.png"
          alt="Umme Ayman"
          className="w-32 h-32 rounded-full mx-auto border-4 border-pink-400 shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">Umme Ayman Z</h1>
        <p className="text-lg text-pink-200">AI & Full-Stack Developer</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:ummezainab2003@gmail.com">📧</a>
          <a href="https://github.com/Umme-2003" target="_blank" rel="noreferrer">💻</a>
          <a href="https://www.linkedin.com/in/umme-ayman/" target="_blank" rel="noreferrer">🔗</a>
        </div>
      </header>

      {/* Projects */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Cogito", desc: "AI-driven knowledge management system.", code: "https://github.com/Umme-2003/Cogito" },
            { name: "AlgbrAI", desc: "AI-powered algebra solver and tutor.", code: "https://github.com/Umme-2003/AlgbrAI" },
            { name: "InvestLens", desc: "AI-driven investment research platform.", code: "https://github.com/Umme-2003/InvestLens", demo: "https://vimeo.com/1104897778" },
            { name: "WOmanhood", desc: "Web platform for women empowerment resources.", live: "https://gilded-pudding-d03def.netlify.app/" }
          ].map((p, i) => (
            <div key={i} className="bg-purple-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm mb-4">{p.desc}</p>
              {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="text-pink-300 hover:underline">Source Code →</a>}
              {p.demo && <> | <a href={p.demo} target="_blank" rel="noreferrer" className="text-pink-300 hover:underline">Demo →</a></>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-pink-300 hover:underline">Live Site →</a>}
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Featured</h2>
        <div className="bg-purple-800 rounded-lg p-6 shadow-md text-center">
          Featured in{" "}
          <a
            href="https://www.dqindia.com/an-all-girls-teams-innovative-iot-solution-at-piwot-23-hackathon/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-300 hover:underline"
          >
            Dataquest India
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-pink-200">
        © {new Date().getFullYear()} Umme Ayman Z — Built with ❤️
      </footer>
    </div>
  );
}
