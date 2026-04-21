# 🌶️ Seblakin - WhatsApp Ordering System (Source Code Guide)

Selamat! Anda telah memiliki source code **Seblakin**, aplikasi web modern untuk sistem pemesanan kuliner interaktif yang terhubung langsung ke WhatsApp.

Aplikasi ini dirancang dengan estetika premium, performa cepat (Vite + React), dan kemudahan kustomisasi tanpa memerlukan backend yang kompleks.

---

## ✨ Fitur Utama
- **Modern & Premium UI**: Menggunakan teknik *glassmorphism*, animasi *floating*, dan skema warna yang menggugah selera.
- **Mobile First Design**: Dioptimalkan secara sempurna untuk penggunaan di smartphone pelanggan.
- **Interactive Ordering**: Pemilihan topping dan level pedas yang intuitif dengan perhitungan harga real-time.
- **WhatsApp Integration**: Pesanan otomatis terformat rapi dan langsung dikirim ke chat penjual.
- **Clean Code**: Struktur kode yang rapi dan mudah dimengerti oleh developer.

---

## 🛠️ Teknologi yang Digunakan
- **Frontend**: React 19
- **Build Tool**: Vite (Sangat Cepat)
- **Styling**: Vanilla CSS (Modern CSS Variables & Flexbox/Grid)
- **Icons/Emoji**: Menggunakan native emoji dan Lucide-style components untuk efisiensi.

---

## 🚀 Cara Menjalankan Project
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. **Instalasi Dependensi**:
   Buka terminal di root folder project, lalu jalankan:
   ```bash
   npm install
   ```

2. **Menjalankan Server Lokal**:
   ```bash
   npm run dev
   ```
   Buka browser di alamat `http://localhost:5173`.

3. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

---

## ⚙️ Panduan Konfigurasi (PENTING!)
Semua pengaturan utama aplikasi berada di satu lokasi pusat untuk memudahkan Anda: `src/data/data.js`.

### 1. Mengubah Nomor WhatsApp Penjual
Ubah variabel `noTelp` menjadi nomor WhatsApp Anda.  
*Penting: Gunakan kode negara (62) tanpa tanda '+':*
```javascript
export const noTelp = "6282141276392"; // Gantilah dengan nomor Anda
```

### 2. Update Menu & Harga Topping
Anda bisa menambah, menghapus, atau mengubah harga item di dalam array `items`:
```javascript
export const items = [
  { id: 1, nama: "Kerupuk Bawang", harga: 2000 },
  { id: 2, nama: "Mie", harga: 2000 },
  // Tambah item baru di sini...
];
```

### 3. Mengubah Level Kepedasan
Jika ingin menambah atau mengurangi tingkatan pedas, cukup edit array `levels`.

---

## 📁 Struktur Folder Utama
- `src/components/`: Tempat semua komponen UI (Cart, InputNama, ItemSelector, dll).
- `src/data/`: Berisi `data.js` (Pusat konfigurasi menu dan nomor HP).
- `src/App.jsx`: Logic utama aplikasi.
- `index.css`: Seluruh styling aplikasi (Mudah diubah warnanya jika ingin rebranding).

---

## 🎨 Tips Kustomisasi Visual
Untuk mengubah warna tema (misal ingin ganti dari merah ke hijau), cukup buka `index.css` dan cari bagian `:root`. Ubah variabel warna primer di sana untuk merubah tampilan seluruh aplikasi secara instan.

Terima kasih telah menggunakan source code **Seblakin**! Semoga sukses untuk bisnis kuliner Anda! 🚀🌶️🥢
