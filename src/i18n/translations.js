const translations = {
  tr: {
    /* =========================
       MENÜ
    ========================= */
    menu: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      experience: "Deneyimler",
      skills: "Yetenekler",
      projects: "Projeler",
      contact: "İletişim",
    },

    /* =========================
       ANA SAYFA
    ========================= */
    home: {
      hello: "Merhaba, ben",
      title: "Bilgisayar Mühendisliği Öğrencisi",

      description:
        "Backend geliştirme, full-stack geliştirme ve yazılım mühendisliği alanlarıyla ilgileniyorum. Projeleri sıfırdan geliştirmeyi, karşılaştığım problemleri çözmeyi ve gerçek uygulamalar geliştirerek kendimi ilerletmeyi seviyorum.",

      projectsButton: "Projelerimi Gör",
      contactButton: "İletişime Geç",
      scroll: "Beni tanımak için aşağı kaydır",
    },

    /* =========================
       HAKKIMDA
    ========================= */
    about: {
      label: "BENİ TANIYIN",
      title: "Hakkımda",

      intro:
        "Bilgisayar mühendisliği alanında kendimi geliştiriyor, öğrendiğim teknolojileri gerçek projelerde uygulamaya ve yazılım geliştirme süreçlerini daha iyi anlamaya odaklanıyorum.",

      cards: {
        whoAmI: {
          title: "Ben Kimim?",
          text:
            "Bilgisayar Mühendisliği öğrencisiyim. Yazılım geliştirirken yalnızca çalışan bir sonuç elde etmek yerine, kullandığım teknolojilerin ve yazdığım kodun arkasındaki mantığı anlamaya önem veriyorum. Backend geliştirme, full-stack uygulamalar ve yazılım mühendisliği alanlarıyla ilgileniyorum.",
        },

        learning: {
          title: "Öğrenme Yaklaşımım",
          text:
            "Yeni öğrendiğim konuları proje geliştirerek pratiğe dönüştürmeyi tercih ediyorum. Böylece yalnızca teoriyi değil, teknolojilerin gerçek projelerde nasıl kullanıldığını da öğreniyorum. Karşılaştığım hataların nedenlerini araştırmak, çözüm üretmek ve kodumu adım adım geliştirmek öğrenme sürecimin önemli bir parçası.",
        },

        focus: {
          title: "Odak Alanlarım",
          text:
            "Şu anda backend ve full-stack geliştirme alanlarında kendimi ilerletiyorum. Python ve C# ile projeler geliştiriyor, Git ve GitHub kullanarak çalışmalarımı düzenli şekilde sürdürüyorum. REST API'ler, veritabanları, test süreçleri ve yazılım mimarisi konularında kendimi geliştirmeye devam ediyorum.",
        },
      },
    },

    /* =========================
       DENEYİMLER
    ========================= */
    experience: {
      label: "DENEYİM & TOPLULUK",
      title: "Deneyimlerim",

      intro:
        "Stajlarım, öğrenci topluluklarında üstlendiğim görevler ve katıldığım çalışmalar sayesinde hem teknik hem de ekip çalışması ve organizasyon becerilerimi geliştirmeye devam ediyorum.",

      items: [
        {
          type: "Staj",
          company: "Uyumsoft",
          position: "Software Developer Intern",
          description:
            "Yazılım geliştirme süreçlerini gerçek bir çalışma ortamında deneyimleme fırsatı buldum. Proje geliştirme, ekip çalışması ve yazılım teknolojileri konusunda uygulamalı deneyim kazandım.",
        },

        {
          type: "Staj",
          company: "TNC Group",
          position: "Bilgi Teknolojileri Stajyeri",
          description:
            "Bilgi teknolojileri alanında uygulamalı çalışmalar gerçekleştirerek Python başta olmak üzere çeşitli yazılım ve dijital araçlarla çalışma deneyimi kazandım.",
        },

        {
          type: "Topluluk",
          company: "IEEE Balıkesir Üniversitesi Öğrenci Kolu",
          position: "WIE Başkan Yardımcısı",
          description:
            "Topluluk yönetimi, ekip koordinasyonu ve etkinlik planlama süreçlerinde aktif görev aldım. Organizasyonların hazırlanması ve yürütülmesinde ekip arkadaşlarımla birlikte çalıştım.",
        },

        {
          type: "Organizasyon",
          company: "Kadın İş Derse",
          position: "Eş Koordinatör",
          description:
            "IEEE Balıkesir Üniversitesi kapsamında düzenlenen etkinliğin planlama, koordinasyon ve organizasyon süreçlerinde görev aldım.",
        },

        {
          type: "Girişimcilik",
          company: "BaunTECH Start",
          position: "Girişimcilik Kampı Katılımcısı",
          description:
            "Proje ekibiyle birlikte girişimcilik kampına katılarak fikir geliştirme, ekip çalışması ve proje sunumu süreçlerinde deneyim kazandım.",
        },
      ],
    },

    /* =========================
       YETENEKLER
    ========================= */
    skills: {
      label: "TEKNİK YETKİNLİKLER",
      title: "Yetenekler",

      intro:
        "Eğitim sürecimde ve geliştirdiğim projelerde kullandığım teknolojiler ile üzerinde çalışmaya devam ettiğim alanlar.",

      categories: [
        {
          title: "Programlama Dilleri",
          items: ["Python", "C#", "C++", "JavaScript"],
        },

        {
          title: "Frontend",
          items: ["React", "HTML", "CSS"],
        },

        {
          title: "Backend & API",
          items: ["Node.js", "REST API"],
        },

        {
          title: "Veritabanı",
          items: ["MySQL", "SQL"],
        },

        {
          title: "Araçlar & Teknolojiler",
          items: ["Git", "GitHub", "VS Code", "PyCharm", "WebStorm"],
        },

        {
          title: "Üzerinde Çalıştığım Alanlar",
          items: [
            "Backend Development",
            "Full-Stack Development",
            "Testing",
            "Software Architecture",
          ],
        },
      ],
    },

    /* =========================
       PROJELER
    ========================= */
    projects: {
      label: "ÇALIŞMALARIM",
      title: "Projeler",

      intro:
        "Öğrendiğim teknolojileri pratiğe dönüştürmek ve yazılım geliştirme becerilerimi ilerletmek amacıyla geliştirdiğim projeler.",

      completed: "Tamamlandı",
      githubButton: "GitHub'da Görüntüle",

      items: [
        {
          title: "Log Analyzer CLI",

          description:
            "Log dosyalarını analiz ederek INFO, WARNING ve ERROR seviyelerindeki kayıtları sayan ve istenilen log seviyesine göre filtreleme yapabilen komut satırı uygulaması.",

          technologies: ["Python", "CLI", "argparse", "unittest"],

          github:
            "https://github.com/Fahriyeelifdikci/log-analyzer-cli",
        },
      ],
    },

    /* =========================
       İLETİŞİM
    ========================= */
    contact: {
      label: "İLETİŞİM",
      title: "Benimle İletişime Geç",

      intro:
        "Projeler, staj fırsatları, iş birlikleri veya yazılım geliştirme üzerine konuşmak için benimle iletişime geçebilirsiniz.",

      email: "E-posta",
      github: "GitHub",
      linkedin: "LinkedIn",
      location: "Konum",

      locationValue: "Balıkesir, Türkiye",

      emailButton: "E-posta Gönder",

      footer:
        "Yeni projeler ve iş birlikleri için iletişime açığım.",
    },
  },

  /* =========================================================
     ENGLISH
  ========================================================= */

  en: {
    /* =========================
       MENU
    ========================= */
    menu: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },

    /* =========================
       HOME
    ========================= */
    home: {
      hello: "Hi, I'm",
      title: "Computer Engineering Student",

      description:
        "I'm interested in backend development, full-stack development and software engineering. I enjoy building projects from scratch, solving problems and improving my skills by developing real-world applications.",

      projectsButton: "View Projects",
      contactButton: "Contact Me",
      scroll: "Scroll down to learn more",
    },

    /* =========================
       ABOUT
    ========================= */
    about: {
      label: "GET TO KNOW ME",
      title: "About Me",

      intro:
        "I focus on improving myself in computer engineering, applying the technologies I learn in real projects and gaining a deeper understanding of software development processes.",

      cards: {
        whoAmI: {
          title: "Who Am I?",
          text:
            "I'm a Computer Engineering student. When developing software, I care about understanding the logic behind the technologies I use and the code I write, rather than simply producing something that works. I'm interested in backend development, full-stack applications and software engineering.",
        },

        learning: {
          title: "How I Learn",
          text:
            "I prefer turning new concepts into practice by building projects. This allows me to understand not only the theory but also how technologies are used in real projects. Investigating errors, finding solutions and improving my code step by step are important parts of my learning process.",
        },

        focus: {
          title: "My Focus Areas",
          text:
            "I'm currently improving my skills in backend and full-stack development. I build projects with Python and C# and use Git and GitHub to manage my work. I'm continuing to improve myself in REST APIs, databases, testing and software architecture.",
        },
      },
    },

    /* =========================
       EXPERIENCE
    ========================= */
    experience: {
      label: "EXPERIENCE & COMMUNITY",
      title: "My Experience",

      intro:
        "Through my internships, student community roles and various activities, I continue to improve both my technical skills and my experience in teamwork, coordination and organization.",

      items: [
        {
          type: "Internship",
          company: "Uyumsoft",
          position: "Software Developer Intern",
          description:
            "I had the opportunity to experience software development processes in a professional working environment. I gained practical experience in project development, teamwork and software technologies.",
        },

        {
          type: "Internship",
          company: "TNC Group",
          position: "Information Technology Intern",
          description:
            "I gained hands-on experience in information technologies by working with Python and various software and digital tools.",
        },

        {
          type: "Community",
          company: "IEEE Balıkesir University Student Branch",
          position: "WIE Vice Chair",
          description:
            "I actively took part in community management, team coordination and event planning. I worked with my teammates in the preparation and execution of various events.",
        },

        {
          type: "Organization",
          company: "Kadın İş Derse",
          position: "Co-Coordinator",
          description:
            "I took part in the planning, coordination and organization processes of the event held within IEEE Balıkesir University.",
        },

        {
          type: "Entrepreneurship",
          company: "BaunTECH Start",
          position: "Entrepreneurship Camp Participant",
          description:
            "I participated in the entrepreneurship camp with my project team and gained experience in idea development, teamwork and project presentation.",
        },
      ],
    },

    /* =========================
       SKILLS
    ========================= */
    skills: {
      label: "TECHNICAL SKILLS",
      title: "Skills",

      intro:
        "Technologies I have used throughout my education and projects, along with the areas I continue to improve my skills in.",

      categories: [
        {
          title: "Programming Languages",
          items: ["Python", "C#", "C++", "JavaScript"],
        },

        {
          title: "Frontend",
          items: ["React", "HTML", "CSS"],
        },

        {
          title: "Backend & API",
          items: ["Node.js", "REST API"],
        },

        {
          title: "Database",
          items: ["MySQL", "SQL"],
        },

        {
          title: "Tools & Technologies",
          items: ["Git", "GitHub", "VS Code", "PyCharm", "WebStorm"],
        },

        {
          title: "Currently Exploring",
          items: [
            "Backend Development",
            "Full-Stack Development",
            "Testing",
            "Software Architecture",
          ],
        },
      ],
    },

    /* =========================
       PROJECTS
    ========================= */
    projects: {
      label: "MY WORK",
      title: "Projects",

      intro:
        "Projects I have developed to put the technologies I learn into practice and improve my software development skills.",

      completed: "Completed",
      githubButton: "View on GitHub",

      items: [
        {
          title: "Log Analyzer CLI",

          description:
            "A command-line application that analyzes log files, counts INFO, WARNING and ERROR records, and supports filtering by a selected log level.",

          technologies: ["Python", "CLI", "argparse", "unittest"],

          github:
            "https://github.com/Fahriyeelifdikci/log-analyzer-cli",
        },
      ],
    },

    /* =========================
       CONTACT
    ========================= */
    contact: {
      label: "CONTACT",
      title: "Get In Touch",

      intro:
        "Feel free to contact me about projects, internship opportunities, collaborations or software development.",

      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      location: "Location",

      locationValue: "Balıkesir, Türkiye",

      emailButton: "Send Email",

      footer:
        "I'm open to new projects and collaboration opportunities.",
    },
  },
};

export default translations;