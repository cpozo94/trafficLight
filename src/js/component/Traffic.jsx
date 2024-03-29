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


  function colorChange() {
    if (colors.red === "selected") {
      setColor({ ...initialColors, yellow: "selected" });
    } else if (colors.yellow === "selected") {
      setColor({ ...initialColors, green: "selected" });
    } else if (colors.green === "selected") {
      setColor({ ...initialColors, purple: "selected" });
    } else if (colors.purple === "selected") {
      setColor({ ...initialColors, red: "selected" });
    }
  }
  
//el nuevo color, las propiedades las hemos metido en css
  const [Purple, setPurple] = useState(false);
  const NewColor = () => {
    setPurple(!Purple);
    const semaforoElement = document.querySelector(".semaforo");
    if (semaforoElement) {
      semaforoElement.style.height = Purple ? "550px" : "760px";
    }
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
        {Purple && (
          <div className={"light purple "}></div>
        )}
      </div>
      <button className="btn btn-dark mx-3 btn-lg" onClick={NewColor}>
        Nuevo color
      </button>
      <button className="btn btn-dark mx-3 btn-lg mt-1" onClick={colorChange}>Cambio de color</button>
    </div>
  );
};

export default Traffic;
