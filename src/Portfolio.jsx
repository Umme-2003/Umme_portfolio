import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-slate-900 text-white font-sans">
      
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto text-center py-20 px-4">
        <img
          src="/assets/profile-optimized.png"
          alt="Umme Ayman"
          className="w-36 h-36 rounded-full mx-auto border-4 border-sky-400 shadow-lg shadow-sky-500/40"
        />
        <h1 className="text-5xl font-bold mt-6">Umme Ayman Z</h1>
        <p className="text-lg text-sky-300 mt-2">
          AI & Full-Stack Developer | Building Intelligent Solutions
        </p>
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="mailto:zumme2003@gmail.com" className="hover:text-sky-400">📧</a>
          <a href="https://github.com/Umme-2003" target="_blank" rel="noreferrer" className="hover:text-sky-400">💻</a>
          <a href="https://www.linkedin.com/in/umme-ayman-z-b5b5b9290/" target="_blank" rel="noreferrer" className="hover:text-sky-400">🔗</a>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4 border-b border-sky-500 inline-block">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a passionate AI and full-stack developer with experience in designing intelligent 
          systems, building scalable web applications, and integrating AI into real-world solutions. 
          My mission is to create impactful projects that blend creativity with cutting-edge tech.
        </p>
      </section>

      {/* Experience Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 border-b border-sky-500 inline-block">Experience</h2>
        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">AI Project Intern - XYZ Company</h3>
            <p className="text-sky-300 text-sm">Jan 2024 - Apr 2024</p>
            <p className="mt-2 text-gray-300">
              Developed AI-powered data analysis tools to enhance decision-making. Improved 
              model accuracy by 15% using advanced preprocessing techniques.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Full-Stack Developer - ABC Startup</h3>
            <p className="text-sky-300 text-sm">May 2023 - Dec 2023</p>
            <p className="mt-2 text-gray-300">
              Built responsive web platforms with React, Node.js, and MongoDB, integrating 
              APIs and ensuring optimized performance for 10k+ monthly users.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 border-b border-sky-500 inline-block">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Cogito", desc: "AI-driven knowledge management system.", code: "https://github.com/Umme-2003/Cogito" },
            { name: "AlgbrAI", desc: "AI-powered algebra solver and tutor.", code: "https://github.com/Umme-2003/AlgbrAI" },
            { name: "InvestLens", desc: "AI-driven investment research platform.", code: "https://github.com/Umme-2003/InvestLens", demo: "https://vimeo.com/1104897778" },
            { name: "WOmanhood", desc: "Web platform for women empowerment resources.", live: "https://gilded-pudding-d03def.netlify.app/" }
          ].map((p, i) => (
            <div key={i} className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-sky-500/30 transition">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm mb-4 text-gray-300">{p.desc}</p>
              {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">Source Code →</a>}
              {p.demo && <> | <a href={p.demo} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">Demo →</a></>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">Live Site →</a>}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 border-b border-sky-500 inline-block">Featured</h2>
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg text-center">
          Featured in{" "}
          <a
            href="https://www.dqindia.com/an-all-girls-teams-innovative-iot-solution-at-piwot-23-hackathon/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-300 hover:underline"
          >
            Dataquest India
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 border-b border-sky-500 inline-block">Contact</h2>
        <p className="text-gray-300 mb-6">
          Let’s collaborate or discuss exciting projects!
        </p>
        <a
          href="mailto:zumme2003@gmail.com"
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg shadow-md"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-sky-200 border-t border-sky-500/30">
        © {new Date().getFullYear()} Umme Ayman Z — Built with ❤️
      </footer>
    </div>
  );
}
