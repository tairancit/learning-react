import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home';
import LisatagemUsuarios from './pages/usuarios/ListagemUsuarios';
import ListagemClientes from './pages/clientes/ListagemClientes';
import LisatagemFinanciamentos from './pages/financiamentos/ListagemFinanciamentos';
import CadastroClientes from './pages/clientes/CadastroClientes';
import CadastroUsuarios from './pages/usuarios/CadastroUsuarios';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<LisatagemUsuarios />} />
            <Route path="/clientes" element={<ListagemClientes />} />
            <Route path="/financiamentos" element={<LisatagemFinanciamentos />} />
            <Route path="/clientes/cadastro" element={<CadastroClientes />} />
            <Route path="/usuarios/cadastro" element={<CadastroUsuarios />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;