import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/home';
import ShoeDetail from './pages/ShoeDetail';
import Footer from './components/Footer';
import Home1 from './pages/home1';
import Slider2 from './components/slider1';

function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/ShoeDetail" element={<ShoeDetail />} />  
        <Route path="/footer" element={<Footer />} />
        <Route path="/home1" element={<Home1/>} />
        <Route path="/Slider2" element={<Slider2/>} />
      </Routes>
    </Router>
  );
}

export default App;
