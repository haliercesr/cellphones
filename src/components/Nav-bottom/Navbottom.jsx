import React from "react";
import "./navbottom.css"
import logo1 from "../../img-cp2/phone-logo.png"
import logo2 from "../../img-cp2/logo-camara-comercio.png"
import logo3 from "../../img-cp2/logo-fiscal.png"

const Navbottom =(props)=>{

    return <div className="Conteiner-down">
         <div className="Conteiner-down-imagen">
         <img src={logo1}></img>
        </div>
        <div className="Conteiner-down1">
        SOBRE CELLPHONES
        <p>Nosotros</p>
        <p>Condicion de los equipos</p>
        <p>Preguntas frecuentes</p>
        </div>
        <div className="Conteiner-down1">
        TERMINOS
        <p>Politica de privacidad</p>
        <p>Terminos y condiciones</p>
        </div>
        <div className="Conteiner-down1">
        CONTACTO
        <p>ventas@cellphones.com</p>
        </div>
        <div className="Conteiner-down1">
        <img src={logo2}></img>
        </div>
        <div className="Conteiner-down1">
        <img src={logo3}></img>
        </div>
       
    </div>
}

export default Navbottom