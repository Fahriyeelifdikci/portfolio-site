import React from "react";
import "./Iletisim.css";

import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

function Iletisim() {
  const { language } = useLanguage();
  const t = translations[language];

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=elifdikci52@gmail.com";

  return (
    <section className="iletisim" id="iletisim">
      <div className="iletisim-ust">
        <span className="iletisim-etiket">
          {t.contact.label}
        </span>

        <h2>{t.contact.title}</h2>

        <p>{t.contact.intro}</p>
      </div>

      <div className="iletisim-container">
        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="iletisim-kart"
        >
          <span className="iletisim-icon">✉</span>

          <div>
            <h3>{t.contact.email}</h3>
            <p>elifdikci52@gmail.com</p>
          </div>
        </a>

        <a
          href="https://github.com/Fahriyeelifdikci"
          target="_blank"
          rel="noopener noreferrer"
          className="iletisim-kart"
        >
          <span className="iletisim-icon">&lt;/&gt;</span>

          <div>
            <h3>{t.contact.github}</h3>
            <p>Fahriyeelifdikci</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/fahriye-elif-dikci-55b4a62b3"
          target="_blank"
          rel="noopener noreferrer"
          className="iletisim-kart"
        >
          <span className="iletisim-icon">in</span>

          <div>
            <h3>{t.contact.linkedin}</h3>
            <p>Fahriye Elif Dikci</p>
          </div>
        </a>

        <div className="iletisim-kart">
          <span className="iletisim-icon">⌖</span>

          <div>
            <h3>{t.contact.location}</h3>
            <p>{t.contact.locationValue}</p>
          </div>
        </div>
      </div>

      <a
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="iletisim-buton"
      >
        {t.contact.emailButton}
        <span>↗</span>
      </a>

      <p className="iletisim-alt">
        {t.contact.footer}
      </p>
    </section>
  );
}

export default Iletisim;