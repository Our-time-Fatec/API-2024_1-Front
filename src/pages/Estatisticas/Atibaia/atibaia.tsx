import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './atibaia.css'

function Progress() {
  const now = 60;
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
                        <td>Quantidade de Quadriculas</td>
                        <td>328</td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div className="progress-container">
        <h4>Porcentagem do progresso da entrega</h4>
        <Progress />
      </div>
        <div className="map-container">
        <div className="square"></div>
      </div>
    </div>
  );
}

export default Atibaia;
