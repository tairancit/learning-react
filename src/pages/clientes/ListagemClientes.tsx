import React, { useState } from 'react';
import { Button, Table, Typography, IconButton, Modal } from '@mui/joy';
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

  const navigateCadastro = () => {
    navigate('/clientes/cadastro');
  };

  const [clientes, setClientes] = useState<Cliente[]>([
    { id: 1, cpfCnpj: '286.431.650-18', nome: 'João da Silva', email: 'joao@example.com', telefone: '(48) 3433-1234' },
    { id: 2, cpfCnpj: '68.458.381/0001-90', nome: 'Empresa de Plástico', email: 'maria@example.com', telefone: '(48) 99915-1254' },
    { id: 3, cpfCnpj: '373.937.810-77', nome: 'Maria Silveira', email: 'carlos@example.com' , telefone: '(48) 3433-5343'},
    { id: 4, cpfCnpj: '26.968.908/0001-87', nome: 'Empresa de Tintas', email: 'ana@example.com', telefone: '(48) 3433-6643'},
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clienteIdParaExcluir, setClienteIdParaExcluir] = useState<number | null>(null);

  const abrirModal = (id: number) => {
    setClienteIdParaExcluir(id);
    setIsModalOpen(true);
  };

  const excluir = () => {
    if (clienteIdParaExcluir !== null) {
      const novosClientes = clientes.filter(cliente => cliente.id !== clienteIdParaExcluir);
      setClientes(novosClientes);
      setIsModalOpen(false);
    }
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setClienteIdParaExcluir(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography level="h2" mb={2}>Clientes</Typography>
      <Button onClick={navigateCadastro} style={{ marginBottom: '20px' }}>
        + Cliente
      </Button>
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
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.cpfCnpj}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>
                <IconButton variant="plain" onClick={() => abrirModal(cliente.id)}><DeleteIcon /></IconButton>
                <IconButton variant="plain" onClick={navigateCadastro}><EditIcon /></IconButton>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Página 1 de 10
        <a>Próximo</a>
      </div>

      {/* Modal de confirmação */}
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={fecharModal}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <Typography>Confirmação</Typography>
            <Typography mb={2}>Tem certeza que deseja excluir este cliente?</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button onClick={excluir} color="danger">Sim</Button>
              <Button onClick={fecharModal} color="neutral">Não</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ListagemClientes;