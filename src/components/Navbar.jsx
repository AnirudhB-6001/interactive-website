import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex justify-center space-x-8">  {/* Ensures horizontal alignment */}
        <li><Link to="/" className="hover:text-yellow-400 px-4 py-2">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400 px-4 py-2">About</Link></li>
        <li><Link to="/projects" className="hover:text-yellow-400 px-4 py-2">Projects</Link></li>
        <li><Link to="/tools" className="hover:text-yellow-400 px-4 py-2">Tools</Link></li>
        <li><Link to="/blog" className="hover:text-yellow-400 px-4 py-2">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400 px-4 py-2">Contact</Link></li>
      </ul>
    </nav>
  );
}