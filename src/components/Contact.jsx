import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactCard = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center size-20 hover:shadow-lg shadow-accent-glow transition-shadow duration-300"
    >
      <Icon className="text-4xl text-accent group-hover:text-accent-hover transition-colors" />
    </a>
  );
};

export function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-6 tracking-widest">Contact Me</h2>
      <p className="text-muted mb-12">
        I’d love to hear from you! Reach out on any of these platforms:
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8">
        <ContactCard Icon={FaGithub} link="https://github.com/lauras14159" />
        <ContactCard
          Icon={FaLinkedin}
          link="https://www.linkedin.com/in/laura-konstantinidi-6a6534167"
        />
        <ContactCard Icon={FaEnvelope} link="mailto:lauras14159@gmail.com" />
      </div>
    </section>
  );
}
