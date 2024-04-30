import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./projetos.css"

function Projetos(): JSX.Element {
  const reloadCount = 1;
  useEffect(() => {
    const reloadCount = parseInt(sessionStorage.getItem('reloadCount') || '0');
    if(reloadCount < 2) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  }, []);
  return (
    <div id='page-container'>
      <div className='photo-container'>

      <div className='container geral' id="atibaia">
        <div className='border'>
        <Link to={'/atibaia'} className='a'>
        <Card >
      <Card.Img variant="top" src={require('../../assets/atibaia_imagem.jpg')} className='imagem_demonstrativa' alt="Card image" />
      <Card.Body className="conteudo-com-borda">
        <Card.Title className='titulo'>Atibaia</Card.Title>
        <Card.Text className='text-card'>
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
      <Link to={'/cruzeiro'} className='a'>
      <Card className='teste'>
      <Card.Img variant="top" src={require('../../assets/cruzeiro_imagem.jpg')} className='imagem_demonstrativa' alt="Card image" />
      <Card.Body className="conteudo-com-borda">
        <Card.Title className='titulo'>Cruzeiro</Card.Title>
        <Card.Text className='text-card'>
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
      <Link to={'/taubate'} className='a'>
      <Card >
      <Card.Img variant="top" src={require('../../assets/taubate_imagem.jpg')} className='imagem_demonstrativa' alt="Card image" />
      <Card.Body className="conteudo-com-borda">
        <Card.Title className='titulo'>Taubaté</Card.Title>
        <Card.Text className='text-card'>
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

export default Projetos;