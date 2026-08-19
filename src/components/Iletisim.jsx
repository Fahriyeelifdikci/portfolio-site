import React from "react";
import "./Iletisim.css";

function Iletisim() {
  return (
    <section className="iletisim" id="iletisim">

      <div className="iletisim-ust">
        <span className="iletisim-etiket">İLETİŞİM</span>

        <h2>Benimle İletişime Geç</h2>

        <p>
          Projeler, staj fırsatları, iş birlikleri veya yazılım geliştirme
          üzerine konuşmak için benimle iletişime geçebilirsiniz.
        </p>
      </div>

      <div className="iletisim-container">

        <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=elifdikci52@gmail.com"
           target="_blank"
           rel="noopener noreferrer"
           className="iletisim-kart"
        >
          <span className="iletisim-icon">✉</span>

          <div>
             <h3>E-posta</h3>
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
            <h3>GitHub</h3>
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
            <h3>LinkedIn</h3>
            <p>Fahriye Elif Dikci</p>
          </div>
        </a>

        <div className="iletisim-kart">
          <span className="iletisim-icon">⌖</span>

          <div>
            <h3>Konum</h3>
            <p>Balıkesir, Türkiye</p>
          </div>
        </div>

      </div>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=elifdikci52@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="iletisim-buton"
      >
        E-posta Gönder
        <span>↗</span>
      </a>

      <p className="iletisim-alt">
        Yeni projeler ve iş birlikleri için iletişime açığım.
      </p>

    </section>
  );
}

export default Iletisim;