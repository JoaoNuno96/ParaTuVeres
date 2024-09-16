// eslint-disable-next-line no-unused-vars
import React from "react";
import "/src/main/news/news.style.css";
import {news1,news2,news3,news4,news5,news6,news7,news8,news9} from "/src/assets/mjs/news.mjs";

export const News = (state) => {

  var id = state.id;

  var titulo;
  var texto;
  var image;
  var linkExterno;

  if(id == 1)
  {
    titulo = news1.titulo;
    texto = news1.texto;
    image = news1.image;
    linkExterno = news1.linkExterno;
  }
  else if(id == 2)
  {
    titulo = news2.titulo;
    texto = news2.texto;
    image = news2.image;
    linkExterno = news2.linkExterno;
  }
  else if(id == 3)
  {
    titulo = news3.titulo;
    texto = news3.texto;
    image = news3.image;
    linkExterno = news3.linkExterno;
  }
  else if(id == 4)
  {
    titulo = news4.titulo;
    texto = news4.texto;
    image = news4.image;
    linkExterno = news4.linkExterno;
  }
  else if(id == 5)
  {
    titulo = news5.titulo;
    texto = news5.texto;
    image = news5.image;
    linkExterno = news5.linkExterno;
  }
  else if(id == 6)
  {
    titulo = news6.titulo;
    texto = news6.texto;
    image = news6.image;
    linkExterno = news6.linkExterno;
  }
  else if(id == 7)
  {
    titulo = news7.titulo;
    texto = news7.texto;
    image = news7.image;
    linkExterno = news7.linkExterno;
  }
  else if(id == 8)
  {
    titulo = news8.titulo;
    texto = news8.texto;
    image = news8.image;
    linkExterno = news8.linkExterno;
  }
  else if(id == 9)
  {
    titulo = news9.titulo;
    texto = news9.texto;
    image = news9.image;
    linkExterno = news9.linkExterno;
  }

    return (
      <div>
         {/* <!-- CONTAINER INICIO --> */}
        <div id="containerFirst" className="container">
          
          <div className="row">
            <div className="col">
              <div className="jumbotron">
                <h1 className="display-4 text-white">{titulo}</h1>
                <p className="lead text-white">{texto}</p>
                <hr id="line" className="my-4" />
                <p className="text-white">Para mais informações, clique na ligação abaixo</p>
                <p className="lead mt-4">
                  <a className="btn btn-outline-light btn-lg" href={linkExterno} target="_blank" role="button">Noticia</a>
                  <a className="btn btn-outline-light" href="/" role="button">Voltar</a>
                </p>
              </div>
            </div>

            <div className="col">
              <img src={image} alt="Imagem Noticia" height="300px" />
            </div>
            
          </div>
        </div>
        {/* <!-- CONTAINER INICIO --> */}

      </div>  
    );
};
