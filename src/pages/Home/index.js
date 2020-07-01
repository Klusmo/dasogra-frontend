import React from "react";
import { Link } from 'react-router-dom';
import PageHeader from "../../components/PageHeader";

import "./style.css";
import imgs from "../../assets/galery/principal"

import { ReactComponent as FullLogo } from "../../assets/FullLogo.svg";

function Home(){
    return (
        <>
            <PageHeader />
            <section className="top-section">
                <div className="cover">
                    <div className="wrapper flex">
                        <div className="slogan">
                            <h1>Porque aqui sua sogra é doce!</h1>
                            <p>A mais de 15 anos adoçando Itabira e região</p>
                        </div>
            
                        <FullLogo />
                    </div>
                </div>
            </section>
                
            <section className="bottom-section wrapper">
                <h1>Conheça nosso trabalho</h1>
                <ul className="carousel">
                    <li>
                        <img src={imgs[0]} alt="ex01"/>
                    </li>
                    <li>
                        <img src={imgs[1]} alt="ex02"/>
                    </li>
                    <li>
                        <img src={imgs[2]} alt="ex03"/>
                    </li>
                    <li>
                        <img src={imgs[4]} alt="ex04"/>
                    </li>
                </ul>

                <Link className="button" to="/galery" >
                    Ver na Galeria
                </Link>
            </section>
            
        </>
    );
}

export default Home;