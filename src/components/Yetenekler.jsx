import React from "react";
import "./Yetenekler.css";

function Yetenekler() {
  return (
    <section className="yetenekler" id="yetenekler">

      <div className="yetenekler-ust">
        <span className="yetenekler-etiket">TEKNİK YETKİNLİKLER</span>

        <h2>Yetenekler</h2>

        <p>
          Eğitim sürecimde ve geliştirdiğim projelerde kullandığım
          teknolojiler ile üzerinde çalışmaya devam ettiğim alanlar.
        </p>
      </div>

      <div className="yetenekler-grid">

        <div className="yetenek-kategori">
          <h3>Programlama Dilleri</h3>

          <div className="yetenek-listesi">
            <span>Python</span>
            <span>C#</span>
            <span>C++</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="yetenek-kategori">
          <h3>Frontend</h3>

          <div className="yetenek-listesi">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="yetenek-kategori">
          <h3>Backend & API</h3>

          <div className="yetenek-listesi">
            <span>Node.js</span>
            <span>REST API</span>
          </div>
        </div>

        <div className="yetenek-kategori">
          <h3>Veritabanı</h3>

          <div className="yetenek-listesi">
            <span>MySQL</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="yetenek-kategori">
          <h3>Araçlar & Teknolojiler</h3>

          <div className="yetenek-listesi">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>PyCharm</span>
            <span>WebStorm</span>
          </div>
        </div>

        <div className="yetenek-kategori">
          <h3>Üzerinde Çalıştığım Alanlar</h3>

          <div className="yetenek-listesi">
            <span>Backend Development</span>
            <span>Full-Stack Development</span>
            <span>Testing</span>
            <span>Software Architecture</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Yetenekler;