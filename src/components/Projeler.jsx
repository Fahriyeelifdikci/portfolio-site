import React from "react";
import "./Projeler.css";

import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

function Projeler() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="projeler" id="projeler">
      <div className="projeler-ust">
        <span className="projeler-etiket">
          {t.projects.label}
        </span>

        <h2>{t.projects.title}</h2>

        <p>{t.projects.intro}</p>
      </div>

      <div className="projeler-grid">
        {t.projects.items.map((proje, index) => (
          <article className="proje-kart" key={index}>
            <div className="proje-kart-ust">
              <span className="proje-numara">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="proje-durum">
                {t.projects.completed}
              </span>
            </div>

            <h3>{proje.title}</h3>

            <p>{proje.description}</p>

            <div className="proje-teknolojiler">
              {proje.technologies.map((teknoloji, teknolojiIndex) => (
                <span key={teknolojiIndex}>
                  {teknoloji}
                </span>
              ))}
            </div>

            <div className="proje-linkler">
              <a
                href={proje.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.projects.githubButton}
                <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projeler;