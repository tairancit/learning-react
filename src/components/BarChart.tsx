import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Registre os componentes do Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  // Dados do gráfico
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Labels para o eixo X
    datasets: [
      {
        label: 'Vendas', // Título do gráfico (dentro da legenda)
        data: [65, 59, 80, 81, 56], // Dados das barras (valores para cada mês)
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor das barras
        borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
        borderWidth: 1, // Espessura da borda das barras
      },
    ],
  };

  // Opções do gráfico (configurações adicionais)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Posição da legenda
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Gráfico de Barras</Typography>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default BarChart;
