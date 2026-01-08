import { Hero } from "./components/Hero";
import { Navbar } from "./layout/Navbar";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
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
  );
}

export default App;
