import React, { useState } from 'react';
import { Button, Table, Typography, IconButton, Modal } from '@mui/joy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  usuario: string;
}

const ListagemUsuarios: React.FC = () => {
  const navigate = useNavigate();

  const navigateCadastro = () => {
    navigate('/usuarios/cadastro');
  };

  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: 1, nome: 'Tairan Cittadin', email: 'tairan.cittadin@example.com', usuario: 'tairan.cittadin' },
    { id: 2, nome: 'Tiago Rosso', email: 'tiago.rosso@example.com', usuario: 'tiago.rosso' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarioIdParaExcluir, setUsuarioIdParaExcluir] = useState<number | null>(null);

  const abrirModal = (id: number) => {
    setUsuarioIdParaExcluir(id);
    setIsModalOpen(true);
  };

  const excluir = () => {
    if (usuarioIdParaExcluir !== null) {
      const novosUsuarios = usuarios.filter(usuario => usuario.id !== usuarioIdParaExcluir);
      setUsuarios(novosUsuarios);
      setIsModalOpen(false);
    }
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setUsuarioIdParaExcluir(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography level="h2" mb={2}>Usuários</Typography>
      <Button onClick={navigateCadastro} style={{ marginBottom: '20px' }}>
        + Usuário
      </Button>
      <Table color="primary" borderAxis="both" variant="soft" size="sm" stickyHeader stripe="odd">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Nome</th>
            <th style={{ width: '30%' }}>Email</th>
            <th style={{ width: '15%' }}>Usuário</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.usuario}</td>
              <td>
                <IconButton variant="plain" onClick={() => abrirModal(usuario.id)}><DeleteIcon /></IconButton>
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
            <Typography mb={2}>Tem certeza que deseja excluir este usuário?</Typography>
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

export default ListagemUsuarios;