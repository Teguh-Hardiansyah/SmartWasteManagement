//dropdown
const langSelect = document.getElementById('lang-select');

//function language
const setLanguage = (lang) => {
  const content = languageContent[lang];

  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (content[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = content[key];
      } 
      else if (element.tagName !== 'OPTION') {
        element.innerText = content[key];
      }
    }
  });
  localStorage.setItem('preferredLanguage', lang);
  if (langSelect) {
      langSelect.value = lang;
  }
};
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'id';
  setLanguage(savedLang);
});
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

//indonesia
const languageContent = {
  id: {
    nav_home: "Home",
    nav_about: "Tentang Kami",
    nav_feature: "Fitur",
    nav_contact: "Kontak",
    signin_btn: "Masuk",
    hero_title: "Cara Mudah Mengelola Sampah Anda",
    hero_desc: "Kami membantu Anda memilah, mendaur ulang, dan mengelola sampah secara bertanggung jawab. Bergabunglah bersama kami menciptakan lingkungan yang lebih bersih, satu langkah demi satu langkah.",
    hero_btn: "Pelajari Lebih Lanjut",
    about_subtitle: "TENTANG KAMI",
    about_title: "Ikut Berdampak Bersama Kami",
    about_desc: "Kami percaya tindakan kecil sehari-hari dapat membawa perubahan besar. Misi kami adalah membangun komunitas yang berfokus pada kesadaran lingkungan yang praktis dan solusi sampah yang cerdas.",
    about_btn: "Tentang Kami",
    feature_subtitle: "FITUR",
    feature_title: "Cara Kami Membantu Anda Daur Ulang",
    feature_li1: "Panduan proses pengolahan sampah yang mudah digunakan",
    feature_li2: "Layanan jemput sampah daur ulang Anda",
    feature_li3: "Tips edukasi seputar sampah",
    feature_li4: "Insentif untuk setiap partisipasi daur ulang Anda",
    card1_title: "Proses Sederhana",
    card1_desc: "Dapatkan panduan jelas tentang pengelolaan sampah langsung dari aplikasi kami. Sederhana, cepat, dan efektif.",
    card2_title: "Layanan Jemput",
    card2_desc: "Tidak perlu repot. Cukup jadwalkan penjemputan, dan biarkan kami yang mengurus sisanya.",
    card3_title: "Edukasi dan Informasi",
    card3_desc: "Dapatkan tips praktis dan sumber daya untuk membantu Anda mendaur ulang secara lebih efektif dan bertanggung jawab.",
    card4_title: "Insentif",
    card4_desc: "Kami percaya kebiasaan baik perlu diapresiasi. Dapatkan insentif dengan berpartisipasi dalam program daur ulang kami.",
    stats_users: "Pengguna",
    stats_incentives: "Insentif",
    stats_waste: "Sampah Tdaur Ulang",
    stats_reduction: "Pengurangan Sampah",
    contact_subtitle: "KONTAK",
    contact_title: "Hubungi Kami",
    contact_ph_name: "Nama Anda",
    contact_ph_email: "Alamat Email Anda",
    contact_ph_phone: "Nomor Telepon (Opsional)",
    contact_ph_message: "Pesan Anda",
    contact_btn: "Kirim",
    footer_nav_home: "Home",
    footer_nav_about: "Tentang Kami",
    footer_nav_feature: "Fitur",
    footer_nav_contact: "Kontak",
    footer_label_subscribe: "Dapatkan Newsletter Kami",
    footer_ph_subscribe: "Masukkan email Anda",
    footer_btn_subscribe: "Berlangganan",
    footer_terms: "Ketentuan",
    footer_privacy: "Privasi",
    footer_cookies: "Cookies"
    }, 
//english
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_feature: "Feature",
    nav_contact: "Contact Us",
    signin_btn: "Sign In",
    hero_title: "A Simpler Way to Manage Your Waste",
    hero_desc: "We help you sort, recycle, and manage your waste responsibly. Join us in creating a cleaner environment, one step at a time.",
    hero_btn: "Learn More",
    about_subtitle: "ABOUT US",
    about_title: "Join Us in Making a Difference",
    about_desc: "We believe that small, everyday actions can lead to big changes. Our mission is to build a community focused on practical environmental awareness and smart waste solutions.",
    about_btn: "More About Us",
    feature_subtitle: "FEATURE",
    feature_title: "How We Help You Recycle",
    feature_li1: "An easy-to-use guide for waste processing",
    feature_li2: "Convenient pick-up for your recycled waste",
    feature_li3: "Helpful tips on waste education",
    feature_li4: "Rewards for your recycling efforts",
    card1_title: "Simple Process",
    card1_desc: "Get clear guidance on waste management right from our app. It's simple, fast, and effective.",
    card2_title: "Pick-Up Service",
    card2_desc: "Don't worry about the hassle. Just schedule a pick-up, and we'll handle the rest.",
    card3_title: "Educational and Informative",
    card3_desc: "Get practical tips and resources to help you recycle more effectively and responsibly.",
    card4_title: "Incentives",
    card4_desc: "We believe good habits should be rewarded. Earn incentives for participating in our recycling programs.",
    stats_users: "Users",
    stats_incentives: "Incentives",
    stats_waste: "Recycled Waste",
    stats_reduction: "Waste Reduction",
    contact_subtitle: "CONTACT",
    contact_title: "Get in Touch",
    contact_ph_name: "Your Name",
    contact_ph_email: "Your Email Address",
    contact_ph_phone: "Phone Number (Optional)",
    contact_ph_message: "Your Message",
    contact_btn: "Submit",
    footer_nav_home: "Home",
    footer_nav_about: "About Us",
    footer_nav_feature: "Feature",
    footer_nav_contact: "Contact Us",
    footer_label_subscribe: "Get Our Newsletter",
    footer_ph_subscribe: "Enter your email",
    footer_btn_subscribe: "Subscribe",
    footer_terms: "Terms",
    footer_privacy: "Privacy",
    footer_cookies: "Cookies"
  }
};

//Logic

document.addEventListener('DOMContentLoaded', () => {

  // --- Mulai Logika ---
  if (typeof languageContent === 'undefined') {
    console.error("Kamus (languageContent) tidak ditemukan. Pastikan Part 1-7 dimuat SEBELUM logika ini.");
    return;
  }

  // 2. Ambil elemen dropdown SETELAH DOM siap
  const langSelect = document.getElementById('lang-select');

  // 3. Definisikan fungsi setLanguage
  const setLanguage = (lang) => {
    
    const content = languageContent[lang];
    if (!content) {
      console.error(`Bahasa '${lang}' tidak ditemukan di kamus.`);
      return;
    }

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (content[key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = content[key];
        } 
        else if (element.tagName === 'OPTION') {
           // Biarkan saja
        } 
        else {
          element.innerText = content[key];
        }
      }
    });
    localStorage.setItem('preferredLanguage', lang);
    if (langSelect) {
        langSelect.value = lang;
    }
  };
  if (langSelect) {
    // Pasang event listener
    langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
  } else {
    console.error("Elemen dropdown '#lang-select' tidak ditemukan. Periksa ID.");
  }
  const savedLang = localStorage.getItem('preferredLanguage') || 'id';
  setLanguage(savedLang);
  
  // --- Akhir Logika ---
});