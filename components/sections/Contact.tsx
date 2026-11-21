"use client";

import SectionHeading from "@/components/common/SectionHeading";
import { Mail, MapPin, Send } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/common/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-[1200px] mx-auto px-7">
      <SectionHeading
        badge="Get In Touch"
        title="Let's Build Something Together"
        subtitle="Feel free to reach out for projects, opportunities, or questions."
      />

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Contact Information</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            I am currently open to new frontend development opportunities and freelance projects. Let&apos;s connect!
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 grid place-items-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <a
                  href="mailto:contact@arun.dev"
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@arun.dev
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 grid place-items-center">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Location</p>
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 grid place-items-center hover:text-white hover:border-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 grid place-items-center hover:text-white hover:border-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn size={18} />
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-6 sm:p-8 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Hi, let's talk about..."
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="primary-button w-full cursor-pointer"
          >
            Send Message <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
