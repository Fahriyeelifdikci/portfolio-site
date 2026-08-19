import React from "react";
import "./Yetenekler.css";

import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

function Yetenekler() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="yetenekler" id="yetenekler">
      <div className="yetenekler-ust">
        <span className="yetenekler-etiket">
          {t.skills.label}
        </span>

        <h2>{t.skills.title}</h2>

        <p>{t.skills.intro}</p>
      </div>

      <div className="yetenekler-grid">
        {t.skills.categories.map((kategori, index) => (
          <div className="yetenek-kategori" key={index}>
            <h3>{kategori.title}</h3>

            <div className="yetenek-listesi">
              {kategori.items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Yetenekler;