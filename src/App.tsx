import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home';
import LisatagemUsuarios from './pages/usuarios/ListagemUsuarios';
import CadastroUsuarios from './pages/usuarios/CadastroUsuarios';
import ListagemClientes from './pages/clientes/ListagemClientes';
import CadastroClientes from './pages/clientes/CadastroClientes';
import LisatagemFinanciamentos from './pages/financiamentos/ListagemFinanciamentos';
import CadastroFinanciamentos from './pages/financiamentos/CadastroFinanciamentos';
import './App.css';
import FinanciamentoVisualizacao from './pages/financiamentos/FinanciamentoVisualizacao';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<LisatagemUsuarios />} />
            <Route path="/usuarios/cadastro" element={<CadastroUsuarios />} />
            <Route path="/clientes" element={<ListagemClientes />} />
            <Route path="/clientes/cadastro" element={<CadastroClientes />} />
            <Route path="/financiamentos" element={<LisatagemFinanciamentos />} />
            <Route path="/financiamentos/cadastro" element={<CadastroFinanciamentos />} />
            <Route path="/financiamentos/visualizacao" element={<FinanciamentoVisualizacao />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;