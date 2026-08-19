import React from "react";
import "./Deneyimler.css";

import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

function Deneyimler() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="deneyimler" id="deneyimler">
      <div className="deneyimler-ust">
        <span className="deneyimler-etiket">
          {t.experience.label}
        </span>

        <h2>
          {t.experience.title}
        </h2>

        <p>
          {t.experience.intro}
        </p>
      </div>

      <div className="deneyimler-grid">
        {t.experience.items.map((deneyim, index) => (
          <article className="deneyim-kart" key={index}>
            <span className="deneyim-tur">
              {deneyim.type}
            </span>

            <h3>
              {deneyim.company}
            </h3>

            <h4>
              {deneyim.position}
            </h4>

            <p>
              {deneyim.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Deneyimler;