import React, { useState } from "react";

import "./style.css";
import galery from "../../assets/galery"
import PageHeader from "../../components/PageHeader";

function Galery(){
    const [galeryNameState, setGaleryNameState] = useState("Principal")
    const [galeryState, setGaleryState] = useState(galery.Principal);

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function GalerySwap(e) {
        const changeTo = e.target.value;
        if (changeTo !== galeryNameState) {
            const galeryName = document.querySelector("#galeryName")
            const galeryContent = document.querySelector("#galeryContent")
            
            galeryName.style.opacity = 0
            galeryContent.style.opacity = 0
            
            await sleep(500);
            setGaleryNameState(changeTo);
            setGaleryState(galery[changeTo]);
            galeryName.style.opacity = 1
            
            await sleep(1000);
            galeryContent.style.opacity = 1
        }
    }

    return (
        <>
            <PageHeader />
            <div className="galery-content">
                <aside>
                    <div className="wrapper">
                        <button onClick={ GalerySwap } value="Principal" >Principal</button>
                        <button onClick={ GalerySwap } value="Bombons" >Bombons </button>
                        <button onClick={ GalerySwap } value="Doces" >Doces </button>
                        <button onClick={ GalerySwap } value="Mesas" >Mesas </button>
                        <button onClick={ GalerySwap } value="Bolos" >Bolos </button>
                        <button onClick={ GalerySwap } value="Especiais" >Especiais </button>
                    </div>
                </aside>

                <div className="galery wrapper">
                    <h1 id="galeryName">{galeryNameState}</h1>
                    <ul id="galeryContent">
                        {galeryState.map( (image, index) => (
                            <li key={index}>
                                <img src={image} alt="ex1"/>
                            </li>   
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Galery;