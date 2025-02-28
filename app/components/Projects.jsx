// app/components/Projects.jsx
export default function Projects() {
    const projects = [
      {
        title: 'Project 1',
        description: 'A web application built with React and Node.js.',
        image: '/assets/project1.jpg',
        link: '#',
      },
      {
        title: 'Project 2',
        description: 'An e-commerce platform using Laravel and MySQL.',
        image: '/assets/project2.jpg',
        link: '#',
      },
      {
        title: 'Project 3',
        description: 'A mobile app developed with React Native.',
        image: '/assets/project3.jpg',
        link: '#',
      },
    ];
  
    return (
      <section className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }