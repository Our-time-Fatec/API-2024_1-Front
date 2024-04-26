import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./projetos.css"

function projetos(): JSX.Element {
 

  return (
    <div id='page-container'>
      <div className='photo-container'>

      <div className='container geral' id="atibaia">
        <div className='border'>
        <Link to={'/atibaia'}>
        <Card >
      <Card.Img variant="top" src={require('../../assets/atibaia_imagem.jpg')} className='imagem_demonstrativa' alt="Card image" />
      <Card.Body className="conteudo-com-borda">
        <Card.Title>Meu nome</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    </Link>
    </div>
      </div>
      <div className='container geral' id="cruzeiro">
        <div className='border'>
      <Link to={'/cruzeiro'}>
      <Card >
      <Card.Img variant="top" src={require('../../assets/cruzeiro_imagem.jpg')} className='imagem_demonstrativa' alt="Card image" />
      <Card.Body className="conteudo-com-borda">
        <Card.Title>Meu nome</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
      </div>
      <div className='container geral' id="taubate">
        <div className='border'>
      <Link to={'/taubate'}>
      <Card >
      <Card.Img variant="top" src={require('../../assets/taubate_imagem.jpg')} className='imagem_demonstrativa' alt="Card image" />
      <Card.Body className="conteudo-com-borda">
        <Card.Title>Meu nome</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    </div>
      </div>
      </div>
    </div>
  );
}

export default projetos;