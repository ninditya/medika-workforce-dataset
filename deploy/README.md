# Prototype — Medika Nusantara Workforce Intelligence

Deliverable 2. Satu berkas HTML, tanpa dependensi, tanpa login.

## Cara publikasi ke GitHub Pages

1. Buat repositori publik baru, misalnya `medika-workforce`.
2. Unggah `index.html` ke root repositori.
3. Buka **Settings → Pages**, pilih Source: `Deploy from a branch`, Branch: `main`, folder: `/ (root)`, lalu Save.
4. Setelah sekitar satu menit, prototipe tersedia di
   `https://<username>.github.io/medika-workforce/`

Alternatif tanpa GitHub: unggah `index.html` ke Netlify Drop (https://app.netlify.com/drop)
atau Cloudflare Pages. Keduanya menerima satu berkas dan langsung menghasilkan URL publik.

## Isi

Lima layar, seluruhnya dihitung dari dataset Deliverable 3 yang tertanam di dalam berkas:

| Layar | Isi |
|---|---|
| Antrean Keputusan | Peringkat skill gap per (cabang, peran), dengan toggle Dataset A / B |
| Butuh Data | Tim yang belum dapat dinilai, dipisahkan dari peringkat gap |
| Antrean Review | 103 record terflag, lima trigger, dapat difilter |
| Detail Orang | Provenance per skill dan jejak audit resolusi identitas |
| Cermin Data | Fill rate HRIS per cabang — artefak Hari 30 |

Toggle Dataset A / B mengganti sumber data pada seluruh layar. Pada Dataset A, layar
Butuh Data dan Antrean Review sengaja tidak tersedia: union naif tiga sistem tidak memiliki
confidence, sehingga tidak ada dasar untuk menentukan apa yang perlu dilihat manusia.

## Catatan

Seluruh data sintetis, dihasilkan generator deterministik dengan seed `20260807`.
Tidak ada data karyawan nyata.
