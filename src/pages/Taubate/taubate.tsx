import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './taubate.css'
import api from "../../services/api.ts"
import { PieChart } from '@mui/x-charts/PieChart';



function Progress() {
  const [statistics, setStatistics] = useState({
    porcentagem: 0
  });
  useEffect(() => {
    api.get('/estatistica/porcentagem/taubate')
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

function Taubate() {
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
            api.get('/estatistica/soloexposto/taubate'),
            api.get('/estatistica/edificacao/taubate'),
            api.get('/estatistica/supressao/taubate'),
            api.get('/estatistica/correcaoexcluir/taubate'),
            api.get('/estatistica/correcaoalerta/taubate'),
            api.get('/estatistica/correcaoatributo/taubate'),
            api.get('/estatistica/correcaoalteracao/taubate'),
            api.get('/estatistica/porcentagem/taubate'),
            api.get('/estatistica/grafico/taubate'),
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
            vazio: graficoResponse.data[0]?.empty || 0,
          }));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchStatistics();
    }, []);
    const data = [
      { id: 0, value: statistics.finalizado, label: "Finalizadas", color: "pink"},
      { id: 1, value: statistics.emAndamento, label: "Em Andamento" },
      { id: 2, value: statistics.vazio, label: "Vazias" }
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
                        <td>{statistics.totalAlteracoes}</td>
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
          margin={{ top: 10, bottom: 10, left: 100, right:100 }}
              series={[
                {
                  data,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
              ]}
              slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  padding: 40,
                },
              }}
              width={400} // Aumentando o tamanho do gráfico
              height={400} // Aumentando o tamanho do gráfico
            />
          </div>
        <h3>Gráfico de Grades</h3>
      </div>
      </div>
    </div>
  );
}

export default Taubate;
