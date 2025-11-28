
import React from "react";
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import "./index.css";

function App() {
  return (
    <div className="cv-container">
      <div className="cv-content">
        <CabeceraCV />
        <Perfil />
        <Experiencia />
        <Educacion />
        <StackTecnologias />
      </div>
    </div>
  );
}

export default App;
