import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cruzeiro.css'
import { PieChart } from '@mui/x-charts/PieChart';
import api from "../../services/api.ts"

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
    api.get('/estatistica/porcentagem/cruzeiro')
    .then(response => {
      setStatistics(prevState => ({
        ...prevState,
        porcentagem: response.data[0]?.percentage || 0
      }));
    })
    .catch(error => console.error('Error fetching Solo Exposto data:', error));
  }, []);
  const now = statistics.porcentagem;
  return <ProgressBar animated now={now} label={`${now}%`} />;
}

function Cruzeiro() {
    const [statistics, setStatistics] = useState({
      totalSoloExposto: 0,
      totalNovaEdificacao: 0,
      totalSupressaoVegetacao: 0,
      totalExclusoes: 0,
      totalAlertas: 0,
      totalCorrecoesAtributo: 0,
      totalAlteracoes: 0,
      porcentagem: 0,
      finalizado: 0,
      emAndamento: 0,
      vazio: 0
    });

    useEffect(() => {
      const fetchStatistics = async () => {
        try {
          const [
            soloExpostoResponse,
            novaEdificacaoResponse,
            supressaoVegetacaoResponse,
            exclusoesResponse,
            alertasResponse,
            correcoesAtributoResponse,
            alteracoesResponse,
            porcentagemResponse,
            graficoResponse,
          ] = await Promise.all([
            api.get('/estatistica/soloexposto/cruzeiro'),
            api.get('/estatistica/edificacao/cruzeiro'),
            api.get('/estatistica/supressao/cruzeiro'),
            api.get('/estatistica/correcaoexcluir/cruzeiro'),
            api.get('/estatistica/correcaoalerta/cruzeiro'),
            api.get('/estatistica/correcaoatributo/cruzeiro'),
            api.get('/estatistica/correcaoalteracao/cruzeiro'),
            api.get('/estatistica/porcentagem/cruzeiro'),
            api.get('/estatistica/grafico/cruzeiro'),
          ]);

          setStatistics(prevState => ({
            ...prevState,
            totalSoloExposto: soloExpostoResponse.data[0]?.total || 0,
            totalNovaEdificacao: novaEdificacaoResponse.data[0]?.total || 0,
            totalSupressaoVegetacao: supressaoVegetacaoResponse.data[0]?.total || 0,
            totalExclusoes: exclusoesResponse.data[0]?.total || 0,
            totalAlertas: alertasResponse.data[0]?.total || 0,
            totalCorrecoesAtributo: correcoesAtributoResponse.data[0]?.total || 0,
            totalAlteracoes: alteracoesResponse.data[0]?.total || 0,
            porcentagem: porcentagemResponse.data[0]?.percentage || 0,
            finalizado: graficoResponse.data[0]?.finalized || 0,
            emAndamento: graficoResponse.data[0]?.inProgress || 0,
            vazio: graficoResponse.data[0]?.empty || 0
          }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchStatistics();
    }, []);
    const data = [
      { id: 0, value: statistics.finalizado, label: "finalizado" ,color: "pink"},
      { id: 1, value: statistics.emAndamento, label: "Em Andemento"},
      { id: 2, value: statistics.vazio, label: "Vazio"}
    ]
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

export default Cruzeiro;