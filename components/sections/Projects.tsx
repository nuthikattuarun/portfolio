import SectionHeading from "@/components/common/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { GitHub } from "@/components/common/Icons";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive personal portfolio built with Next.js App Router, Tailwind CSS, and TypeScript.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/",
    },
    {
      title: "Interactive Web App",
      description: "A feature-rich web dashboard offering seamless data visualization and state management.",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      liveUrl: "#",
      githubUrl: "https://github.com/",
    },
    {
      title: "E-Commerce Frontend",
      description: "Fast and sleek product showcase with shopping cart experience, filtering, and responsive design.",
      tags: ["Next.js", "Tailwind CSS", "Zustand"],
      liveUrl: "#",
      githubUrl: "https://github.com/",
    },
  ];

  return (
    <section id="projects" className="py-24 max-w-[1200px] mx-auto px-7">
      <SectionHeading
        badge="Featured Work"
        title="Recent Projects"
        subtitle="A selection of frontend projects highlighting design and development skills."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between p-6 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-400 transition-colors"
              >
                Live Preview <ArrowUpRight size={14} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors ml-auto"
                aria-label="GitHub Repository"
              >
                <GitHub size={15} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
