// app/components/About.jsx
export default function About() {
    return (
      <section className="container mx-auto px-6 place-items-center">
         <div className="" style={{ width: "270px " }}>
        <h2 className=" font-bold text-center  mb-20  text-gradient text-4xl">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="../asset/ilyass.jpg"
              alt="ilyass mallouk"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 container-wrapper">
            <p className="text-gray-700 leading-relaxed">
              Hello! I'm ilyass mallouk, a skilled fullstack developer specializing in React, Node.js,
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