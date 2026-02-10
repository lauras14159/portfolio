import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiBlender,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Express", icon: SiExpress, color: "text-gray-200" },
    { name: "Vercel", icon: SiVercel, color: "text-white" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Blender", icon: SiBlender, color: "text-[#F5792A]" },
  ];

  const SkillItem = ({ name, Icon, color }) => (
    <div
      className="group relative md:w-28 md:h-28 w-24 h-24 rounded-full
                 flex flex-col items-center justify-center gap-2
                 bg-white/5"
    >
      <div
        className="absolute inset-0 rounded-full opacity-0
                   group-hover:opacity-100 transition-opacity duration-300
                   shadow-[0_0_30px_var(--color-accent-glow)]
                   pointer-events-none"
        style={{ willChange: "transform" }}
      />

      <Icon className={`md:text-4xl text-3xl ${color} relative z-10`} />
      <span className="text-xs tracking-wide text-gray-200 relative z-10">
        {name}
      </span>
    </div>
  );

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="md:text-4xl text-[1.8rem] font-bold tracking-widest">
          My Development Toolkit
        </h2>
        <p className="mt-4 text-sm text-muted">
          Technologies I use to build modern, scalable experiences
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon, color }) => (
          <SkillItem key={name} name={name} Icon={icon} color={color} />
        ))}
      </div>
    </section>
  );
};
