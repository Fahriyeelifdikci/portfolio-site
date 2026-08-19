import React from "react";
import "./Hakkimda.css";

import Lottie from "lottie-react";

// Animasyonlar
import yogaAnimasyon from "../animasyonlar/yoga.json";
import learningAnimasyon from "../animasyonlar/learning.json";
import greenAnimasyon from "../animasyonlar/green.json";

function Hakkimda() {
  return (
    <section className="hakkimda" id="hakkimda">
      <h2 className="hakkimda-baslik">Hakkımda</h2>

      <div className="hakkimda-kutular">

        {/* Kişisel Yolculuğum */}
        <div className="hakkimda-kutu">
          <Lottie
            animationData={yogaAnimasyon}
            loop={true}
            style={{ width: 150, height: 150, margin: "0 auto" }}
          />

          <h3>Kişisel Yolculuğum</h3>
          <p>
            17 Şubat 2004 tarihinde, Ordu’nun Ünye ilçesinde dünyaya geldim.
            Eğitim hayatımın büyük bir bölümünü burada geçirdikten sonra,
            Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümüne adım attım.
            <br /><br />
            Üniversiteye başladığımda teknolojiye olan ilgim giderek derinleşti
            ve yazılım, benim için sadece bir beceri değil, aynı zamanda bir
            düşünce biçimi haline geldi.
          </p>
        </div>

        {/* Öğrenme Yaklaşımım */}
        <div className="hakkimda-kutu">
          <Lottie
            animationData={learningAnimasyon}
            loop={true}
            style={{ width: 150, height: 150, margin: "0 auto" }}
          />

          <h3>Öğrenme Yaklaşımım</h3>
          <p>
            Proje tabanlı bir öğrenme yaklaşımını benimsiyorum. Yeni konularla
            karşılaştığımda, teorik bilgiyi uygulamalı projelerle pekiştiriyorum.
            <br /><br />
            Bu süreçte sadece doğru sonucu almak değil, süreci anlayarak ilerlemek
            benim için daha önemli. Karşılaştığım hataları bir engel değil,
            öğrenmenin doğal bir parçası olarak görüyorum.
          </p>
        </div>

        {/* Odak Alanlarım */}
        <div className="hakkimda-kutu">
          <Lottie
            animationData={greenAnimasyon}
            loop={true}
            style={{ width: 150, height: 150, margin: "0 auto" }}
          />

          <h3>Odak Alanlarım</h3>
          <p>
            Şu anda makine öğrenmesi ve derin öğrenme konularında kendimi
            geliştirmeye odaklanıyorum. Devam ettiğim projede bu alanları
            uygulamalı olarak deneyimliyorum.
            <br /><br />
            Ayrıca katıldığım online staj programıyla Excel, AutoCAD, Python ve
            Blender gibi araçlarda da yeteneklerimi geliştirmeye devam ediyorum.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hakkimda;
