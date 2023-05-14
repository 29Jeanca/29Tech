import "../Estilos/CardJuego.css";
import "../Estilos/EstiloGlobal.css";
import axios from "axios";
import { useState, useEffect } from "react";
function CardJuego() {
  const [juegos, setJuegos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.rawg.io/api/games?key=9d1b1f5675c1442fa5897689ba8a4dd4"
      );
      setJuegos(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const obtenerJuegosAleatorios = () => {
    const numJuegos = juegos.length;
    if (numJuegos < 1) {
      return juegos;
    } else {
      const indicesAleatorios = [];
      while (indicesAleatorios.length < 1) {
        const indice = Math.floor(Math.random() * numJuegos);
        if (!indicesAleatorios.includes(indice)) {
          indicesAleatorios.push(indice);
        }
      }
      return indicesAleatorios.map((indice) => juegos[indice]);
    }
  };

  const juegosAleatorios = obtenerJuegosAleatorios();
  return (
    <div className="card-principal">
      {juegosAleatorios.map((juego) => (
        <div key={juego.id} className="juego-container">
          <img
            src={juego.background_image}
            alt="Juego"
            className="imagen-juego"
          />
          <div className="nombre-juego">{juego.name}</div>
          <div className="rating-juego">{juego.metacritic} Metacritic</div>
        </div>
      ))}
    </div>
  );
}

export default CardJuego;
