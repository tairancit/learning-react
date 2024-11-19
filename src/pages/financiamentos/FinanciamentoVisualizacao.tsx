import React, { useState } from 'react';
import { Typography, IconButton, Table, Modal, Button, FormControl, FormLabel, Input } from '@mui/joy';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface Movimentacoes {
  id: number;
  parcela: number;
  vencimento: string;
  dias: number;
  saldoInicial: number;
  juros: number;
  amortizacao: number;
  valorParcela: number;
  saldoFinal: number;
}

const FinanciamentoVisualizacao: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/financiamentos');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const abrirModal = (id: number) => {
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
  };

  const [movimentacoes, setMovimentacoes] = useState<Movimentacoes[]>([
    { id: 1, parcela: 1, vencimento: '10/01/2024', dias: 29, saldoInicial: 52680.50, juros: 896.04, amortizacao: 755.15, valorParcela: 1651.19, saldoFinal: 51925.35 },
    { id: 2, parcela: 2, vencimento: '10/02/2024', dias: 30, saldoInicial: 51925.35, juros: 913.91, amortizacao: 737.28, valorParcela: 1651.19, saldoFinal: 51188.07 },
    { id: 3, parcela: 3, vencimento: '10/03/2024', dias: 28, saldoInicial: 51188.07, juros: 931.24, amortizacao: 719.95, valorParcela: 1651.19, saldoFinal: 50468.12 },
    { id: 4, parcela: 4, vencimento: '10/04/2024', dias: 29, saldoInicial: 50468.12, juros: 888.27, amortizacao: 762.92, valorParcela: 1651.19, saldoFinal: 49705.19 },
    { id: 5, parcela: 5, vencimento: '10/05/2024', dias: 29, saldoInicial: 49705.19, juros: 904.26, amortizacao: 746.93, valorParcela: 1651.19, saldoFinal: 48958.27 },
    { id: 6, parcela: 6, vencimento: '10/06/2024', dias: 30, saldoInicial: 48958.27, juros: 890.67, amortizacao: 760.52, valorParcela: 1651.19, saldoFinal: 48197.75 },
    { id: 7, parcela: 7, vencimento: '10/07/2024', dias: 29, saldoInicial: 48197.75, juros: 819.79, amortizacao: 831.40, valorParcela: 1651.19, saldoFinal: 47366.35 },
    { id: 8, parcela: 8, vencimento: '10/08/2024', dias: 30, saldoInicial: 47366.35, juros: 861.71, amortizacao: 789.48, valorParcela: 1651.19, saldoFinal: 46576.87 },
    { id: 9, parcela: 9, vencimento: '10/09/2024', dias: 29, saldoInicial: 46576.87, juros: 819.78, amortizacao: 831.41, valorParcela: 1651.19, saldoFinal: 45745.46 },
    { id: 10, parcela: 10, vencimento: '10/10/2024', dias: 29, saldoInicial: 45745.46, juros: 832.22, amortizacao: 818.97, valorParcela: 1651.19, saldoFinal: 44926.49 },
  ]);

  return(
    <div style={{ padding: '20px' }}>
      <Typography level="h2" mb={2}>Visualizando financiamento</Typography>
      <IconButton onClick={handleNavigate} variant="plain"><ArrowBackIcon /></IconButton>
      <Table color="primary" borderAxis="both" variant="soft" size="sm" stickyHeader stripe="odd">
        <thead>
          <tr>
            <th>Parcela</th>
            <th>Vencimento</th>
            <th>Dias</th>
            <th>Saldo inicial</th>
            <th>Juros</th>
            <th>Amortização</th>
            <th>Valor da parcela</th>
            <th>Saldo final</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movimentacoes.map((movimentacao) => (
            <tr key={movimentacao.id}>
              <td>{movimentacao.parcela}</td>
              <td>{movimentacao.vencimento}</td>
              <td>{movimentacao.dias}</td>
              <td>{movimentacao.saldoInicial}</td>
              <td>{movimentacao.juros}</td>
              <td>{movimentacao.amortizacao}</td>
              <td>{movimentacao.valorParcela}</td>
              <td>{movimentacao.saldoFinal}</td>
              <td>
                <IconButton variant="plain" onClick={() => abrirModal(movimentacao.id)}><AttachMoneyIcon /></IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
          <Typography mb={2}>Você está pagando a parcela 1 com valor total de R$ 1.651,19.</Typography>
          <FormControl>
            <FormLabel>Observações</FormLabel>
            <Input />
          </FormControl>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button style={{ marginTop: '20px' }} color="danger">Confirmar</Button>
            <Button style={{ marginTop: '20px' }} onClick={fecharModal} color="neutral">Cancelar</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FinanciamentoVisualizacao;