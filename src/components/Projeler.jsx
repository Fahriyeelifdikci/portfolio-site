import React from "react";
import "./Projeler.css";

function Projeler() {
  const projeler = [
    {
      baslik: "Log Analyzer CLI",
      aciklama:
        "Log dosyalarını analiz ederek INFO, WARNING ve ERROR seviyelerindeki kayıtları sayan ve istenilen log seviyesine göre filtreleme yapabilen komut satırı uygulaması.",
      teknolojiler: ["Python", "CLI", "argparse", "unittest"],
      github: "https://github.com/Fahriyeelifdikci/log-analyzer-cli",
    },
  ];

  return (
    <section className="projeler" id="projeler">
      <div className="projeler-ust">
        <span className="projeler-etiket">ÇALIŞMALARIM</span>

        <h2>Projeler</h2>

        <p>
          Öğrendiğim teknolojileri pratiğe dönüştürmek ve yazılım geliştirme
          becerilerimi ilerletmek amacıyla geliştirdiğim projeler.
        </p>
      </div>

      <div className="projeler-grid">
        {projeler.map((proje, index) => (
          <article className="proje-kart" key={index}>
            <div className="proje-kart-ust">
              <span className="proje-numara">0{index + 1}</span>

              <span className="proje-durum">Tamamlandı</span>
            </div>

            <h3>{proje.baslik}</h3>

            <p>{proje.aciklama}</p>

            <div className="proje-teknolojiler">
              {proje.teknolojiler.map((teknoloji, teknolojiIndex) => (
                <span key={teknolojiIndex}>{teknoloji}</span>
              ))}
            </div>

            <div className="proje-linkler">
              <a
                href={proje.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub'da Görüntüle
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