// app/components/Hero.jsx
export default function Hero() {
    return (
      <section className="bg-gradient-to-r from-slate-900 bg-opacity-75 to-slate-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Mohamed Haki</h1>
          <p className="text-xl mb-8">Fullstack Developer | React | Node.js | Laravel</p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }