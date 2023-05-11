import React from "react";
import ReactDOM from "react-dom/client";
import CardJuego from "./Componentes/CardJuego";
import NavBar from "./Componentes/NavBar";
import BannerIconos from "./Componentes/BannerIconos";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <CardJuego />
    <BannerIconos />
  </React.StrictMode>
);
