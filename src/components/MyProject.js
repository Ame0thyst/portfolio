import { useState } from 'react';
import cityImage from '../assets/city.png'; // Sesuaikan path dengan struktur folder
import { FaArrowRight } from 'react-icons/fa'; // Import icon panah

const MyProject = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of Project 1", img: cityImage, link: "#" },
    { id: 2, title: "Project 2", description: "Description of Project 2", img: "/path-to-image.jpg", link: "#" },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', img: '', link: '' });

  const handleAddProject = () => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    setNewProject({ title: '', description: '', img: '', link: '' });
    setIsAdding(false);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Changed to grid-cols-3 for 3 columns */}
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="relative group border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-700 h-96" // Adjust height here
          >
            <img src={project.img} alt={project.title} className="w-full h-full object-cover" /> {/* Full height for image */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-xl font-bold text-white drop-shadow-lg mb-2">{project.title}</h2>
              <p className="text-white drop-shadow-lg">{project.description}</p>
              <a href={project.link} className="mt-4 text-white">
                <FaArrowRight className="text-2xl hover:text-gray-300 transition-colors duration-300" />
              </a>
            </div>
          </div>
        ))}
        <button
          onClick={() => setIsAdding(true)}
          className="border rounded-lg p-4 flex items-center justify-center border-dashed border-gray-400 bg-gray-200 dark:bg-gray-700 h-96" // Ensure add button matches card height
        >
          <span className="text-xl font-bold">+</span>
        </button>
      </div>

      {isAdding && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="block mb-2 p-2 border rounded w-full dark:bg-gray-600"
          />
          <textarea
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="block mb-2 p-2 border rounded w-full dark:bg-gray-600"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProject.img}
            onChange={(e) => setNewProject({ ...newProject, img: e.target.value })}
            className="block mb-2 p-2 border rounded w-full dark:bg-gray-600"
          />
          <input
            type="text"
            placeholder="Link"
            value={newProject.link}
            onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            className="block mb-2 p-2 border rounded w-full dark:bg-gray-600"
          />
          <button
            onClick={handleAddProject}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add Project
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProject;
