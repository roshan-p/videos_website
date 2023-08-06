import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import VideoContentPage from './pages/VideoContentPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video/:videoId" element={<VideoContentPage />} />
    </Routes>
  </Router>
  );
}

export default App;
