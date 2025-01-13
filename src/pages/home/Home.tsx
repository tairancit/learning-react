import React, { useState } from 'react';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import { Table } from '@mui/joy';
import Grid from '@mui/material/Grid2';

interface Financiamento {
  cpfCnpjCliente: string;
  nomeCliente: string;
  valorTotal: number;
}

const Home: React.FC = () => {
  const [financiamentos, setFinanciamentos] = useState<Financiamento[]>([
    { cpfCnpjCliente: '123.456.789-00', nomeCliente: 'João da Silva', valorTotal: 1000000 },
    { cpfCnpjCliente: '12.345.678/0001-90', nomeCliente: 'Empresa XPTO', valorTotal: 958000 },
    { cpfCnpjCliente: '987.654.321-00', nomeCliente: 'Maria Oliveira', valorTotal: 598000 },
    { cpfCnpjCliente: '11.222.333/0001-44', nomeCliente: 'Construtora Beta', valorTotal: 100000 },
    { cpfCnpjCliente: '321.654.987-00', nomeCliente: 'Pedro Santos', valorTotal: 50000 },
  ]);

  return (
    <div>
      <h1>Página Inicial</h1>
      <Grid container spacing={2}>
        <Grid size={3}> {/* 3 de 12 colunas, ou seja, 1/4 da largura */}
          <PieChart />
        </Grid>
        <Grid size={6}> {/* 3 de 12 colunas, ou seja, 1/4 da largura */}
          <h3>TOP 5 CLIENTES</h3>
          <Table color="primary" borderAxis="both" variant="soft" size="sm" stickyHeader stripe="odd">
          <thead>
            <tr>
              <th style={{ width: '20%' }}>Cliente</th>
              <th style={{ width: '20%' }}>Total financiado</th>
            </tr>
          </thead>
          <tbody>
            {financiamentos.map((financiamento) => (
              <tr>
                <td>{financiamento.nomeCliente} - {financiamento.cpfCnpjCliente}</td>
                <td>{financiamento.valorTotal}</td>
              </tr>
            ))}
          </tbody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;