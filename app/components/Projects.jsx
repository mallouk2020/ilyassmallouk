// app/components/Projects.jsx
export default function Projects() {
    const projects = [
      {
        title: 'Project 1',
        description: 'A web application built with React and Node.js.',
        image: '../assets/ilyass.jpg',
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
      {
        title: 'Project 1',
        description: 'A web application built with React and Node.js.',
        image: '../../app/assets/ilyass.jpg',
        link: '#',
      },
      {
        title: 'Project 2',
        description: 'An e-commerce platform using Laravel and MySQL.',
        image: '../assets/ilyass.jpg',
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
      <section className=" place-items-center container mx-auto px-6 ">
        <div className=""  style={{width:"270px "}}>
        <h2 className=" font-bold text-center  mb-8  text-gradient text-4xl">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0" >
          {projects.map((project, index) => (
            <div key={index} className=" rounded-lg shadow-lg overflow-hidden container-wrapper ">
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
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