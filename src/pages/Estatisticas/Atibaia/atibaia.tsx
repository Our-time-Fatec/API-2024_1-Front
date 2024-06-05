import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import './atibaia.css'
import api from "../../../services/api.ts"

const data = [
  { id: 0, value: 478, label: "facil", color: "pink"},
  { id: 1, value: 112, label: "murilo" },
  { id: 2, value: 371, label: "Jesus" }
]

function Progress() {
  const [statistics, setStatistics] = useState({
    porcentagem: 0
  });
  useEffect(() => {
    api.get('/estatistica/porcentagem/atibaia')
    .then(response => {
      setStatistics(prevState => ({
        ...prevState,
        porcentagem: response.data[0]?.percentage || 0
      }));
    })
    .catch(error => console.error('Error fetching Solo Exposto data:', error));
  })
  const now = statistics.porcentagem;
  return <ProgressBar animated now={now} label={`${now}%`} />;
}

function Atibaia() {
    const [statistics, setStatistics] = useState({
      totalSoloExposto: 0,
      totalNovaEdificacao: 0,
      totalSupressaoVegetacao: 0,
      totalExclusoes: 0,
      totalAlertas: 0,
      totalCorrecoesAtributo: 0,
      totalAlteracoes: 0,
      porcentagem: 0
    });

    useEffect(() => {
      api.get('/estatistica/soloexposto/atibaia')
        .then(response => {
          setStatistics(prevState => ({
            ...prevState,
            totalSoloExposto: response.data[0]?.total || 0
          }));
        })
        .catch(error => console.error('Error fetching Solo Exposto data:', error));
  
      api.get('/estatistica/edificacao/atibaia')
        .then(response => {
          setStatistics(prevState => ({
            ...prevState,
            totalNovaEdificacao: response.data[0]?.total || 0
          }));
        })
        .catch(error => console.error('Error fetching Nova Edificação data:', error));
        
        api.get('/estatistica/supressao/atibaia')
        .then(response => {
          setStatistics(prevState => ({
            ...prevState,
            totalSupressaoVegetacao: response.data[0]?.total || 0
          }));
        })
        .catch(error => console.error('Error fetching Solo Exposto data:', error));
        api.get('/estatistica/correcaoexcluir/atibaia')
        .then(response => {
          setStatistics(prevState => ({
            ...prevState,
            totalExclusoes: response.data[0]?.total || 0
          }));
        })
        .catch(error => console.error('Error fetching Solo Exposto data:', error));
        api.get('/estatistica/correcaoalerta/atibaia')
        .then(response => {
          setStatistics(prevState => ({
            ...prevState,
            totalAlertas: response.data[0]?.total || 0
          }));
        })
        .catch(error => console.error('Error fetching Solo Exposto data:', error));
        api.get('/estatistica/correcaoatributo/atibaia')
        .then(response => {
          setStatistics(prevState => ({
            ...prevState,
            totalCorrecoesAtributo: response.data[0]?.total || 0
          }));
        })
        .catch(error => console.error('Error fetching Solo Exposto data:', error));
        api.get('/estatistica/correcaoalteracao/atibaia')
        .then(response => {
          setStatistics(prevState => ({
            ...prevState,
            totalAlteracoes: response.data[0]?.total || 0
          }));
        })
        .catch(error => console.error('Error fetching Solo Exposto data:', error));
    }, []);
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
                        <td>{statistics.totalSoloExposto}</td>
                    </tr>
                    <tr>
                        <td>Quantidade de Nova Edificação</td>
                        <td>{statistics.totalNovaEdificacao}</td>
                    </tr>
                    <tr>
                        <td>Quantidade de Supressão de Vegetação</td>
                        <td>{statistics.totalSupressaoVegetacao}</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido para excluir algo</td>
                        <td>{statistics.totalExclusoes}</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido para fazer um alerta</td>
                        <td>{statistics.totalAlertas}</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido a correção de um atributo de imagem</td>
                        <td>{statistics.totalCorrecoesAtributo}</td>
                    </tr>
                    <tr>
                        <td>Quantas vezes foi pedido para fazer uma alteração</td>
                        <td>{statistics.totalAlteracoes}</td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div className="progress-container">
        <h4>Porcentagem de grades finalizadas</h4>
        <Progress />
      </div>
      <div className="map-container">
        <div id="statistics" style={{ margin: '0 auto' }}>
        <div className="chart-container">
          <PieChart
          series={[
            {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          width={400}
          height={400}
          />
          </div>
        <h3>Gráfico de completude</h3>
      </div>
      </div>
    </div>
  );
}

export default Atibaia;
