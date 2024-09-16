// eslint-disable-next-line no-unused-vars
import React from "react";
// import "/src/main/news/news.style.css";
// import {news} from "/src/assets/mjs/news.mjs";

export const News = (state) => {

  var id = state.id;

  // var titulo = news[id].titulo;
  // var texto = news[id].texto;
  // var image = news[id].image;
  // var linkExterno = news[id].linkExterno;


    return (
      <h1>ola {id}</h1>
      // <div>
      //    {/* <!-- CONTAINER INICIO --> */}
      //   <div id="containerFirst" className="container">
          
      //     <div className="row">
      //       <div className="col">
      //         <div className="jumbotron">
      //           <h1 className="display-4 text-white">{titulo}</h1>
      //           <p className="lead text-white">{texto}</p>
      //           <hr id="line" className="my-4" />
      //           <p className="text-white">Para mais informações, clique na ligação abaixo</p>
      //           <p className="lead mt-4">
      //             <a className="btn btn-outline-light btn-lg" href={linkExterno} target="_blank" role="button">Noticia</a>
      //             <a className="btn btn-outline-light" href="/" role="button">Voltar</a>
      //           </p>
      //         </div>
      //       </div>

      //       <div className="col">
      //         <img src={image} alt="Imagem Noticia" height="300px" />
      //       </div>
            
      //     </div>
      //   </div>
      //   {/* <!-- CONTAINER INICIO --> */}

      // </div>  
    );
};
