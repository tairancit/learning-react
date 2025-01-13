import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home';
import UsuariosListagem from './pages/usuarios/UsuariosListagem';
import UsuariosCadastro from './pages/usuarios/UsuariosCadastro';
import ClientesListagem from './pages/clientes/ClientesListagem';
import ClientesCadastro from './pages/clientes/ClientesCadastro';
import FinanciamentosListagem from './pages/financiamentos/FinanciamentosListagem';
import FinanciamentosCadastro from './pages/financiamentos/FinanciamentosCadastro';
import './App.css';
import FinanciamentosVisualizacao from './pages/financiamentos/FinanciamentosVisualizacao';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<UsuariosListagem />} />
            <Route path="/usuarios/cadastro" element={<UsuariosCadastro />} />
            <Route path="/clientes" element={<ClientesListagem />} />
            <Route path="/clientes/cadastro" element={<ClientesCadastro />} />
            <Route path="/financiamentos" element={<FinanciamentosListagem />} />
            <Route path="/financiamentos/cadastro" element={<FinanciamentosCadastro />} />
            <Route path="/financiamentos/visualizacao" element={<FinanciamentosVisualizacao />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;