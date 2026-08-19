import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [menuAcik, setMenuAcik] = useState(false);

  const menuKapat = () => {
    setMenuAcik(false);
  };

  return (
    <nav className="menu">
      <div className="menu-icerik">

        <a
          href="#anasayfa"
          className="menu-logo"
          onClick={menuKapat}
        >
          FED<span>.</span>
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuAcik(!menuAcik)}
          aria-label="Menüyü aç veya kapat"
        >
          {menuAcik ? "✕" : "☰"}
        </button>

        <div className={`menu-linkler ${menuAcik ? "aktif" : ""}`}>
          <a href="#anasayfa" onClick={menuKapat}>
            Ana Sayfa
          </a>

          <a href="#hakkimda" onClick={menuKapat}>
            Hakkımda
          </a>

          <a href="#deneyimler" onClick={menuKapat}>
            Deneyimler
          </a>

          <a href="#yetenekler" onClick={menuKapat}>
            Yetenekler
          </a>

          <a href="#projeler" onClick={menuKapat}>
            Projeler
          </a>

          <a href="#iletisim" onClick={menuKapat}>
            İletişim
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Menu;