import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlayerProfile from './pages/PlayerProfile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:gameName/:tagLine" element={<PlayerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

