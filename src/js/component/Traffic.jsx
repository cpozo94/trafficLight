import React, { useState, useEffect } from "react";

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

  //usamos useEffect para que al cargar la página uno de los colores esté definido.
  useEffect(() => {
    setColor({
      red: "",
      yellow: "selected",
      green: "",
    });
  }, []);

  // pongo de base "light red + colors.red, que está vacío, por lo que por defecto de primeras tendría
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
      <button>Aleatorio</button>
      <button>Nuevo color</button>
    </div>
  );
};

export default Traffic;
