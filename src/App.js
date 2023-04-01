import logo from "./logo.svg";
import "./App.css";
import Base from "./components/Base";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DrawerAppBar from "./components/Navbar";
import Resume from "./components/Resume";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <section id="about">
      <About />

      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
<Projects />
</section>
<section id="Resume">
<Resume />
</section>
<section id="Contact">
<Contact />
</section>
      
    
     
      
    </div>
  );
}

export default App;
