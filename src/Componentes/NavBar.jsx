import { IoGameController } from "react-icons/io5";
import "../Estilos/NavBar.css";
import "../Estilos/EstiloGlobal.css";

function NavBar() {
  return (
    <div className="contenedor-padre">
      <ul className="lista">
        29T
        <div className="ct-enlaces">
          <a href="https://rawg.io/apidocs">
            <li>RAWG</li>
          </a>
          <a href="#">
            <li>Me</li>
          </a>
          <a href="https://github.com/29Jeanca">
            <li>Github</li>
          </a>
        </div>
        <li className="ic-nv-bar">
          <IoGameController />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
