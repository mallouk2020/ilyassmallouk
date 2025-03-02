// app/components/Hero.jsx
export default function Hero() {
    return (
      <section className="container-wrapper mt-10">
        <div className="container h-screen mx-auto text-center">
          <h1 className="text-5xl font-bold mt-20 mb-8">ilyass mallouk</h1>
          <p className="text-xl mb-8">Fullstack Developer | React | Node.js | Laravel</p>
          <a
            href="#contact"
            className="inline-block mt-11 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }