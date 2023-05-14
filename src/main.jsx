import React from "react";
import ReactDOM from "react-dom/client";
import CardJuego from "./Componentes/CardJuego";
import NavBar from "./Componentes/NavBar";
import BannerIconos from "./Componentes/BannerIconos";
import Texto from "./Componentes/Texto";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <CardJuego />
    <Texto />
    <BannerIconos />
  </React.StrictMode>
);
