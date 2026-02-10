import { useState } from "react";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative z-50 md:hidden">
      {/* Burger Button */}
      <button onClick={() => setOpen(true)} className="flex flex-col gap-1.5">
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Menu Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-background
        border-l border-white/10 p-6 transition-transform
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl 
          hover:text-accent transition"
        >
          ×
        </button>

        <ul className="mt-20 flex flex-col gap-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white hover:text-accent transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
