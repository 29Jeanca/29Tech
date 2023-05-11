import { IoLogoPlaystation } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoXbox } from "react-icons/io";

function BannerIconos() {
  return (
    <main>
      <section className="cd-iconos-juegos">
        <IoLogoPlaystation /> <span>Ps4 & Ps5 Games</span>
        <BsNintendoSwitch /> <span>Xbox & Pc Games</span>
        <IoLogoXbox /> <span>Nintendo Switch Games</span>
      </section>
    </main>
  );
}

export default BannerIconos;
