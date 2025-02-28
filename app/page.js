// app/page.js
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
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

      {/* Projects Section */}
      <section id="projects" className=" bg-gray-100 bg-gradient-to-r from-slate-900 bg-opacity-75 to-slate-600 text-white py-20">
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