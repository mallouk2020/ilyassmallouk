// app/components/About.jsx
export default function About() {
    return (
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/assets/Mypicture.png"
              alt="Mohamed Haki"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 leading-relaxed">
              Hello! I'm Mohamed Haki, a skilled fullstack developer specializing in React, Node.js,
              Laravel, and more. With years of experience in building scalable web applications, I
              help businesses grow through innovative solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              My expertise includes front-end development with React and Vue.js, back-end development
              with Node.js and Laravel, and database management with MongoDB and MySQL.
            </p>
          </div>
        </div>
      </section>
    );
  }