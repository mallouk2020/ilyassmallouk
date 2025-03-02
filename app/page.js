// app/page.js
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Experience from './components/experiance';
import MatrixBackground from './components/MatrixBackground';



export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Header/>
      <MatrixBackground />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>
      
        {/* Experience Section */}
        <section id="experience" className="py-20">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className=" py-20">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}