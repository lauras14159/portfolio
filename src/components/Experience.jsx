const experiences = [
  {
    company: "N-idea - Dekwaneh",
    role: "Front-End Developer",
    period: "January 2022 – Current",
    summary:
      "Built responsive web and mobile apps using React, Tailwind, and React Native, integrating APIs and managing state with Zustand. Explored backend development with Node.js, Express, and MongoDB while collaborating in Agile sprints for high-quality user experiences.",
  },
  {
    company: "Haceb - Hamra, Beirut",
    role: "Software Developer Intern",
    period: "September 2021 – December 2021",
    summary:
      "Developed custom workflows and plugins in Microsoft Dynamics 365 using C#/.NET and JavaScript, improving CRM efficiency and assisting in deployment tasks.",
  },
];

export const Experience = () => {
  return (
    <section
      className="min-h-screen px-6 md:px-20 relative py-20"
      id="experience"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-16">
        Experience
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-accent"></div>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`mb-12 flex justify-${
                isLeft ? "start" : "end"
              } relative`}
            >
              <span className="absolute left-1/2 top-2 md:top-4 w-4 h-4 rounded-full bg-accent -translate-x-1/2 z-10 ring-4 ring-gray-900"></span>

              <div
                className={`w-full md:w-5/12 bg-gray-900 text-gray-200 rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 ${
                  isLeft ? "mr-auto text-left" : "ml-auto text-left"
                }`}
              >
                <h3 className="text-xl font-semibold text-white pt-2 md:pt-0">
                  {exp.company}
                </h3>
                <p className="text-gray-400 italic mb-2">
                  {exp.role} — {exp.period}
                </p>
                <p className="text-gray-300">{exp.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
