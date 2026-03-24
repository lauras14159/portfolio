import { Hero } from "./components/Hero";
import { Navbar } from "./layout/Navbar";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Laura K – Frontend Developer | React & Tailwind Portfolio</title>
        <meta
          name="description"
          content="Explore Laura K's React & Tailwind portfolio showcasing interactive web projects and a passion for creative work, including beginner 3D modeling with Blender. View projects, contact for collaboration."
        />
        <meta
          property="og:title"
          content="Laura K – Frontend Developer | React & Tailwind Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Laura K's React & Tailwind portfolio showcasing interactive web projects and a passion for creative work, including beginner 3D modeling with Blender. View projects, contact for collaboration."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-nine-woad-32.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://portfolio-nine-woad-32.vercel.app/preview.png"
        />
      </Helmet>
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
