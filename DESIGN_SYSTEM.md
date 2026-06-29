# Kogniti Design System

Dokumen ini merupakan panduan dan aturan (Design System) yang digunakan dalam pengembangan website Kogniti. Tujuannya adalah untuk menjaga konsistensi elemen visual, tata letak, dan interaksi di seluruh halaman dan komponen.

## 1. Warna (Color Palette)

Website ini menggunakan arsitektur variabel warna semantik yang didefinisikan secara global di `src/styles/index.css`. Semua komponen UI **wajib** memanggil variabel ini dan **dilarang** menggunakan hardcoded hex codes.

### Variabel Utama
| Variabel | Hex Code | Deskripsi & Aturan Penggunaan |
| :--- | :--- | :--- |
| `--color-primary` | `#ffffff` (Putih) | Warna dasar utama (Base Background). Digunakan untuk latar belakang dominan pada section, teks di atas latar belakang gelap, dan ikon/elemen dasar. |
| `--color-secondary` | `#111111` (Hitam) | Warna kontras utama (Base Text / Foreground). Digunakan untuk teks dominan, latar belakang section kontras (seperti Hero, Footer), dan elemen utama yang butuh penekanan (heading). |
| `--color-accent1` | `#dc2626` (Merah) | Warna identitas brand (Brand Primary). Digunakan untuk tombol (CTA), badge penanda (seperti pada About, Services), dan efek interaktif (*hover*). |
| `--color-accent2` | `#f97316` (Oranye) | Warna identitas sekunder (Brand Secondary). Digunakan untuk elemen yang membutuhkan variasi dari warna brand utama, tombol sekunder, CTA khusus, dan interaksi *hover* dinamis. |

> [!TIP]
> **Skalabilitas (Dark Mode):** 
> Karena arsitektur warna berbasis fungsi (`primary` vs `secondary`) dan bukan sekadar nama warna (merah/putih), mengaktifkan mode gelap di masa depan hanya perlu membalik nilai HEX antara `--color-primary` dan `--color-secondary`.

---

## 2. Tipografi (Typography)

Sistem menggunakan paduan tipografi modern dan solid untuk mencerminkan gaya profesional sebuah agensi pemasaran.

- **Primary Font:** `Inter` (Google Fonts), didukung oleh fallback default system (`sans-serif`).
- **Antialiasing:** Semua teks harus memiliki sifat `antialiased` (otomatis diterapkan melalui styling `body` di `index.css`).

### Aturan Skala Teks (Text Scale)
- **Hero / Section Titles:** Menggunakan ukuran sangat besar (`text-4xl` hingga `text-[5.5rem]`), beban font menengah (`font-medium` atau `font-light`), dan `tracking-tight` (jarak huruf rapat) untuk kesan premium.
- **Body / Paragraf:** Menggunakan `text-sm` hingga `text-base` dengan `leading-relaxed` (jarak baris longgar) agar nyaman dibaca. Biasanya diberi sentuhan transparansi ringan seperti `text-secondary/60` (opacity 60%).
- **Eyebrow / Badge:** Teks kecil berukuran `text-[10px]` hingga `text-xs`, selalu dipadukan dengan `uppercase` (huruf kapital), `tracking-widest` (jarak huruf direnggangkan), dan `font-bold`.

---

## 3. Komponen (Components)

### 3.1. Tombol (Buttons)
Semua tombol di Kogniti **wajib** menggunakan border melengkung `rounded-lg` dengan *padding* proporsional. Selalu sertakan transisi (`transition-colors`).

- **Primary Button:** `bg-accent1 text-primary hover:bg-accent1/90`
- **Secondary Button:** `bg-secondary text-primary hover:bg-secondary/90`
- **Outline Button:** `border border-secondary/20 bg-transparent text-secondary hover:bg-secondary/10`
- **Ghost Button:** `bg-transparent text-secondary hover:bg-secondary/10`

### 3.2. Badge / Indikator Label
Sering digunakan di atas judul section (seperti *Who We Are*, *By The Numbers*, *FAQ*).
- **Struktur:** Ikon kotak/lingkaran kecil (`w-2 h-2`) disandingkan dengan teks Eyebrow.
- **Warna Ikon:** Biasanya mengambil `--color-accent1` agar mencolok.

---

## 4. Tata Letak (Layout & Spacing)

- **Container Max-Width:** Menggunakan `max-w-7xl` untuk sebagian besar section agar konten tetap tertata rapi di layar ultra-lebar. Navbar terkadang menggunakan `max-w-5xl`.
- **Padding Section:** Menggunakan `py-24` (atas-bawah) dan `px-6 md:px-12` (kiri-kanan) secara konsisten untuk memberikan *breathing room* (ruang lega) pada desain.
- **Border Radius (rounded-lg):** Ini adalah aturan yang sangat ketat. Semua elemen antarmuka (UI) mulai dari **Tombol (Buttons), Gambar, Kartu (Cards), Container, hingga elemen kotak lainnya WAJIB menggunakan `rounded-lg`**. Dilarang keras menggunakan bentuk terlalu bersudut atau melingkar sempurna kecuali pada elemen dekorasi khusus.

---

## 5. Efek & Interaksi (Effects & Interactions)

Desain Kogniti menekankan estetika yang hidup namun halus (micro-animations).

- **Hover Effects:** Wajib menggunakan kelas *utility* Tailwind untuk transisi: `transition-colors`, `transition-all`, atau `transition-transform`, dengan durasi lambat-halus (`duration-300` hingga `duration-500`).
- **Shadows:** Menggunakan `shadow-2xl` atau kustom dengan warna brand untuk kartu konten atau bagian penting yang melayang (*floating elements*).
- **Marquee:** Animasi logo berjalan harus dilakukan secara linear tanpa jeda (`linear infinite`) yang didefinisikan lewat `@keyframes` di CSS.
- **Scroll Animations (GSAP):** Menggunakan efek *fade-up* (`y: 30`, `opacity: 0`) pada teks dan gambar saat masuk ke area pandang.

> [!IMPORTANT]  
> **Kepatuhan:** Semua modifikasi atau penambahan halaman dan komponen baru wajib mengacu pada panduan variabel warna, skala tipografi, dan gaya interaksi di dokumen ini. Dilarang menimpa aturan dengan nilai *hardcode*.
