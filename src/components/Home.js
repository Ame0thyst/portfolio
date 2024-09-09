import cityImage from '../assets/city.png'; // Sesuaikan path dengan struktur folder
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Menggunakan react-icons untuk logo

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-row items-center">
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Know me more, I am IT enthusiast
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition duration-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src={cityImage} alt="My Photo" className="w-2/3 h-2/3 object-cover rounded-full shadow-lg ml-10" />
        </div>
      </div>
    </div>
  );
};

export default Home;
