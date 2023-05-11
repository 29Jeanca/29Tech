import { IoGameController } from "react-icons/io5";
import "../Estilos/NavBar.css";
function NavBar() {
  return (
    <main>
      <div className="contenedor-padre">
        <ul className="lista">
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
    </main>
  );
}

export default NavBar;
