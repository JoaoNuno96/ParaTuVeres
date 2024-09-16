// eslint-disable-next-line no-unused-vars
import React from "react";
import "/src/main/news/news.style.css";
import {news} from "/src/assets/mjs/news.mjs";
import img1 from "/src/assets/images/cartao1.png";
import img2 from "/src/assets/images/cartao2.jpg";
import img3 from "/src/assets/images/cartao3.png";
import img4 from "/src/assets/images/cartao4.png";
import img5 from "/src/assets/images/cartao5.png";
import img6 from "/src/assets/images/cartao6.png";
import img7 from "/src/assets/images/cartao7.png";
import img8 from "/src/assets/images/cartao8.png";
import img9 from "/src/assets/images/cartao9.png";

export const News = (state) => {

  var id = state.id;
  var titulo = news[id].titulo;
  var texto = news[id].texto;
  var image;
  var linkExterno = news[id].linkExterno;

  if(id == "1")
  {
    image = img1;
  }
  else if(id == "2")
  {
    image = img2;
  }
  else if(id == "3")
  {
    image = img3;
  }
  else if(id == "4")
  {
    image = img4;
  }
  else if(id == "5")
  {
    image = img5;
  }
  else if(id == "6")
  {
    image = img6;
  }
  else if(id == "7")
  {
    image = img7;
  }
  else if(id == "8")
  {
    image = img8;
  }
  else if(id == "9")
  {
    image = img9;
  }
  

// 
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
