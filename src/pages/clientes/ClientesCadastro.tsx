import { Typography, Button, IconButton, Input, FormControl, FormLabel }  from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ClientesCadastro: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/clientes');
  };

  return (
  	<div style={{ padding: '20px' }}>
			<div>
				<Typography level="h2" mb={2}>Cadastro de Clientes</Typography>
				<IconButton onClick={handleNavigate} variant="plain"><ArrowBackIcon /></IconButton>
			</div>
			<div>
				<FormControl>
					<FormLabel>CPF/CNPJ</FormLabel>
					<Input />
				</FormControl>
				<FormControl>
					<FormLabel>Nome</FormLabel>
					<Input />
				</FormControl>
				<FormControl>
					<FormLabel>E-mail</FormLabel>
					<Input />
				</FormControl>
				<FormControl>
					<FormLabel>Telefone</FormLabel>
					<Input />
				</FormControl>
			</div>
			<div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '5px' }}>
      	<Button onClick={handleNavigate} style={{ width: '100px' }}>Salvar</Button>
				<Button onClick={handleNavigate} style={{ width: '100px' }}>Cancelar</Button>
    	</div>
    </div>
  );
};

export default ClientesCadastro;