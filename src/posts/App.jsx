import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;