import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import "./index.css";

function App() {
  return (
    <div className="cv_yapisi">
      <header className="üst_taraf">
        <h1>Tugay Doğan</h1>
        <p>Helpdesk Specialist</p>
        
        <div className="iletisim">
          <p>
            <FaPhone size={20} /> +90 555 111 11 11
          </p>
          <p>
            <FaEnvelope size={20} /> tugay.dogan@kun.edu.tr
          </p>
        </div>

        <footer className="sosyal_medya_bilgi">
        <div className="sosyal_medya">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/lastrom48"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </footer>
      </header>


      <div className="hakkimda">
          <h2>Hakkımda</h2>
          <p>
          Lise stajı ile başladığım IT sektöründe çalışmaya ve kendimi geliştirmeye devam ediyorum. Yaklaşık 3 yıllık bir iş geçmişine sahibim ve şu anda Helpdesk Uzmanı olarak özel sektörde çalışmaktayım.
          </p>
        </div>


      <div className="egitim">
        <h2>Eğitim Bilgileri</h2>
        <ul>
          <li>
            Bilgisayar Programcılığı, Kapadokya Üniversitesi (2023-2025)
          </li>
          <li>
            Alibeyköy Meslek Lisesi, Bilişim ve Teknolojileri bölümü (2019-2023)
          </li>
        </ul>
      </div>


      <div className="is_deneyim">
        <h2>İş Deneyimi</h2>
        <ul>
          <li>
            <strong>Helpdesk Specialist</strong> - Özel Sektör (2023 - aktif çalışmakta)
            <p>Son kullanıcı desteği ve AD yönetimi, Fortinet ürünleri desteği.</p>
          </li>
          <li>
            <strong>Helpdesk Intern</strong> - Özel Sektör (2022 - 2023)
            <p>Bilgisayar kurulumu ve son kullanıcı desteği.</p>
          </li>
        </ul>
      </div>


      <div className="yetenek">
        <h2>Yetenekler</h2>
        <ul>
          <li>Fortinet Ürünleri</li>
          <li>AD ve server desteği</li>
          <li>Son kullanıcı ve VIP destek</li>
        </ul>
      </div>


      <div className="hobi">
      <h2>Hobilerim</h2>
        <ul>
          <li>Bilgisayar donanımı</li>
          <li>Script yazmak</li>
          <li>Doğa yürüyüşleri</li>
        </ul>
        </div>

    </div>
  );
}

export default App;
