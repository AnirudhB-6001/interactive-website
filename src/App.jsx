import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';  // Blog will handle both blog list and post view
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="p-6 text-center"><h1 className="text-4xl">Welcome to My Website</h1></div>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />  {/* Blog list */}
        <Route path="/blog/:postId" element={<Blog />} />  {/* Individual blog post */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}