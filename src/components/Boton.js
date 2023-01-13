import React from "react";
import '../styles/Boton.css'

const Boton = ({texto, botonClic, manejarClic}) => {
    return (
        <button className={botonClic ? "boton-clic" : "boton-reset"}
        onClick={manejarClic}>

            {texto} 
        </button>
    )
}

export {Boton}