import React from "react";

export const Footer = () =>{
    return(
        <div>
                {/* <!-- RODAPE INICIO --> */}
                <footer className="d-flex flex-wrap justify-content-between text-center align-items-center py-3 bg-dark">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <p className="text-white fw-bold">Para tu veres</p>
                        <p className="text-white fw-light">Relembrando a todos os fofoqueiros que este site está online da 00:00 até às 24:00.</p>
                    </div>
                    </div>
                </div>
                </footer>
                {/* <!-- RODAPE FIM --> */}
        </div>
    );

}