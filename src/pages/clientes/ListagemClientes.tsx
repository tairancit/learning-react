import React from 'react';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

interface Cliente {
  id: number;
  cpfCnpj: string;
  nome: string;
  email: string;
  telefone: string;
}

const ListagemClientes: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/clientes/cadastro');
  };

  const cliente: Cliente[] = [
    { id: 1, cpfCnpj: '286.431.650-18', nome: 'João da Silva', email: 'joao@example.com', telefone: '(48) 3433-1234' },
    { id: 2, cpfCnpj: '68.458.381/0001-90', nome: 'Empresa de Plástico', email: 'maria@example.com', telefone: '(48) 99915-1254' },
    { id: 3, cpfCnpj: '373.937.810-77', nome: 'Maria Silveira', email: 'carlos@example.com' , telefone: '(48) 3433-5343'},
    { id: 4, cpfCnpj: '26.968.908/0001-87', nome: 'Empresa de Tintas', email: 'ana@example.com', telefone: '(48) 3433-6643'},
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography level="h2" mb={2}>Clientes</Typography>
      <Button onClick={handleNavigate}>+ Cliente</Button>
      <Table color="primary" borderAxis="both" variant="soft" size="sm" stickyHeader stripe="odd">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>CPF/CNPJ</th>
            <th style={{ width: '30%' }}>Nome</th>
            <th style={{ width: '30%' }}>Email</th>
            <th style={{ width: '15%' }}>Telefone</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          {cliente.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.cpfCnpj}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>
                <IconButton variant="plain"><DeleteIcon /></IconButton>
                <IconButton variant="plain"><EditIcon /></IconButton>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListagemClientes;