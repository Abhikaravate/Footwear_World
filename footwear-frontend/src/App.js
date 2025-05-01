import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/home';

function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="footwear-frontend/src/pages/home.jsx" element={<HomePage />} />
        {/* Add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
