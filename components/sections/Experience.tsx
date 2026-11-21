import SectionHeading from "@/components/common/SectionHeading";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Sivion Global Technologies",
      period: "2024 — Present",
      description: "Developing modern, high-performance web applications using React, Next.js, and TypeScript. Collaborating with cross-functional teams to build clean user interfaces.",
      highlights: [
        "Built responsive web components with reusable architectures",
        "Optimized frontend load times and responsiveness",
        "Implemented seamless state management and REST API integrations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 max-w-[1200px] mx-auto px-7">
      <SectionHeading
        badge="Career Path"
        title="Work Experience"
        subtitle="Professional journey and hands-on software development experience."
      />

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-7 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={18} className="text-blue-500" />
                  {exp.role}
                </h3>
                <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
              </div>
              <span className="text-xs text-slate-400 font-mono border border-white/10 px-2.5 py-1 rounded w-fit">
                {exp.period}
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-1.5">
              {exp.highlights.map((point, pIdx) => (
                <li key={pIdx} className="text-xs sm:text-sm text-slate-400 flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
