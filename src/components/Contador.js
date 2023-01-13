import React from "react";
import '../styles/Contador.css'

const Contador = ({ numClics }) =>{
    return(
        <div className="contador">
            {numClics}
        </div>
    )
}

export {Contador}