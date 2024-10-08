import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Clientes from './pages/Clientes';
import Financiamentos from './pages/Financiamentos';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/financiamentos" element={<Financiamentos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;