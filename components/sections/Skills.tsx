import SectionHeading from "@/components/common/SectionHeading";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS"],
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Framer Motion", "Responsive Design", "CSS Modules", "Component Libraries"],
    },
    {
      title: "Tools & Ecosystem",
      skills: ["Git", "GitHub", "Vite", "Turbopack", "npm / yarn / pnpm", "VS Code"],
    },
    {
      title: "Practices & Architecture",
      skills: ["State Management", "REST APIs", "Performance Optimization", "Clean Code", "Web Accessibility (a11y)"],
    },
  ];

  return (
    <section id="skills" className="py-24 max-w-[1200px] mx-auto px-7">
      <SectionHeading
        badge="My Toolkit"
        title="Skills & Technologies"
        subtitle="The technologies and tools I use to bring ideas to reality."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
          >
            <h3 className="text-white font-semibold text-lg mb-4 text-blue-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
