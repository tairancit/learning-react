import { Typography, Button, IconButton, Input, FormControl, FormLabel, Table, CircularProgress, Box }  from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select from '../../components/Select';
import React, { useState } from 'react';

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

const CadastroFinanciamentos: React.FC = () => {
    const navigate = useNavigate();
    const [selectedFinalidade, setSelectedFinalidade] = useState<string>('');
    const [selectedModalidade, setSelectedModalidade] = useState<string>('');
    const [selectedParcela, setSelectedParcela] = useState<string>('');

    const finalidadeOptions = [
      { value: '', label: 'Selecione uma opção' },
      { value: '0', label: 'Custeio' },
      { value: '1', label: 'Exportação' },
      { value: '2', label: 'Fixo' },
      { value: '3', label: 'Giro' },
      { value: '4', label: 'Outros' },
      { value: '5', label: 'Saneamento' }
    ];

    const modalidadeOptions = [
      { value: '', label: 'Selecione uma opção' },
      { value: '0', label: 'ACC' },
      { value: '1', label: 'BNDES' },
      { value: '2', label: 'Exim' },
      { value: '3', label: 'Finame' },
      { value: '4', label: 'Leasing' },
      { value: '5', label: 'Outros' },
      { value: '6', label: 'Op. 63' }
    ];

    const parcelaOptions = [
      { value: '', label: 'Selecione uma opção' },
      { value: '0', label: 'Mensal' },
      { value: '1', label: 'Trimestral' },
      { value: '2', label: 'Quadrimestral' },
      { value: '3', label: 'Semestral' },
      { value: '4', label: 'Anual' },
      { value: '5', label: 'Outros' }
    ];

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
  
    const [isSimulado, setIsSimulado] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigate = () => {
      navigate('/financiamentos');
    };

    const simular = () => {
      setIsLoading(true);
      setIsSimulado(false);

    // Simular um carregamento de 3 segundos
    setTimeout(() => {
      setIsLoading(false);
      setIsSimulado(true);
    }, 2000);
    };

    return(
      <div style={{ padding: '20px' }}>
        <div>
          <Typography level="h2" mb={2}>Cadastro de Financiamentos</Typography>
          <IconButton onClick={handleNavigate} variant="plain"><ArrowBackIcon /></IconButton>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Cliente</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Credor</FormLabel>
            <Input />
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Contrato</FormLabel>
            <Input />
          </FormControl>
          <Select
            id="finalidadeSelect"
            label="Finalidade"
            options={finalidadeOptions}
            value={selectedFinalidade}
            onChange={setSelectedFinalidade}
            width= {542}
          />
          <Select
            id="modalidadeSelect"
            label="Modalidade"
            options={modalidadeOptions}
            value={selectedModalidade}
            onChange={setSelectedModalidade}
            width= {542}
          />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Garantia</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Carência</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Amortização</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>% de juros a.a.</FormLabel>
            <Input />
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Índice de atualização</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Valor do contrato</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Valor principal</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Data da operação</FormLabel>
            <Input />
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Select
              id="parcelasSelect"
              label="Parcelas restantes"
              options={parcelaOptions}
              value={selectedParcela}
              onChange={setSelectedParcela}
              width= {542}/>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Entrada</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>IOF</FormLabel>
            <Input />
          </FormControl>
          <FormControl style={{ flex: 1 }}>
            <FormLabel>Seguro</FormLabel>
            <Input />
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <FormControl sx={{ width: '25%' }}>
            <FormLabel>Tarifa</FormLabel>
            <Input />
          </FormControl>
          <FormControl sx={{ width: '25%' }}>
            <FormLabel>Total financiado</FormLabel>
            <Input />
          </FormControl>
          <FormControl sx={{ width: '25%' }}>
            <FormLabel>CET a.a.</FormLabel>
            <Input />
          </FormControl>
          <FormControl sx={{ width: '25%' }}>
            <FormLabel>Quantiade de parcelas</FormLabel>
            <Input />
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <FormControl sx={{ width: '25%' }}>
            <FormLabel>Primeiro vencimento</FormLabel>
            <Input />
          </FormControl>
        </div>
        <div>
          <Button onClick={simular} style={{ marginTop: '20px', display: 'block' }}>
            + Simular
          </Button>
        </div>
        <div style={{ marginTop: '20px' }}>
        {isLoading ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <CircularProgress sx={{ fontSize: '80px' }} />
            <Typography level="h2" mt={2}>
              Simulando...
            </Typography>
          </Box>
        ) : (
          isSimulado && (
            <>
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
                  </tr>
                ))}
              </tbody>
            </Table>
              <Button style={{ marginTop: '20px' }}>Confirmar</Button>
              <Button sx={{ 
                backgroundColor: 'white', 
                color: 'black', 
                border: '1px solid black', 
                '&:hover': { backgroundColor: '#f0f0f0' } // Cor de fundo ao passar o mouse
              }} style={{ marginTop: '20px', marginLeft: '3px' }}>Cancelar</Button>
            </>
          )
        )}
        </div>
      </div>
    );
}

export default CadastroFinanciamentos;