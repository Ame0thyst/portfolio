import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/my-project" className="hover:underline">My Project</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2">
        {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
      </button>
    </nav>
  );
};

export default Navbar;
