import { IoLogoPlaystation } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoXbox } from "react-icons/io";
import "../Estilos/EstiloGlobal.css";
import "../Estilos/BannerIconos.css";
function BannerIconos() {
  return (
    <section className="cd-iconos-juegos">
      <div className="ct-logos">
        <IoLogoPlaystation className="ps-logo Logos" />
        <p className="text">Ps4 & Ps5 Games</p>
        <IoLogoXbox className="pc-logo Logos" />
        <p className="text">Xbox & PC Games</p>
        <BsNintendoSwitch className="sw-logo Logos" />
        <p className="text">Nintendo Switch Games</p>
      </div>
    </section>
  );
}

export default BannerIconos;
