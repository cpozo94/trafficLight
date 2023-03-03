
import React, { useState, useEffect } from "react";


//quiero crear una funcion que me genere un estado aleatorio de los tres posibles, por un lado para que cuando se cargue la página (useEffect) me salga uno y luego para que al pulsar un botón
//se vaya cambiando de uno a otro.
const luces = [
    "light red",
    "light yellow",
    "light green"
]

const aleat = luces [Math.floor(Math.random()* luces.length)]


const Myeffect = () => {
    
}

const Button = () => {

    const classAleatorio = () => {

        

        
    }
    return (

        <div class="button">
        <button class="btn btn-primary" type="button">Presiona</button>
            
</div>
    )






    

}

    


export default Button;