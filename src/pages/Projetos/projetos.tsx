import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./projetos.css"

function projetos(): JSX.Element {
 

  return (
    <div id='page-container'>
      <div className='photo-container'>
      <div className='container geral' id="atibaia">
        <Link to={'/atibaia'}>
      <Card className="imagem_demonstrativa">
      <Card.Img src={require('../../assets/atibaia_imagem.jpg')} alt="Card image" />
    </Card>
    </Link>
      </div>
      <div className='container geral' id="cruzeiro">
      <Link to={'/cruzeiro'}>
      <Card className="imagem_demonstrativa">
      <Card.Img src={require('../../assets/cruzeiro_imagem.jpg')} alt="Card image" />
    </Card>
    </Link>
      </div>
      <div className='container geral' id="taubate">
      <Link to={'/taubate'}>
      <Card className="imagem_demonstrativa">
      <Card.Img src={require('../../assets/taubate_imagem.jpg')} alt="Card image" />
    </Card>
    </Link>
      </div>
      </div>
    </div>
  );
}

export default projetos;