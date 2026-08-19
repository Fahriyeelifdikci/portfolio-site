import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <div className="menu-icerik">


        <div className="menu-linkler">
          <a href="#anasayfa">Ana Sayfa</a>
          <a href="#hakkimda">Hakkımda</a>
          <a href="#projeler">Projeler</a>
          <a href="#iletisim">İletişim</a>
        </div>

      </div>
    </nav>
  );
}

export default Menu;
