import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './atibaia.css'

function Progress() {
  const now = 88;
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
      totalAlteracoes: 0
    });

    useEffect(() => {
      fetchData()
        .then(data => {
          setStatistics(data); // Atualiza o estado com os dados recebidos
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
          // Trate o erro conforme necessário
        });
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
        <div className="square"><a>Mapa/Gráfico</a></div>
      </div>
    </div>
  );
}

export default Atibaia;
