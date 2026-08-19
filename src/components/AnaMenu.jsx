import "./AnaMenu.css";
import React, { useState, useEffect } from "react";
import profil from "../img/profil.jpeg";
import { FaGithub, FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

function AnaMenu() {
  const isim = "Fahriye Elif Dikci";
  const mesaj = "Hoş Geldiniz";

  const [gosterilenMesaj, setGosterilenMesaj] = useState("");
  const [gosterilenIsim, setGosterilenIsim] = useState("");

  useEffect(() => {
    let mesajIndex = 0;
    const mesajInterval = setInterval(() => {
      setGosterilenMesaj(mesaj.slice(0, mesajIndex + 1));
      mesajIndex++;
      if (mesajIndex === mesaj.length) clearInterval(mesajInterval);
    }, 100);

    let isimIndex = 0;
    setTimeout(() => {
      const isimInterval = setInterval(() => {
        setGosterilenIsim(isim.slice(0, isimIndex + 1));
        isimIndex++;
        if (isimIndex === isim.length) clearInterval(isimInterval);
      }, 150);
    }, mesaj.length * 100 + 300);

    return () => clearInterval(mesajInterval);
  }, []);

  return (
    <>

      <section className="ana-menu" id="anasayfa">
        {/* ESKİ PORTFOLYO GİBİ KAPSAYICI */}
        <div className="kapsayici-alan">

          {/* SOL YAZILAR */}
          <div className="yazi-alani">
            <div className="hosgeldiniz-yazi">{gosterilenMesaj}</div>

            <h1 className="anim-isim">
              <span className="isim-renkli">{gosterilenIsim}</span>
            </h1>

            <p className="alt-baslik">
              Bilgisayar Mühendisliği <br /> Portföyüm
            </p>

            <a href="#iletisim" className="iletisim-buton">
              İletişime Geç
            </a>

            {/* SOSYAL MEDYA */}
            <div className="ikonlar">
              <a href="https://github.com/Fahriyeelifdikci" target="_blank" rel="noreferrer">
                <FaGithub size={28} />
              </a>

              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaXTwitter size={28} />
              </a>

              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram size={28} />
              </a>

              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebook size={28} />
              </a>
            </div>
          </div>

          {/* SAĞ FOTOĞRAF */}
          <div className="resim-alani">
            <img
              src={profil}
              alt="Profil Fotoğrafı"
              style={{
                width: "320px",
                height: "450px",
                borderRadius: "20px",
                objectFit: "cover"
              }}
            />
          </div>
        </div>

        {/* AŞAĞI KAYDIR */}
        <div className="asagi-kaydir-uyari">
          <p>Beni daha iyi tanımak için aşağı kaydırın</p>
          <div className="asagi-ok"></div>
        </div>
      </section>
    </>
  );
}

export default AnaMenu;
