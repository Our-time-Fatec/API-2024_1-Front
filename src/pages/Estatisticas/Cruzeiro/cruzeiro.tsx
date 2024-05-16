import React from 'react';
import './cruzeiro.css'
import { PieChart } from '@mui/x-charts/PieChart';



function Cruzeiro() {
  return (
    <div id='page-container'>
      <div id='text-box'>
      <h1>Bem-vindo à nossa página de estatísticas sobre Cruzeiro!</h1>
      <p>Aqui você encontrará informações sobre elas.</p>
      </div>
      <div id="statistics">
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
      </div>
    </div>
  );
}

export default Cruzeiro;
