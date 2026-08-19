import React, { useState } from "react";
import "./Menu.css";

import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

function Menu() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

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
            {t.menu.home}
          </a>

          <a href="#hakkimda" onClick={menuKapat}>
            {t.menu.about}
          </a>

          <a href="#deneyimler" onClick={menuKapat}>
            {t.menu.experience}
          </a>

          <a href="#yetenekler" onClick={menuKapat}>
            {t.menu.skills}
          </a>

          <a href="#projeler" onClick={menuKapat}>
            {t.menu.projects}
          </a>

          <a href="#iletisim" onClick={menuKapat}>
            {t.menu.contact}
          </a>

          <button
            className="dil-buton"
            onClick={() => {
              toggleLanguage();
              menuKapat();
            }}
          >
            {language === "tr" ? "EN" : "TR"}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Menu;