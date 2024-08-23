// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.style.css";
import {navegacaoLateral} from "../assets/mjs/script.mjs";
import Logo from "../assets/logos/logo.svg";

export const Header = () => {
    return (
      <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" onClick={()=>navegacaoLateral("home")}>
                {/* Para tu veres */}
                <img src={Logo} alt="Logo" height="30px" />
              </a>
              {/* <!-- HAMBURGO BUTTON DROP DOWN INICIO --> */}
              <button id="buttonHomeBar" className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Para tu veres</h5>
                  <button id="closeButton" type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <button className="btn btn-outline-dark nav-link" aria-current="page" onClick={()=>navegacaoLateral("home")}>Home</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-outline-dark nav-link" aria-current="page" onClick={()=>navegacaoLateral("comecar")}>Começar</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-outline-dark nav-link" aria-current="page" onClick={()=>navegacaoLateral("noticias")}>Notícias</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-outline-dark nav-link" aria-current="page" onClick={()=>navegacaoLateral("fofoquices")}>Fofoquices</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-outline-dark nav-link" aria-current="page" onClick={()=>navegacaoLateral("formulario")}>Formulário</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-outline-dark nav-link" aria-current="page" onClick={()=>navegacaoLateral("contactos")}>Contactos</button>
                    </li>
                    
                  </ul>
                </div>
              </div>
              {/* <!-- HAMBURGO BUTTON DROP DOWN INICIO --> */}
            </div>
          </nav>
      </div>  
    );
};
