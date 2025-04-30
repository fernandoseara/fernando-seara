import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <section id="inicio"><Hero /></section>
      <section id="sobremi"><About /></section>
      <section id="proyectos"><Projects /></section>
      <section id="contacto"><Contact /></section>
    </div>
  );
}

export default App;
