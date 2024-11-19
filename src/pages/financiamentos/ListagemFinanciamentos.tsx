import React, { useState } from 'react';
import { Button, Typography, Table, IconButton } from '@mui/joy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

interface Financiamento {
  id: number;
  cpfCnpjCliente: string;
  nomeCliente: string;
  nomeCredor: string;
  carência: number;
  jurosAno: number;
  valorContrato: number;
  valorPrincipal: number;
  valorTotal: number;
  valorSaldo: number;
}

const Financiamentos: React.FC = () => {
  const navigate = useNavigate();

  const navigateCadastro = () => {
    navigate('/financiamentos/cadastro');
  };

  const navigateVisualizacao = () => {
    navigate('/financiamentos/visualizacao');
  };

  const [financiamentos, setFinanciamentos] = useState<Financiamento[]>([
    { id: 1, cpfCnpjCliente: '123.456.789-00', nomeCliente: 'João da Silva', nomeCredor: 'Banco ABC', carência: 6, jurosAno: 12.5, valorContrato: 50000, valorPrincipal: 45000, valorTotal: 52000, valorSaldo: 7000 },
    { id: 2, cpfCnpjCliente: '12.345.678/0001-90', nomeCliente: 'Empresa XPTO', nomeCredor: 'Banco XYZ', carência: 3, jurosAno: 10.2, valorContrato: 75000, valorPrincipal: 70000, valorTotal: 77000, valorSaldo: 7000 },
    { id: 3, cpfCnpjCliente: '987.654.321-00', nomeCliente: 'Maria Oliveira', nomeCredor: 'CredFácil', carência: 0, jurosAno: 8.5, valorContrato: 30000, valorPrincipal: 28000, valorTotal: 31000, valorSaldo: 3000 },
    { id: 4, cpfCnpjCliente: '11.222.333/0001-44', nomeCliente: 'Construtora Beta', nomeCredor: 'Banco Alfa', carência: 12, jurosAno: 9.7, valorContrato: 120000, valorPrincipal: 100000, valorTotal: 130000, valorSaldo: 30000 },
    { id: 5, cpfCnpjCliente: '321.654.987-00', nomeCliente: 'Pedro Santos', nomeCredor: 'Banco XYZ', carência: 2, jurosAno: 11.1, valorContrato: 45000, valorPrincipal: 43000, valorTotal: 47000, valorSaldo: 4000 },
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <Typography level="h2" mb={2}>Financiamentos</Typography>
      <Button onClick={navigateCadastro} style={{ marginBottom: '20px' }}>
        + Financiamento
      </Button>
      <Table color="primary" borderAxis="both" variant="soft" size="sm" stickyHeader stripe="odd">
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Cliente</th>
            <th style={{ width: '20%' }}>Credor</th>
            <th style={{ width: '5%' }}>Carência</th>
            <th style={{ width: '5%' }}>% juros a.a.</th>
            <th style={{ width: '10%' }}>Valor contrato</th>
            <th style={{ width: '10%' }}>Valor principal</th>
            <th style={{ width: '10%' }}>Valor total</th>
            <th style={{ width: '10%' }}>Valor saldo</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          {financiamentos.map((financiamento) => (
            <tr key={financiamento.id}>
              <td>{financiamento.nomeCliente} - {financiamento.cpfCnpjCliente}</td>
              <td>{financiamento.nomeCredor}</td>
              <td>{financiamento.carência}</td>
              <td>{financiamento.jurosAno}</td>
              <td>{financiamento.valorContrato}</td>
              <td>{financiamento.valorPrincipal}</td>
              <td>{financiamento.valorTotal}</td>
              <td>{financiamento.valorSaldo}</td>
              <td>
                <IconButton variant="plain" onClick={navigateVisualizacao}><ArrowForwardIcon /></IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Financiamentos;