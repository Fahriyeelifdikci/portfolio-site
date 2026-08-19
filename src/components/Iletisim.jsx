import React, { useState } from "react";
import "./Iletisim.css";

function Iletisim() {
  const [form, setForm] = useState({
    ad: "",
    email: "",
    mesaj: "",
  });

  // Input değişince state güncelle
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız gönderildi. Teşekkürler 🙌");

    setForm({
      ad: "",
      email: "",
      mesaj: "",
    });
  };

  return (
    <section className="iletisim" id="iletisim">
      <h2 className="iletisim-baslik">İletişim</h2>

      <div className="iletisim-container">
        {/* Sol Flip Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            {/* Ön Yüz */}
            <div className="flip-card-front">
              <h3>İletişim Bilgilerim</h3>
              <p>Üzerine gel 👇</p>
            </div>

            {/* Arka Yüz */}
            <div className="flip-card-back">
              <p>
                <strong>E-posta:</strong> elifdikci52@gmail.com
              </p>
              <p>
                <strong>Telefon:</strong> +90 543 946 35 27
              </p>
              <p>
                <strong>Konum:</strong> Balıkesir, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Sağ Form */}
        <form onSubmit={handleSubmit} className="iletisim-formu">
          <input
            type="text"
            name="ad"
            placeholder="Ad Soyad"
            value={form.ad}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="mesaj"
            placeholder="Mesajınız..."
            value={form.mesaj}
            onChange={handleChange}
            required
          />

          <button type="submit">Gönder</button>
        </form>
      </div>
    </section>
  );
}

export default Iletisim;
