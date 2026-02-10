import { BurgerMenu } from "./BurgerMenu";

export const Navbar = () => {
  const links = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-background z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight">
          Laura K
        </a>

        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-text hover:text-accent-hover transition-colors font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <BurgerMenu />

          <ul
            className="absolute top-full left-0 w-full bg-background flex flex-col items-center gap-4 py-4 md:hidden opacity-0 pointer-events-none transition-opacity duration-300"
            id="mobile-menu"
          >
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-text hover:text-accent-hover transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
