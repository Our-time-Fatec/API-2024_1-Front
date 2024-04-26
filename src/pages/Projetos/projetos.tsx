import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
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

export default Projetos;