import React from "react";
import "./Hakkimda.css";

import Lottie from "lottie-react";

import yogaAnimasyon from "../animasyonlar/yoga.json";
import learningAnimasyon from "../animasyonlar/learning.json";
import greenAnimasyon from "../animasyonlar/green.json";

import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";

function Hakkimda() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hakkimda" id="hakkimda">

      <div className="hakkimda-ust">
        <span className="hakkimda-etiket">
          {t.about.label}
        </span>

        <h2 className="hakkimda-baslik">
          {t.about.title}
        </h2>

        <p className="hakkimda-aciklama">
          {t.about.intro}
        </p>
      </div>

      <div className="hakkimda-kutular">

        <div className="hakkimda-kutu">
          <Lottie
            animationData={yogaAnimasyon}
            loop={true}
            style={{
              width: 150,
              height: 150,
              margin: "0 auto",
            }}
          />

          <h3>
            {t.about.cards.whoAmI.title}
          </h3>

          <p>
            {t.about.cards.whoAmI.text}
          </p>
        </div>

        <div className="hakkimda-kutu">
          <Lottie
            animationData={learningAnimasyon}
            loop={true}
            style={{
              width: 150,
              height: 150,
              margin: "0 auto",
            }}
          />

          <h3>
            {t.about.cards.learning.title}
          </h3>

          <p>
            {t.about.cards.learning.text}
          </p>
        </div>

        <div className="hakkimda-kutu">
          <Lottie
            animationData={greenAnimasyon}
            loop={true}
            style={{
              width: 150,
              height: 150,
              margin: "0 auto",
            }}
          />

          <h3>
            {t.about.cards.focus.title}
          </h3>

          <p>
            {t.about.cards.focus.text}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hakkimda;