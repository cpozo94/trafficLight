import React, { useState } from "react";

const initialColors = {
  red: "",
  yellow: "",
  green: "",
};

const Traffic = () => {
  const [colors, setColor] = useState(initialColors);


  //la condición para que la clase selected solo se vea afectada para el color que selecciono.
  const handleClick = (color) => {
    setColor({
      red: color === "red" ? "selected" : "",
      yellow: color === "yellow" ? "selected" : "",
      green: color === "green" ? "selected" : "",
    });
  };


  // pongo de base "light red + colors.red, que está vacío, por lo que por defecto de primeras tendría el color.
  return (
    <div className="container">
      <div className="semaforo">
        <div
          className={"light red " + colors.red}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={"light orange " + colors.yellow}
          onClick={() => handleClick("yellow")}
        ></div>
        <div
          className={"light green " + colors.green}
          onClick={() => handleClick("green")}
        ></div>
      </div>
    </div>
  );
};

export default Traffic;
