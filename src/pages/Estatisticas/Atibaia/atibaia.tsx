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
                        <th>Coluna 1</th>
                        <th>Coluna 2</th>
                        <th>Coluna 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dado 1</td>
                        <td>Dado 2</td>
                        <td>Dado 3</td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div className="progress-container">
        <Progress />
      </div>
        <div className="map-container">
        <div className="square"></div>
      </div>
    </div>
  );
}

export default Atibaia;
