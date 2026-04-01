/* ============================================================
   PORTOFOLIO ALFIAN WIDHI HARJO
   main.js — Interactions & Utilities
   ============================================================ */

'use strict';

/* ── Preloader ──────────────────────────────────────────────── */
document.body.style.overflow = 'hidden';

const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loaderBar');
const loaderPercent = document.getElementById('loaderPercent');

if (loader && loaderBar && loaderPercent) {
  let progress = 0;
  // Durasi lebih lama (2.5 detik) agar animasi cukup panjang & keren
  const duration = 2500; 
  const intervalTime = 25; // perbarui setiap 25ms
  const steps = duration / intervalTime;
  const increment = 100 / steps;

  const interval = setInterval(() => {
    progress += increment;
    
    // Memberikan efek perlambatan saat mendekati 100% agar natural
    if (progress > 75 && progress < 99) {
      progress -= increment * 0.6; 
    }

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      loaderBar.style.width = '100%';
      loaderPercent.textContent = '100%';

      // Menunggu 0.4 detik di 100% sebelum memudar (fade out)
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => loader.remove(), 800);
      }, 400);
    } else {
      loaderBar.style.width = `${Math.floor(progress)}%`;
      loaderPercent.textContent = `${Math.floor(progress)}%`;
    }
  }, intervalTime);
}

/* ── Dark / Light Mode ──────────────────────────────────────── */
const html       = document.documentElement;
const themeBtn   = document.getElementById('themeBtn');
const themeIcon  = document.getElementById('themeIcon');

function applyTheme(dark) {
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (themeIcon) themeIcon.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Init: read saved preference or OS setting
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const osDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved === 'dark' || (!saved && osDark));
})();

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    applyTheme(!isDark);
  });
}

/* ── Navbar — hide on scroll down, show on scroll up ─────────── */
const navbar   = document.querySelector('.navbar');
const mobileNav = document.getElementById('mobileNav');
const menuBtn  = document.getElementById('menuBtn');
let lastScrollY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y > lastScrollY && y > 80) {
        if (navbar) navbar.classList.add('hidden-nav');
        if (mobileNav) mobileNav.classList.remove('open');
      } else {
        if (navbar) navbar.classList.remove('hidden-nav');
      }
      lastScrollY = y;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

/* ── Mobile menu toggle ──────────────────────────────────────── */
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

/* ── Scroll Reveal ───────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Active nav link on scroll ───────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[data-section]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.dataset.section === entry.target.id
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ── Image error fallback (show placeholder) ─────────────────── */
document.querySelectorAll('img[data-placeholder]').forEach(img => {
  img.addEventListener('error', function () {
    const placeholder = document.getElementById(this.dataset.placeholder);
    if (placeholder) {
      this.style.display = 'none';
      placeholder.style.display = 'flex';
    }
  });
});

/* ── CV Download (generates a simple text CV) ────────────────── */
// This creates a downloadable plain-text CV from the portfolio data.
// Replace with your actual PDF file if you have one.
function downloadCV() {
  const cvText = `CURRICULUM VITAE
=====================================
ALFIAN WIDHI HARJO
Web Development Enthusiast
S1 Pendidikan Teknologi Informasi — UNESA

KONTAK
------
Email   : alfiangopoh09@gmail.com
GitHub  : github.com/alfianwidhi-web
Lokasi  : Surabaya, Jawa Timur

TENTANG SAYA
------------
Mahasiswa S1 Pendidikan Teknologi Informasi di Universitas Negeri
Surabaya (UNESA), lulusan Pondok Pesantren Darul Ulum 2024.
Membawa nilai kedisiplinan dan integritas dari 6 tahun pesantren
ke dunia Web Development untuk menciptakan solusi digital inovatif.

PENDIDIKAN
----------
Universitas Negeri Surabaya (UNESA)          | 2024 – Sekarang
S1 Pendidikan Teknologi Informasi
- Fokus: rekayasa perangkat lunak, sistem informasi, inovasi media digital
- Organisasi: Kepala Departemen UKM PSHT UNESA

Pondok Pesantren Darul Ulum (SMA Darul Ulum Medali)  | 2018 – 2024
Pendidikan Menengah Terpadu (SMP – SMA)
- Pendidikan karakter berbasis kedisiplinan dan kemandirian selama 6 tahun
- Ketua Pengurus Asrama Putra (2023–2024): bertanggung jawab atas
  manajemen harian, kedisiplinan, dan kesejahteraan ratusan santri

TECHNICAL SKILLS
----------------
Web       : HTML5, CSS3, JavaScript (ES6+)
Frameworks: Bootstrap, Tailwind CSS
Languages : Java (OOP), C++ (Graphics & Algorithms)
Design    : Figma, Adobe XD, Canva
Tools     : Git & GitHub, VS Code, Microsoft Office Suite
Lainnya   : Dasar Networking, Troubleshooting Hardware/Software

SOFT SKILLS
-----------
- Leadership      : Ketua Asrama Putra & Kepala Departemen UKM
- Problem Solving : Analisis tajam untuk solusi digital
- Adaptability    : Transisi pesantren ke dunia IT
- Collaboration   : Efektif dalam tim proyek dan organisasi besar
- Communication   : Penyampaian ide teknis & koordinasi tim

PROYEK
------
1. Money-Alfian | Personal Finance Web App
   Tech Stack: HTML, CSS, JavaScript
   Deskripsi : Aplikasi web responsif untuk manajemen keuangan pribadi.
               Fokus pada antarmuka bersih dan navigasi intuitif.

2. Dompetku | Asset Tracking System
   Tech Stack: Java (OOP)
   Deskripsi : Sistem pelacakan aset digital dengan validasi data aman
               dan struktur kode yang efisien.

3. Object-3D | Graphical Simulation
   Tech Stack: C++
   Deskripsi : Eksperimen grafika komputer untuk memvisualisasikan objek 3D.
               Menunjukkan kemampuan logika pemrograman low-level.
=====================================
`;

  const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'CV-Alfian-Widhi-Harjo.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Expose globally for onclick
window.downloadCV = downloadCV;
