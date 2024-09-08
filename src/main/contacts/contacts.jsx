// eslint-disable-next-line no-unused-vars
import React from "react";
import "./contacts.style.css";

export const Contacts = () => {
    return (
      <div>
         {/* <!-- CONTAINER INICIO --> */}
        <div id="firstContainer" className="container" >
          <div className="row">
            {/* <!-- TEXTO CONTACTOS INCIO --> */}
            <div className="col">
              <div className="jumbotron">
                <h1 className="display-4 text-white">Contactos</h1>
                <p className="lead text-white">O feedback é muito importante para nós, por favor preencha o formulário</p>
                <hr id="lineOne" className="my-4" />
                <p className="text-white">Para mais informações, não hesite em questionar.</p>
                <p className="lead mt-4">
                  <a className="btn btn-outline-light" href="/" role="button">Voltar</a>
                </p>
              </div>
            </div>
            {/* <!-- TEXTO CONTACTOS FIM --> */}

            {/* <!-- FORMULARIO INICIO --> */}
            <div className="col">
              <form>
                <div id="formG" className="form-group" >
                  <label for="exampleInputEmail1"></label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite Nome" />
                </div>
                <div className="form-group mt-3">
                  <label for="exampleFormControlTextarea1"></label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite o seu feedback"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light mt-3 btn-lg">Enviar</button>
              </form>
            </div>
            {/* <!-- FORMULARIO FIM --> */}
            
          </div>
        </div>
        {/* <!-- CONTAINER FIM --> */}
      </div>  
    );
};
