import React from 'react';
import "./about.css"

function about(): JSX.Element {
 

  return (
    <div className="container">
     <article>
  <section>
    <h1>Sobre a Visiona Tecnologia Espacial</h1>
    <p>Fundada em 2012, a Visiona Tecnologia Espacial é uma joint-venture entre a Embraer Defesa & Segurança e a Telebras, dedicada à integração de sistemas espaciais e à prestação de serviços baseados em satélites.</p>
    <p>Nossa empresa foi estabelecida para atender aos objetivos do Programa Espacial Brasileiro e às demandas do mercado, oferecendo soluções inovadoras e tecnologicamente avançadas.</p>
  </section>
  <figure>
    <img src="http://via.placeholder.com/1500x450?text=Image"/>
  </figure>
  <section>
  <h2>Nossa História</h2>
    <p>Desde o seu início, a Visiona tem desempenhado um papel crucial no avanço da tecnologia espacial no Brasil.</p>
    <p>Em 2017, fomos responsáveis pelo lançamento bem-sucedido do Programa do Satélite Geoestacionário de Defesa e Comunicações Estratégicas, o SGDC1, marcando um marco significativo no setor espacial brasileiro.</p>
    <p>Em 2023, alcançamos outro marco importante com o lançamento do VCUB1, o primeiro nanossatélite de observação da Terra e coleta de dados projetado por uma empresa brasileira.</p>
    <p>Este feito demonstrou nossa capacidade de inovação e liderança no desenvolvimento de tecnologia espacial avançada.</p>
  </section>
</article>
    </div>
  );
}

export default about;