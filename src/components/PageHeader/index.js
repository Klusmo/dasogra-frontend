import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

function pageHeader(){
    return(
        <header className="pageHeader">
          <div className="wrapper">
            <Link to="/">
              <Logo />
            </Link>

            <div className="navigation">
              <Link className="nav-link" to="/galery">Galeria</Link>
              <Link className="nav-link" to="/about">Sobre</Link>
              <Link className="nav-link" to="/contact">Contato</Link>
            </div>
          </div>
        </header>
    );
}

export default pageHeader;