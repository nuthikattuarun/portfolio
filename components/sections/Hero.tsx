
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/common/Icons";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot" />
          Available for opportunities
        </div>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          Arun <span>Nuthikattu.</span>
        </h1>

        <h2>
          Frontend Developer crafting
          <br />
          modern digital experiences.
        </h2>

        <p className="hero-description">
          I build responsive, user-friendly web applications
          with a focus on clean design, performance, and
          maintainable code.
        </p>

        <div className="hero-actions">
          <Link href="#projects" className="primary-button">
            View My Work <ArrowUpRight size={18} />
          </Link>

          <a
            href="/resume.pdf"
            download
            className="secondary-button"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="#about" className="scroll-link">
            Scroll to explore <ArrowDown size={16} />
          </a>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-center">AN.</div>
      </div>
    </section>
  );
}
