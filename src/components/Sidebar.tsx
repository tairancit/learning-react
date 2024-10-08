import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link do React Router
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Contabilidade</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/financiamentos">Financiamentos</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;