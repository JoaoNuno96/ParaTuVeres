// eslint-disable-next-line no-unused-vars
import React from "react";
import "./home.style.css";
import cartao1Img from "/src/assets/images/cartao1.png";
import cartao2Img from "/src/assets/images/cartao2.jpg";
import cartao3Img from "/src/assets/images/cartao3.png";
import cartao4Img from "/src/assets/images/cartao4.png";
import cartao5Img from "/src/assets/images/cartao5.png";
import cartao6Img from "/src/assets/images/cartao6.png";
import cartao7Img from "/src/assets/images/cartao7.png";
import cartao8Img from "/src/assets/images/cartao8.png";
import cartao9Img from "/src/assets/images/cartao9.png";

import{navegacao,registarFofoca,receberFofocas,recarregarWindow,retornarIndexNoticias,routeSourcePath} from "../../assets/mjs/script.mjs";

addEventListener("DOMContentLoaded",receberFofocas);

export const Home = () => {
    return (
      <div>

          {/* <!-- JUMBOTRON DE BOAS VINDAS - INICO --> */}
          <div id="first" className="container text-center">
            
            {/* <!-- COMECAR - INICIO --> */}
            <div className="row" id="home">
              <div className="col">
                <div className="jumbotron">
                  <h1 className="text-white display-4">Muito Bem-vindo!</h1>
                  <p className="text-white lead">Autotítulado como o website mais fofoqueiro, na nossa pagína temos as fofocas mais frescas, e interessantes.
                    Caso, esteja curioso em saber as últimas novidades, ou em escrever alguma fofoca clique em uma das seguintes opções.</p>
                  <hr className="my-4"/>
                  <p className="text-white">O nosso site tem um sistema de fidedignidade, que faz com que os utilizadores tenham liberade de postar algo sem serem sujeitos a comentários como "és mesmo cusco", ou "não tens vergonha de ser assim?".</p>
                  <p className="text-white lead mt-4">
                    <a className="btn btn-outline-light btn-lg" onClick={()=>navegacao("comecar")} role="button">Começar</a>
                  </p>
                </div>
              </div>
              
            </div>
            {/* <!-- COMECAR - FIM --> */}

            {/* <!-- CARD PARA DECIDIR - INICIO --> */}
            <div className="row" id="questao">

              <div className="col">
                <h5 className="display-6 text-white" >Escolha uma das seguintes opções.</h5>
                <p className="card-text text-white">Os utilizadores vão conseguir escolher entre as ultimas noticias, ou poderam aceder à area dos posts onde poderam ler e criar post de fofocas pessoais. </p>
                <div className="row">
                  <div className="col-6">
                    <a onClick={()=>navegacao("noticias")} className="btn btn-outline-light">Deixa-me ver as noticias!</a>
                  </div>
                  <div className="col-6">
                    <a onClick={()=>navegacao("fofoquices")} className="btn btn-outline-light">Queria ver umas fofoquices.</a>
                  </div>
                </div>
                
              </div>
            </div>
            {/* <!-- CARD PARA DECIDIR - FIM --> */}

          </div>
          {/* <!-- JUMBOTRON DE BOAS VINDAS - FIM --> */}


          <div id="news" className="display-6 text-center text-white" >Notícias</div> 
          {/* <!-- CONJUNTO CARTOES INICO --> */}
          <div className="container text-center">
            <hr className="my-4" />
            {/* <!-- LINHA 1 INICO --> */}
            <div className="row">

              {/* <!-- NOTICIA 1 INICIO--> */}
              <div className="col">
                <div id="cardNewsOne" className="card border-dark mb-3">
                  <img className="card-img-top" src={cartao1Img} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Karoline Lima se pronuncia nas redes sociais após Eder Militão pedir guarda unilateral da filha</p>
                    <a href="https://www.google.com/" className="btn btn-outline-dark">Ver mais</a>
                  </div>
                </div>
              </div>
              {/* <!-- NOTICIA 1 FIM --> */}

              {/* <!-- NOTICIA 2 INICIO--> */}
              <div className="col">
                <div id="cardNewsTwo" className="card">
                  <img className="card-img-top" src={cartao2Img} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Graciele e Zezé revelam nomes escolhidos para o bebê</p>
                    <a href="/news2" className="btn btn-outline-dark">Ver mais</a>
                  </div>
                </div>
              </div>
              {/* <!-- NOTICIA 2 FIM--> */}

              {/* <!-- NOTICIA 3 INICIO--> */}
              <div className="col">
                <div id="cardNewsThree" className="card">
                  <img className="card-img-top" src={cartao3Img} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Fernanda Garay anuncia gravidez próximo aos jogos olímpicos de paris</p>
                    <a href="/news3" className="btn btn-outline-dark">Ver mais</a>
                  </div>
                </div>
              </div>
              {/* <!-- NOTICIA 3 FIM--> */}

              </div>
              {/* <!-- LINHA 1 FIM --> */}

              {/* <!-- LINHA 2 INICO --> */}
              <div className="row mt-5">

                {/* <!-- NOTICIA 4 INICIO--> */}
                <div className="col">
                  <div id="cardNewsFour" className="card">
                    <img className="card-img-top" src={cartao4Img} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Rica! Saiba o valor do look de Mavie para ir ao instituto de Neymar</p>
                      <a href="/news4" className="btn btn-outline-dark">Ver mais</a>
                    </div>
                  </div>
                </div>
                {/* <!-- NOTICIA 4 FIM--> */}

                {/* <!-- NOTICIA 5 INICIO--> */}
                <div className="col">
                  <div id="cardNewsFive" className="card">
                    <img className="card-img-top" src={cartao5Img} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Finalmente! Ouça a verdadeira voz de Maya Massafera após a transição</p>
                      <a href="/news5" className="btn btn-outline-dark">Ver mais</a>
                    </div>
                  </div>
                </div>
                {/* <!-- NOTICIA 5 FIM--> */}

                {/* <!-- NOTICIA 6 INICIO--> */}
                <div className="col">
                  <div id="cardNewsSix" className="card" >
                    <img className="card-img-top" src={cartao6Img} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Influenciador promete gasolina de graça e causa confusão em Minas Gerais</p>
                      <a href="/news6" className="btn btn-outline-dark" >Ver mais</a>
                    </div>
                  </div>
                </div>
                {/* <!-- NOTICIA 6FIM--> */}

              </div>
              {/* <!-- LINHA 2 FIM --> */}

              {/* <!-- LINHA 3 INICIO --> */}
              <div className="row mt-5">

                {/* <!-- NOTICIA 7 INICIO--> */}
                <div className="col">
                  <div id="cardNewsSeven" className="card">
                    <img className="card-img-top" src={cartao7Img} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Nicole Bahls é perseguida por sua vaca e diverte seguidores: 'Para, Anitta'</p>
                      <a href="/news7" className="btn btn-outline-dark" >Ver mais</a>
                    </div>
                  </div>
                </div>
                {/* <!-- NOTICIA 7 FIM--> */}

                {/* <!-- NOTICIA 8 INICIO--> */}
                <div className="col">
                  <div id="cardNewsEight" className="card">
                    <img className="card-img-top" src={cartao8Img} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Hugh Jackman e Ryan Reynolds participam do Podpah e elogiam brasileiros: 'Sabem viver'</p>
                      <a href="/news8" className="btn btn-outline-dark">Ver mais</a>
                    </div>
                  </div>
                </div>
                {/* <!-- NOTICIA 8 FIM--> */}

                {/* <!-- NOTICIA 9 INICIO--> */}
                <div className="col">
                  <div id="cardNewsNine" className="card">
                    <img className="card-img-top" src={cartao9Img} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Marina Ruy Barbosa chama atenção por aliança de noivado milionária em lançamento de novo livro de Aguinaldo Silva. Fotos!</p>
                      <a href="/news9" className="btn btn-outline-dark" >Ver mais</a>
                    </div>
                  </div>
                </div>
                {/* <!-- NOTICIA 9 FIM--> */}
              </div>
              {/* <!-- LINHA 3 FIM -->   */}
          </div>
          {/* <!-- CONJUNTO CARTOES FIM --> */}
          <div className="container text-center">
              <div className="row">
                <div id="comeBack" className="col">
                  <a onClick={()=>navegacao("comecar")} className="btn btn-outline-light btn-lg">Voltar</a>
                </div>
              </div>
          </div>



          {/* <!-- HISTÓRIAS DE FOFOCAS - INICIO -->  */}
          <div className="container text-center">
            <div className="row" id="historiaUsers">

              <div className="col">
                <h5 className="display-6 text-white" >Histórias de Utilizadores.</h5>

                {/* <!-- TABELA - INICIO--> */}
                <table id="tableHistoria" className="table ">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Histórias</th>
                    </tr>
                  </thead>
                  <tbody id="tabela">
                    <tr>
                      <td>A dona Deolinda viu piscou o olho ao senhor José.</td>
                    </tr>
                    <tr>
                      <td>O Francisco andou nos namoricos com a Raquel.</td>
                    </tr>
                  </tbody>
                </table >
                {/* <!-- TABELA - FIM--> */}
              </div>

              <div className="row mt-2">
                <div className="col">
                  <a onClick={()=>navegacao("formulario")}  className="btn btn-outline-light">Escrever uma história</a>
                </div>
                <div className="col">
                  <a onClick={recarregarWindow} className="btn btn-outline-light">Atualizar tabela</a>
                </div>
                <div className="col">
                  <a onClick={()=>navegacao("noticias")} className="btn btn-outline-light">Voltar</a>
                </div>
              </div>

            </div>
          </div>
          {/* <!-- HISTÓRIAS DE FOFOCAS - FIM --> */}

          <div id="formulario" className="container" >
          </div>
          {/* <!-- FORMULARIO  DE FOFOCAS - INICIO --> */}
          <div className="container text-center">

            <div className="row">
              <div className="col">
                <h5 className="display-6 text-white" >Formulário</h5>
                {/* <!-- FORMULARIO - INICIO--> */}

                <form>
                  <div className="form-group">
                    <label htmlFor="nomeHistoria"></label>
                    <input type="email" className="form-control" id="nomeHistoria" placeholder="Digite o seu nome" />
                  
                  </div>
                  <div className="form-group">
                    <label htmlFor="historia"></label>
                    <textarea className="form-control" id="historia" rows="3" placeholder="Escreva a sua história"></textarea>
                  </div>

                  <div className="col mt-3">
                    <a onClick={()=>navegacao("fofoquices")} className="btn btn-outline-light">Voltar</a>
                  </div>

                  <div className="col mt-3">
                    <a onClick={registarFofoca} className="btn btn-outline-light btn-lg">Enviar</a>
                  </div>


                </form>
                
                {/* <!-- FORMULARIO - FIM--> */}
              </div>
            </div>
          </div>
          {/* // <!-- FORMULARIO  DE FOFOCAS - FIM --> */}

          {/* <!-- CONTACTOS - INICIO --> */}
          <div id="forContact" className="container text-center">
            <div className="row" id="questao">

              <div className="col mt-4">
                <h5 className="display-6 text-light" >Contactos</h5>
                <p className="card-text text-light">Para mais informações clique na ligação abaixo.</p>
                <div className="row">
                  <div className="col">
                    <a href="/contact" className="btn btn-outline-light mb-5">Contactos</a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          {/* <!-- CONTACTOS - FIM --> */}

      </div>
      
  );
};
