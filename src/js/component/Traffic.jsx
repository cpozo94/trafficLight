import React from "react";

const colors = {
    red: "",
    yellow:"",
    green: "",
}

const Traffic = () => {


    return (
        <div className="container">
        <div className="semaforo"> 
            <div className="luces" id="red"></div>
            <div className="luces" id="orange"></div>
            <div className="luces" id="green"></div>
        </div>
        </div>

    )
}

export default Traffic;