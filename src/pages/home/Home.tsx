import React from 'react';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import { Grid } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}> {/* xs=3 representa 1/4 da tela */}
          <PieChart />
        </Grid>
        <Grid item xs={5}> {/* xs=3 representa 1/4 da tela */}
          <BarChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;