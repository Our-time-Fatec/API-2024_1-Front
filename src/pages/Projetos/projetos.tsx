import React from 'react';
import Card from 'react-bootstrap/Card';
import "./projetos.css"

function projetos(): JSX.Element {
 

  return (
    <div id='page-container'>
      <div className='container' id="atibaia">
      <Card className="imagem_demonstrativa">
      <Card.Img src={require('../../assets/atibaia_imagem.jpg')} alt="Card image" />
    </Card>
      </div>
      <div className='container' id="cruzeiro">
      <Card className="imagem_demonstrativa">
      <Card.Img src={require('../../assets/cruzeiro_imagem.jpg')} alt="Card image" />
    </Card>
      </div>
      <div className='container' id="taubate">
      <Card className="imagem_demonstrativa">
      <Card.Img src={require('../../assets/taubate_imagem.jpg')} alt="Card image" />
    </Card>
      </div>
    </div>
  );
}

export default projetos;