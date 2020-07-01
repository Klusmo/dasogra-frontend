import React from "react";

import PageHeader from "../../components/PageHeader"
import "./style.css"
import avatar from "../../assets/avatar.jpg"

function About(){
    return (
        <>
            <PageHeader />
            <div className="about-content">
                <div className="wrapper">
                    <div className="top">
                        <div className="who">
                            <h1>Quem Sou?</h1>
                            <p>
                                Me chamo Rosana Ribeiro Figueiredo e trabalho com doces, bombons e bolos a mais de 15 anos em Itabira e Região. 
                            </p>
                            <p>
                                Comecei minha carreira vendendo meus doces em pequenos estabelecimentos e para funcionários em comércios locais. 
                                Com o tempo comecei a fazer encomendas das mais diversas, para festas 
                                de aniversário, casamentos, cerimoniais e buffets, principalmente em parceria com o Buffet Guts.
                            </p>
                        </div>
                        <img src={avatar} alt="Avatar"/>
                    </div>
                    <div className="mission">
                    <h1>Missão</h1>
                    <p>
                        Produzir e fornecer produtos de qualidade, fidelizando e encantando nossos clientes e fornecedores.
                    </p>
                </div>
                </div>
            </div>
        </>
    );
}

export default About;