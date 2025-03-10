import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';  // New Home Page
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';  
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Updated to use Home.jsx */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />  
        <Route path="/blog/:postId" element={<Blog />} />  
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}