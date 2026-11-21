
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Github, Linkedin } from "@/components/common/Icons";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar">
            <nav className="navbar-container">
                <a href="#home" className="navbar-logo">
                    Arun<span>.</span>
                </a>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="navbar-socials">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={19} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={19} />
                    </a>
                </div>

                <button
                    className="mobile-menu-button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {isOpen && (
                <div className="mobile-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
