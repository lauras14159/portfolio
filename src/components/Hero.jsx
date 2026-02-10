import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background z-10 text-text px-6 text-center">
      <div
        className="absolute -z-50 w-72 h-56 rounded-full"
        style={{
          background: "rgba(59,130,246,0.2)",
          filter: "blur(120px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <p className="text-sm uppercase tracking-widest text-accent mb-2">
        Front-End Developer • React Specialist
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I’m Laura 👋
        <br />I build <span className="text-accent">React</span> applications
      </h1>

      <p className="max-w-xl mb-6">
        Front-end developer with several years of experience building fast,
        responsive, and user-friendly web applications using React, Tailwind
        CSS, and Typescript.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Button
          href="#projects"
          bgColor="bg-accent"
          hoverBg="hover:bg-accent-hover"
          textColor="text-white"
          borderColor="border border-transparent"
          hoverBorderColor=""
          w="w-full sm:w-48"
          h="h-12"
          textSize="text-lg"
        >
          View Projects
        </Button>

        <Button
          href="#contact"
          bgColor="bg-transparent"
          hoverBg="hover:bg-accent-hover/10"
          textColor="text-white"
          borderColor="border border-accent"
          hoverBorderColor="hover:border-accent-hover"
          w="w-full sm:w-48"
          h="h-12"
          textSize="text-lg"
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};
