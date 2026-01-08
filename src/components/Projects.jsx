const webProjects = [
  {
    title: "Thinkboard",
    description:
      "A simple yet functional todo app that organizes tasks as cards, showing the title, description, and date created, with full CRUD functionality.",
    image: "/web/thinkboard.png",
    live: "https://mern-thinkboard-qeew.onrender.com/",
    github: "https://github.com/lauras14159/mern-thinkboard",
  },
  {
    title: "Todo App",
    description:
      "A task management system featuring user authentication, CRUD operations, toggle-controlled task completion, completion-based filtering, dropdown-based priority assignment with automatic sorting, and the ability to switch between light and dark themes.",
    image: "/web/todo-app.JPEG",
    live: "https://todo-app-52xf.onrender.com/",
    github: "https://github.com/lauras14159/todo-app",
  },
];

const blenderProjects = [
  {
    title: "Donut & Coffee",
    description: "3D model of a donut and coffee cup.",
    image: "/blender/Donut_Coffee.PNG",
  },
  {
    title: "TV Room",
    description: "3D interior scene of a TV room.",
    image: "/blender/TV_room.PNG",
  },
  {
    title: "Low Polly Scene",
    description: "Low poly 3D scene with trees and houses.",
    image: "/blender/low-polly-scene.PNG",
  },
];

const ProjectCard = ({ project, isBlender }) => {
  return (
    <div className="group bg-[#111114] rounded-2xl overflow-hidden border border-white/5 hover:border-accent transition duration-300 hover:shadow-[0_0_30px_var(--color-accent-glow)] flex flex-col">
      <div className="overflow-hidden aspect-3/2">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>

        <p className="text-muted text-sm mb-4">{project.description}</p>

        {!isBlender && (
          <div className="flex gap-6 bottom-0 items-end mt-auto">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-hover transition"
            >
              Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-hover transition"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold mb-16 text-center">
        My <span className="text-accent">Projects</span>
      </h2>

      <h3 className="text-2xl font-semibold mb-8">Web Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 items-stretch">
        {webProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-8">Blender Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blenderProjects.map((project, index) => (
          <ProjectCard key={index} project={project} isBlender />
        ))}
      </div>
    </section>
  );
};
