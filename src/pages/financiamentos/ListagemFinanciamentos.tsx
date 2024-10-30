import React from 'react';
import { Button, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const Financiamentos: React.FC = () => {
  const navigate = useNavigate();

  const navigateCadastro = () => {
    navigate('/financiamentos/cadastro');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography level="h2" mb={2}>Financiamentos</Typography>
      <Button onClick={navigateCadastro} style={{ marginBottom: '20px' }}>
        + Financiamento
      </Button>
    </div>
  );
};

export default Financiamentos;