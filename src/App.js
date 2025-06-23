import './App.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/abc" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
