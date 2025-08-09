import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-slate-900 text-white font-sans">

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto text-center py-20 px-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/assets/profile-optimized.png"
          alt="Umme Ayman Z"
          className="w-36 h-36 rounded-full mx-auto border-4 border-sky-400 shadow-lg shadow-sky-500/40"
        />
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mt-6"
        >
          Umme Ayman Z
        </motion.h1>
        <p className="text-lg text-sky-300 mt-2">
          AI & Full-Stack Developer | Building Intelligent Solutions
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="mailto:zumme2003@gmail.com" className="hover:text-sky-400">📧</a>
          <a href="https://github.com/Umme-2003" target="_blank" rel="noreferrer" className="hover:text-sky-400">💻</a>
          <a href="https://www.linkedin.com/in/umme-ayman-z-b5b5b9290/" target="_blank" rel="noreferrer" className="hover:text-sky-400">🔗</a>
        </div>
      </header>

      {/* Achievements */}
      <section className="bg-slate-800 py-6 text-center shadow-lg">
        Featured in{" "}
        <a
          href="https://www.dqindia.com/an-all-girls-teams-innovative-iot-solution-at-piwot-23-hackathon/"
          target="_blank"
          rel="noreferrer"
          className="text-sky-300 hover:underline"
        >
          DataQuest India
        </a>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 border-b border-sky-500 inline-block">Experience</h2>
        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">WOmanHood</h3>
            <a
              href="https://gilded-pudding-d03def.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-300 hover:underline"
            >
              Live Project →
            </a>
            <p className="mt-2 text-gray-300">
              A platform empowering women with resources and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 border-b border-sky-500 inline-block">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "InvestLens",
              desc: "AI-driven investment research platform.",
              code: "https://github.com/Umme-2003/InvestLens",
              demo: "https://vimeo.com/1104897778"
            },
            { name: "AlgbrAI", desc: "AI-powered algebra solver and tutor.", code: "https://github.com/Umme-2003/AlgbrAI" },
            { name: "Cogito", desc: "AI-driven knowledge management system.", code: "https://github.com/Umme-2003/Cogito" }
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-sky-500/30 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm mb-4 text-gray-300">{p.desc}</p>
              <a href={p.code} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">
                Source Code →
              </a>
              {p.demo && <> | <a href={p.demo} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">Live Demo →</a></>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 border-b border-sky-500 inline-block">Contact</h2>
        <p className="text-gray-300 mb-6">
          Let’s collaborate or discuss exciting projects!
        </p>
        <form name="contact" method="POST" data-netlify="true" className="max-w-md mx-auto">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" className="w-full mb-4 p-3 rounded bg-slate-700" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full mb-4 p-3 rounded bg-slate-700" required />
          <textarea name="message" placeholder="Your Message" className="w-full mb-4 p-3 rounded bg-slate-700" rows="4" required></textarea>
          <button type="submit" className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg shadow-md">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-sky-200 border-t border-sky-500/30">
        © {new Date().getFullYear()} Umme Ayman Z — Built with ❤️
      </footer>
    </div>
  );
}
