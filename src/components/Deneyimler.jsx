import React from "react";
import "./Deneyimler.css";

function Deneyimler() {
  const deneyimler = [
    {
      tur: "Staj",
      kurum: "Uyumsoft",
      pozisyon: "Software Developer Intern",
      aciklama:
        "Yazılım geliştirme süreçlerini gerçek bir çalışma ortamında gözlemleme ve uygulama fırsatı buldum. Ekip çalışması, proje geliştirme süreci ve yazılım teknolojileri konusunda deneyim kazandım.",
    },
    {
      tur: "Staj",
      kurum: "TNC Group",
      pozisyon: "Bilgi Teknolojileri Stajyeri",
      aciklama:
        "Bilgi teknolojileri alanında uygulamalı çalışmalar gerçekleştirerek Python ve çeşitli dijital araçlar üzerinde çalışma fırsatı buldum.",
    },
    {
      tur: "Topluluk",
      kurum: "IEEE Balıkesir Üniversitesi Öğrenci Kolu",
      pozisyon: "WIE Başkan Yardımcısı",
      aciklama:
        "Topluluk yönetimi, ekip koordinasyonu ve etkinlik planlama süreçlerinde aktif görev aldım. Organizasyonların hazırlanması ve yürütülmesinde ekip arkadaşlarımla birlikte çalıştım.",
    },
    {
      tur: "Organizasyon",
      kurum: "Kadın İş Derse",
      pozisyon: "Eş Koordinatör",
      aciklama:
        "IEEE Balıkesir Üniversitesi kapsamında düzenlenen etkinliğin planlama, koordinasyon ve organizasyon süreçlerinde görev aldım.",
    },
    {
      tur: "Girişimcilik",
      kurum: "BaunTECH Start",
      pozisyon: "Girişimcilik Kampı Katılımcısı",
      aciklama:
        "Proje ekibiyle birlikte girişimcilik kampına katılarak fikir geliştirme, ekip çalışması ve proje sunumu süreçlerinde deneyim kazandım.",
    },
  ];

  return (
    <section className="deneyimler" id="deneyimler">
      <div className="deneyimler-ust">
        <span className="deneyimler-etiket">DENEYİM & TOPLULUK</span>

        <h2>Deneyimlerim</h2>

        <p>
          Stajlarım, öğrenci topluluklarında üstlendiğim görevler ve katıldığım
          çalışmalar sayesinde hem teknik hem de ekip çalışması ve organizasyon
          becerilerimi geliştirmeye devam ediyorum.
        </p>
      </div>

      <div className="deneyimler-grid">
        {deneyimler.map((deneyim, index) => (
          <article className="deneyim-kart" key={index}>
            <span className="deneyim-tur">{deneyim.tur}</span>

            <h3>{deneyim.kurum}</h3>

            <h4>{deneyim.pozisyon}</h4>

            <p>{deneyim.aciklama}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Deneyimler;