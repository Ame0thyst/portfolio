import { useEffect, useState } from 'react';
import cityImage from '../assets/city.png';

const About = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName(''); // reset input name
      setComment(''); // reset input comment
    }
  };

  return (
    <div className="relative p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="flex justify-center">
        <img
          src={cityImage}
          alt="City"
          className={`w-1/3 h-1/3 transition-opacity duration-500 ${scrollPos > 100 ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
      <div className="mt-4 text-lg grid grid-cols-2 gap-4">
        <p className="text-justify">
          I am passionate about IT and always eager to learn and explore new technologies.
        </p>
        <p className="text-justify">
          Exploring different programming languages and frameworks is what drives me daily.
        </p>
        <p className="text-justify">
          My focus lies in web development, particularly in both frontend and backend.
        </p>
        <p className="text-justify">
          I love to stay updated with the latest trends in technology and to keep challenging myself.
        </p>
        <p className="text-justify">
          Collaboration and continuous learning are what excite me the most in the tech world.
        </p>
        <p className="text-justify">
          Besides coding, I enjoy reading tech blogs and taking online courses to keep improving.
        </p>
      </div>

      {/* Comment Form */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Display Comments */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((c, index) => (
              <li key={index} className="p-4 border border-gray-300 rounded dark:border-gray-600">
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="text-sm">{c.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default About;
