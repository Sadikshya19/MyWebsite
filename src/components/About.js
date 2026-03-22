import { useState } from "react";

const projects = [
 
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 font-serif text-gray-900">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .nav-link {
          position: relative;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: #555;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #111;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #111; }
        .nav-link.active { color: #111; font-weight: 500; }
        .nav-link.active::after { width: 100%; }
        .project-card {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tag-badge {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.4rem;
          letter-spacing: -0.01em;
        }
        .image-stack {
          position: relative;
          width: 420px;
          height: 360px;
        }
        .image-stack .img-back {
          position: absolute;
          top: 0;
          right: 0;
          width: 340px;
          height: 260px;
          background: #d1d5db;
        }
        .image-stack .img-main {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 310px;
          height: 290px;
          object-fit: cover;
          z-index: 2;
        }
        .image-stack .img-tag {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 140px;
          height: 115px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-dash {
          display: inline-block;
          width: 2.5rem;
          height: 3px;
          background: #111;
          margin-right: 0.5rem;
          vertical-align: middle;
          margin-bottom: 4px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.7s ease both; }
        .animate-fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
        .animate-fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }

      `}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-purple-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Desktop left links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="nav-link active">About</a>
          </div>

          {/* Logo — always visible */}
          <a href="#" className="font-display text-base font-bold tracking-widest uppercase text-gray-900">
            Sadikshya Shrestha
          </a>

          {/* Desktop right links */}
          <div className="hidden md:flex items-center gap-6">
            {/* <a href="#about" className="nav-link">About</a> */}
            <a href="https://www.linkedin.com/in/sadikshya-shrestha-78a30a205" className="nav-link text-xs">LinkedIn</a>
            <a href="https://github.com/Sadikshya19/" className="nav-link text-xs">GitHub</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <a href="#" className="nav-link active" onClick={() => setMenuOpen(false)}>About</a>
            <a href="https://www.linkedin.com/in/sadikshya-shrestha-78a30a205" className="nav-link text-xs">LinkedIn</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION*/}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center animate-fade-up">
        <h1 className="font-display text-1xl md:text-1xl lg:text-2xl leading-tight text-gray-900">
        I am a Software Engineer with hands-on experience in developing web applications. 
        I have worked with ASP.NET, C#, and MS SQL Server for backend development, 
        as well as React and other JavaScript Frameworks for building modern, responsive interfaces. 
        I am passionate about building scalable and efficient software applications.
        </h1>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="border-t border-gray-200"></div>
      </div>

    {/* FOOTER */}
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-50 border-t border-gray-100 py-4">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
    <p className="font-display text-sm italic text-gray-400">Sadikshya © 2026</p>
    <div className="flex gap-6">
        <div className="flex items-center gap-2 text-gray-600">
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="2" d="M21 8l-9 6-9-6M3 6h18v12H3z" />
  </svg>
  <div className="text-base">sadikshya12b@gmail.com</div>
</div>
    </div>
    </div>
    </footer>

{/* Bottom padding so content isn't hidden behind fixed footer */}
<div className="h-25" />
    </div>
  );
}