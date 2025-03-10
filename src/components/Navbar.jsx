import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex justify-center space-x-6">  {/* Centered and spaced evenly */}
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
        <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
        <li><Link to="/tools" className="hover:text-yellow-400">Tools</Link></li> {/* Added Tools */}
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>
  );
}