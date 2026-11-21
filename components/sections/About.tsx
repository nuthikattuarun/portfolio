import SectionHeading from "@/components/common/SectionHeading";
import { Code2, Sparkles, User, Laptop } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="text-blue-500" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-structured modern code.",
    },
    {
      icon: <Laptop className="text-cyan-400" size={24} />,
      title: "Responsive Web",
      description: "Crafting pixel-perfect layouts that look great on any device screen.",
    },
    {
      icon: <Sparkles className="text-blue-400" size={24} />,
      title: "Modern UI/UX",
      description: "Delivering intuitive, interactive, and aesthetically pleasing interfaces.",
    },
    {
      icon: <User className="text-sky-400" size={24} />,
      title: "User-Centric",
      description: "Focusing on performance, accessibility, and high usability.",
    },
  ];

  return (
    <section id="about" className="py-24 max-w-[1200px] mx-auto px-7">
      <SectionHeading
        badge="About Me"
        title="Passionate Frontend Developer"
        subtitle="Transforming ideas into polished, performant web applications with modern tech."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-slate-300 leading-relaxed text-base">
          <p>
            Hello! I&apos;m <strong className="text-white">Arun Nuthikattu</strong>, a Frontend Developer dedicated to building performant and visually striking digital web applications.
          </p>
          <p>
            With a solid foundation in React, Next.js, and TypeScript, I enjoy solving challenging UI problems, optimizing user experiences, and bringing innovative designs to life.
          </p>
          <p>
            Whether developing from scratch or improving existing applications, I focus on clean architecture, accessible components, and seamless animations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
