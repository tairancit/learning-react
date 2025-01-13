import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Registre os componentes do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChart = () => {
  // Dados do gráfico
  const data = {
    labels: ['Categoria A', 'Categoria B', 'Categoria C'],
    datasets: [
      {
        data: [30, 40, 30], // Porcentagens de cada categoria
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'], // Cores do gráfico
        hoverBackgroundColor: ['#ff4f6c', '#2d8bce', '#9b4aff'], // Cores ao passar o mouse
      },
    ],
  };

  // Configuração do gráfico (opcional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Gráfico de Pizza</Typography>
        <Pie data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default PieChart;
