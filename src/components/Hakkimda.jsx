import React from "react";
import "./Hakkimda.css";

import Lottie from "lottie-react";

import yogaAnimasyon from "../animasyonlar/yoga.json";
import learningAnimasyon from "../animasyonlar/learning.json";
import greenAnimasyon from "../animasyonlar/green.json";

function Hakkimda() {
  return (
    <section className="hakkimda" id="hakkimda">

      <div className="hakkimda-ust">
        <span className="hakkimda-etiket">BENİ TANIYIN</span>

        <h2 className="hakkimda-baslik">Hakkımda</h2>

        <p className="hakkimda-aciklama">
          Bilgisayar mühendisliği alanında kendimi geliştiriyor,
          öğrendiğim teknolojileri gerçek projelerde uygulamaya ve
          yazılım geliştirme süreçlerini daha iyi anlamaya odaklanıyorum.
        </p>
      </div>

      <div className="hakkimda-kutular">

        <div className="hakkimda-kutu">
          <Lottie
            animationData={yogaAnimasyon}
            loop={true}
            style={{ width: 150, height: 150, margin: "0 auto" }}
          />

          <h3>Ben Kimim?</h3>

          <p>
            Bilgisayar Mühendisliği öğrencisiyim. Yazılım geliştirirken
            yalnızca çalışan bir sonuç elde etmek yerine, kullandığım
            teknolojilerin ve yazdığım kodun arkasındaki mantığı
            anlamaya önem veriyorum.
            <br /><br />
            Backend geliştirme, full-stack uygulamalar ve yazılım
            mühendisliği alanlarıyla ilgileniyorum.
          </p>
        </div>

        <div className="hakkimda-kutu">
          <Lottie
            animationData={learningAnimasyon}
            loop={true}
            style={{ width: 150, height: 150, margin: "0 auto" }}
          />

          <h3>Öğrenme Yaklaşımım</h3>

          <p>
            Yeni öğrendiğim konuları proje geliştirerek pratiğe
            dönüştürmeyi tercih ediyorum. Böylece yalnızca teoriyi değil,
            teknolojilerin gerçek projelerde nasıl kullanıldığını da
            öğreniyorum.
            <br /><br />
            Karşılaştığım hataların nedenlerini araştırmak, çözüm üretmek
            ve kodumu adım adım geliştirmek öğrenme sürecimin önemli
            bir parçası.
          </p>
        </div>

        <div className="hakkimda-kutu">
          <Lottie
            animationData={greenAnimasyon}
            loop={true}
            style={{ width: 150, height: 150, margin: "0 auto" }}
          />

          <h3>Odak Alanlarım</h3>

          <p>
            Şu anda backend ve full-stack geliştirme alanlarında
            kendimi ilerletiyorum. Python ve C# ile projeler geliştiriyor,
            Git ve GitHub kullanarak çalışmalarımı düzenli şekilde
            sürdürüyorum.
            <br /><br />
            REST API'ler, veritabanları, test süreçleri ve yazılım
            mimarisi konularında daha fazla proje geliştirmeyi
            hedefliyorum.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hakkimda;