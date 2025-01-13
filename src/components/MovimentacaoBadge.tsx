import React from 'react';
import { Badge } from '@mui/material';

interface MovimentacaoBadgeProps {
  situacao: 'Aberto' | 'Pago'; // Tipos possíveis para a situação
}

const MovimentacaoBadge: React.FC<MovimentacaoBadgeProps> = ({ situacao }) => {
  // Determina a cor com base na situação
  const badgeColor = situacao === 'Aberto' ? 'success' : 'error'; // 'success' para verde, 'error' para vermelho

  return (
    <Badge
      color={badgeColor}
      badgeContent={situacao}
      showZero
    />
  );
};

export default MovimentacaoBadge;