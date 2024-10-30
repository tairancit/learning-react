import { Typography, Button, IconButton, Input, FormControl, FormLabel }  from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select from '../../components/Select';
import React, { useState } from 'react';

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
  

    const handleNavigate = () => {
      navigate('/financiamentos');
    };

    return(
      <div style={{ padding: '20px' }}>
        <div>
          <Typography level="h2" mb={2}>Cadastro de Financiamentos</Typography>
          <IconButton onClick={handleNavigate} variant="plain"><ArrowBackIcon /></IconButton>
        </div>
        <FormControl>
					<FormLabel>Credor</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Contrato</FormLabel>
					<Input />
				</FormControl>
        <Select
          id="finalidadeSelect"
          label="Finalidade"
          options={finalidadeOptions}
          value={selectedFinalidade}
          onChange={setSelectedFinalidade}
        />
        <Select
          id="modalidadeSelect"
          label="Modalidade"
          options={modalidadeOptions}
          value={selectedModalidade}
          onChange={setSelectedModalidade}
        />
        <FormControl>
					<FormLabel>Garantia</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Carência</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Amortização</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>% de juros a.a.</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Índice de atualização</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Valor do contrato</FormLabel>
					<Input />
				</FormControl>
        <Select
          id="parcelasSelect"
          label="Parcelas restantes"
          options={parcelaOptions}
          value={selectedParcela}
          onChange={setSelectedParcela}
        />
        <FormControl>
					<FormLabel>Data da operação</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Valor principal</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Entrada</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>IOF</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Seguro</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Tarifa</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Total financiado</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>CET a.a.</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Quantiade de parcelas</FormLabel>
					<Input />
				</FormControl>
        <FormControl>
					<FormLabel>Primeiro vencimento</FormLabel>
					<Input />
				</FormControl>
      </div>
    );
}

export default CadastroFinanciamentos;