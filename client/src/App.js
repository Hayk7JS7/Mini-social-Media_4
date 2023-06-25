import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
