import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import './atibaia.css'

function Progress() {
  const now = 88;
  return <ProgressBar animated now={now} label={`${now}%`} />;
}

function Atibaia() {
  return (
    <div className="container">
      <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Estatística </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quantidade de Solo exposto</td>
                        <td>438</td>
                    </tr>
                    <tr>
                        <td>Quantidade de Nova Edificação</td>
                        <td>112</td>
                    </tr>
                    <tr>
                        <td>Quantidade de Supressão de Vegetação</td>
                        <td>371</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido para excluir algo</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido para fazer um alerta</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido a correção de um atributo de imagem</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido para fazer uma alteração</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div className="progress-container">
        <h4>Porcentagem de grades finalizadas</h4>
        <Progress />
      </div>
        <div className="map-container">
        <div id="statistics">
          
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 478 },
            { id: 1, value: 112 },
            { id: 2, value: 371 },
            { id: 3, value: 2},
            { id: 4, value: 2},
            { id: 5, value: 2},
            { id: 6, value: 0}
          ],
        },
      ]}
      width={400}
      height={400}
    />
    <h4>Gráfico de completude</h4>
      </div>
      
        <div className="square"><a>Mapa/Gráfico</a></div>
      </div>
    </div>
  );
}

export default Atibaia;
