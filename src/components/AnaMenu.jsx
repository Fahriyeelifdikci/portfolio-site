import "./AnaMenu.css";
import React from "react";
import profil from "../img/profil.jpeg";
import { FaGithub, FaEnvelope } from "react-icons/fa6";

function AnaMenu() {
  return (
    <section className="ana-menu" id="anasayfa">
      <div className="kapsayici-alan">

        <div className="yazi-alani">
        <p className="kucuk-baslik">Merhaba, ben</p>

          <h1 className="anim-isim">
            Fahriye Elif Dikci
          </h1>

          <h2 className="alt-baslik">
            Bilgisayar Mühendisliği Öğrencisi
          </h2>

          <p className="aciklama">
            Backend geliştirme, full-stack geliştirme ve yazılım mühendisliği
            alanlarıyla ilgileniyorum. Projeleri sıfırdan geliştirmeyi,
            karşılaştığım problemleri çözmeyi ve gerçek uygulamalar
            geliştirerek kendimi ilerletmeyi seviyorum.
          </p>

          <div className="hero-butonlar">
            <a href="#projeler" className="ana-buton">
              Projelerimi Gör
            </a>

            <a href="#iletisim" className="ikincil-buton">
              İletişime Geç
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
              href="mailto:elifdikci52@gmail.com"
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
        <p>Beni tanımak için aşağı kaydır</p>
        <div className="asagi-ok"></div>
      </div>
    </section>
  );
}

export default AnaMenu;