import React from "react";
import { useHistory } from "react-router-dom";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdCall, MdMail, MdCheck } from "react-icons/md";

import "./style.css"
import PageHeader from "../../components/PageHeader"

function Contact(){
    const history = useHistory();


    async function HandleSubmit(e) {
        e.preventDefault();
        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        document.body.classList.add("processing")
        document.querySelector(".submit button").classList.add("processing")
        await sleep(2000)
        
        const check = document.querySelector(".check")
        check.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 250
        })
        check.style.opacity = 1;
        
        document.body.classList.remove("processing")
        document.querySelector(".submit button").classList.remove("processing")

        await sleep(1000);
        history.push("/");
    }
    return (
        <>
            <PageHeader />
            <div className="contact-content wrapper">
                <div>
                    <h1>Entre em contato conosco</h1>
                    <div className="medias">
                        <h1>Acesse:</h1>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/sograconfeitaria-109951690752169/">
                                    <FaFacebook size={24} className="icons" color="#cfada2" />
                                    fb.com/sograconfeitaria
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/sograconfeitaria/">
                                    <FaInstagram size={24} className="icons" color="#cfada2" />
                                    @sograconfeitaria
                                </a>
                            </li>
                            <li>
                                <FaWhatsapp size={24} className="icons" color="#cfada2" />
                                <span>(31) 98852-4086</span>
                            </li>
                            <li>
                                <MdCall size={24} className="icons" color="#cfada2" />
                                <span>(31) 3834-1141</span>
                            </li>
                            <li>
                                <a href="mailto:dasogra.confeitaria@gmail.com">
                                    <MdMail size={24} className="icons" color="#cfada2" />
                                    dasogra.confeitaria@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h1>Mande um email por aqui</h1>
                    <form onSubmit={HandleSubmit} >
                        <p>Nome:</p>
                        <input type="text" />

                        <p>Email:</p>
                        <input type="email" />

                        <p>Mensagem:</p>
                        <textarea />
                        <div className="submit">
                            <button type="submit">Enviar</button>
                            <MdCheck className="check" size={40} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;