import React from 'react';
import './cruzeiro.css'
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 478},
  { id: 1, value: 112 },
  { id: 2, value: 371},
]

function Cruzeiro() {
  return (
    <div id='page-container'>
      <div id='text-box'>
      <h1>Bem-vindo à nossa página de estatísticas sobre Cruzeiro!</h1>
      <p>Aqui você encontrará informações sobre elas.</p>
      </div>
    </div>
  );
}

export default Cruzeiro;
