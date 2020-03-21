import React from 'react'

function Home (){
   return(
   	<div className="main-page">
       <img className="img-home" src="main-home.png" alt="" />

       <p className="home-text">
       O Codeminio trata-se de um sistema de gestão de condomínios moderno que permite um maior controle tanto por parte da admnistração quanto dos moradores, facilitando a convivência entre todos e fornecendo serviços essenciais para vida em comunidade. Trata-se de um sistema que permite ao morador fazer todas as operações sem colocar um pé fora do seu apartamento.
       </p>

	  <section class="ftco-section">
    	<div class="container">
    		<div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h3>principais funcionalidades</h3>
          </div>
        </div>
    		<div class="row">
          <div class="col-md-6 services ftco-animate">
            <div class="d-block d-flex">
            <div class="icon d-flex justify-content-center align-items-center">
            		<img className="img-grid" src="quadra.png" alt="" />
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Reservar áreas</h3>
                <p>Permite reservar áreas e passar uma lista de convidados</p>
              </div>
            </div>
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<img className="img-grid" src="vaga.png" alt="" />
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Aluguel de vagas</h3>
                <p>Moradores que não utilizam suas vagas podem negociá-las com outros moradores</p>
              </div>
            </div> 
          </div>

          <div class="col-md-6 services ftco-animate">
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<img className="img-grid" src="aviso.png" alt="" />
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Reclamações e Avisos</h3>
                <p>Moradores podem fazer reclamações com o síndico e Administração pode enviar avisos, tudo virtualmente</p>
              </div>
            </div> 
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<img className="img-grid" src="liberacao.png" alt="" />
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Controle de acesso</h3>
                <p>Permite que o morador passe uma lista de visitantes para que tenham entrada liberada na portaria</p>
              </div>
            </div>    
          </div>
        </div>
    	</div>
    </section>

    </div>
   )
}
export default Home