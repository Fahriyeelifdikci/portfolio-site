import "./AnaMenu.css";
import React from "react";
import profil from "../img/profil.jpeg";
import { FaGithub, FaEnvelope } from "react-icons/fa6";

import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

function AnaMenu() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="ana-menu" id="anasayfa">
      <div className="kapsayici-alan">

        <div className="yazi-alani">
          <p className="kucuk-baslik">
            {t.home.hello}
          </p>

          <h1 className="anim-isim">
            Fahriye Elif Dikci
          </h1>

          <h2 className="alt-baslik">
            {t.home.title}
          </h2>

          <p className="aciklama">
            {t.home.description}
          </p>

          <div className="hero-butonlar">
            <a href="#projeler" className="ana-buton">
              {t.home.projectsButton}
            </a>

            <a href="#iletisim" className="ikincil-buton">
              {t.home.contactButton}
            </a>
          </div>

          <div className="ikonlar">
            <a
              href="https://github.com/Fahriyeelifdikci"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=elifdikci52@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        <div className="resim-alani">
          <img
            src={profil}
            alt="Fahriye Elif Dikci"
          />
        </div>

      </div>

      <div className="asagi-kaydir-uyari">
        <p>{t.home.scroll}</p>
        <div className="asagi-ok"></div>
      </div>
    </section>
  );
}

export default AnaMenu;