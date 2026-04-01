# 📁 PORTOFOLIO ALFIAN WIDHI HARJO
### Panduan Lengkap untuk Pemula

---

## 📂 Struktur Folder

```
portofolio-alfian/
│
├── index.html          ← File utama website Anda
├── css/
│   └── style.css       ← Semua pengaturan tampilan (warna, font, layout)
├── js/
│   └── main.js         ← Semua interaksi (dark mode, animasi, unduh CV)
├── images/             ← Taruh SEMUA gambar di sini
│   ├── foto-profil.jpg     (foto Anda di Hero)
│   ├── logo-unesa.png      (logo UNESA, opsional)
│   ├── logo-darululum.png  (logo pesantren, opsional)
│   ├── project-money.jpg   (screenshot proyek Money-Alfian)
│   ├── project-dompetku.jpg(screenshot proyek Dompetku)
│   ├── project-3d.jpg      (screenshot proyek Object-3D)
│   ├── cert-1.jpg          (gambar sertifikat 1)
│   ├── cert-2.jpg          (gambar sertifikat 2)
│   ├── cert-3.jpg          (gambar sertifikat 3)
│   └── cert-4.jpg          (gambar sertifikat 4)
└── PANDUAN.md          ← File ini
```

---

## 🚀 LANGKAH 1 — Menjalankan di Browser

1. Pastikan semua file sudah ada dalam satu folder `portofolio-alfian/`
2. Buka **File Explorer** (Windows) atau **Finder** (Mac)
3. Masuk ke folder `portofolio-alfian/`
4. **Double-click** file `index.html`
5. Website akan terbuka otomatis di browser Anda

> ✅ **Tidak perlu koneksi internet** untuk menjalankan website ini secara lokal.
> ⚠️  Font (Sora) butuh internet. Jika offline, akan fallback ke font sistem.

---

## 🖼️ LANGKAH 2 — Menambahkan Foto Profil

**Cara paling mudah:**

1. Siapkan foto Anda (disarankan: ukuran persegi/kotak, minimal 400×400 px)
2. **Rename** file foto menjadi `foto-profil.jpg`
3. **Pindahkan** file ke dalam folder `images/`
4. Buka browser → tekan **F5** (refresh)
5. Foto Anda langsung muncul di lingkaran Hero!

**Jika nama file berbeda:**
1. Buka `index.html` dengan Notepad atau VS Code
2. Tekan `Ctrl+F`, ketik `foto-profil.jpg`
3. Ganti dengan nama file foto Anda, contoh: `alfian.jpg`
4. Simpan (`Ctrl+S`) → refresh browser

> 💡 Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`

---

## ✏️ LANGKAH 3 — Mengubah Teks/Deskripsi

**Tools yang dibutuhkan:** Notepad (sudah ada di Windows) atau VS Code (gratis, direkomendasikan).

**Cara edit teks di index.html:**

1. Klik kanan `index.html` → **Open with** → **Notepad** (atau VS Code)
2. Tekan `Ctrl+F` untuk membuka kotak pencarian
3. Ketik kata/teks yang ingin diubah
4. Edit langsung di editor
5. Tekan `Ctrl+S` untuk simpan
6. Kembali ke browser → tekan `F5` untuk lihat perubahan

**Contoh perubahan umum:**

| Yang ingin diubah | Cari teks ini di index.html |
|---|---|
| Username Instagram | `username_instagram_anda` |
| Link Instagram | `instagram.com/username_instagram_anda` |
| Judul sertifikat | `Judul Sertifikat Ke-1` (dst.) |
| Nama institusi sertifikat | `Nama Institusi / Platform` |
| Tahun sertifikat | `2024` (di dalam bagian cert) |
| Deskripsi proyek | Teks di dalam `<div class="project-desc">` |

---

## 🖼️ LANGKAH 4 — Menambahkan Gambar Proyek & Sertifikat

Sama seperti foto profil — **semua gambar wajib disimpan di folder `images/`**

| Slot | Nama file | Ukuran ideal |
|---|---|---|
| Foto profil | `foto-profil.jpg` | 400×400 px (persegi) |
| Screenshot Money-Alfian | `project-money.jpg` | 600×400 px |
| Screenshot Dompetku | `project-dompetku.jpg` | 600×400 px |
| Screenshot Object-3D | `project-3d.jpg` | 600×400 px |
| Sertifikat 1 | `cert-1.jpg` | Bebas |
| Sertifikat 2 | `cert-2.jpg` | Bebas |
| Sertifikat 3 | `cert-3.jpg` | Bebas |
| Sertifikat 4 | `cert-4.jpg` | Bebas |

> Jika gambar belum tersedia, website tetap tampil normal dengan ikon placeholder. Tidak rusak.

---

## ➕ LANGKAH 5 — Menambahkan Sertifikat Baru

1. Buka `index.html` dengan Notepad/VS Code
2. Cari teks `<!-- Cert 4 -->`
3. Salin seluruh blok kode dari `<!-- Cert 4 -->` sampai `</div>` penutup kartu tersebut
4. Tempel tepat setelah blok Cert 4
5. Ganti nomor (cert-4 → cert-5), judul, institusi, dan tahun
6. Simpan gambar sertifikat baru sebagai `images/cert-5.jpg`

---

## 📄 LANGKAH 6 — Tombol Unduh CV

**Saat ini:** Tombol "Unduh CV" di navbar menghasilkan file `.txt` otomatis dari data portofolio.

**Jika Anda punya file PDF CV:**
1. Simpan file PDF di folder project dengan nama `CV-Alfian.pdf`
2. Buka `index.html`, cari `onclick="downloadCV(); return false;"`
3. Ganti baris tersebut menjadi: `href="CV-Alfian.pdf" download`
4. Simpan → refresh browser

---

## 🌙 Fitur Dark/Light Mode

Sudah berfungsi otomatis. Klik ikon 🌙/☀️ di pojok kanan navbar untuk berganti tema.
Preferensi disimpan di browser — tidak akan reset jika halaman di-refresh.

---

## 🎨 Mengubah Warna Aksen

Warna biru aksen dapat diubah di `css/style.css`, baris 14–15:

```css
--accent:      #2a5fd6;   /* Warna utama (biru) */
--accent-soft: #eef2fc;   /* Latar belakang badge biru muda */
```

Ganti `#2a5fd6` dengan kode warna pilihan Anda. Contoh:
- Hijau: `#16a34a`
- Ungu: `#7c3aed`
- Teal: `#0d9488`

---

## 📱 Responsivitas

Website sudah otomatis responsif:
- **Laptop/Desktop:** Layout penuh dengan semua kolom
- **Tablet:** Layout 2 kolom
- **HP:** Layout 1 kolom, navbar jadi menu hamburger ☰

---

## ❓ Pertanyaan Umum

**Q: Website tidak tampil di browser?**
A: Pastikan Anda membuka file `index.html`, bukan file lain. Klik kanan → Open With → pilih browser.

**Q: Foto tidak muncul?**
A: Pastikan (1) nama file persis sama — huruf besar/kecil penting, (2) file ada di folder `images/`, (3) refresh browser.

**Q: Font terlihat berbeda?**
A: Font Sora membutuhkan internet. Saat offline, browser akan pakai font cadangan — ini normal.

**Q: Bagaimana upload ke internet?**
A: Gunakan layanan gratis seperti **Netlify** (netlify.com) atau **GitHub Pages** — cukup drag-and-drop seluruh folder.

---

*Dibuat dengan ❤️ | Alfian Widhi Harjo Portofolio 2024*
