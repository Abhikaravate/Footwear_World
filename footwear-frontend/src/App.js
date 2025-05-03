import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/home';
import ShoeDetail from './pages/ShoeDetail';

function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/ShoeDetail" element={<ShoeDetail />} />        {/* Add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
