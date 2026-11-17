# Piercing Blow Mobile - Windows Desktop Client

Shell Electron sederhana yang membuka **situs resmi** Piercing Blow Mobile
(`https://pbmobile.ch/jogo`) di jendela desktop sendiri, lengkap dengan
shortcut di Start Menu / Desktop lewat installer `.exe`.

Aplikasi ini **tidak membawa file game, aset, atau script modifikasi apa
pun** — semua asset dan logic game dimuat langsung dari server resmi saat
aplikasi dijalankan, sama seperti membuka game itu di browser. Karena itu
dibutuhkan koneksi internet untuk bermain, dan game akan selalu berjalan
versi terbaru dari server resmi.

## Cara Menjalankan di PC Windows (dari source):

### Prasyarat:
Pastikan PC Windows Anda sudah menginstal **Node.js** (versi 16 atau yang lebih baru), dari [nodejs.org](https://nodejs.org/).

### Langkah:
1. Ekstrak folder ini ke PC Windows Anda.
2. Buka **Command Prompt (CMD)** atau **PowerShell** di dalam folder tersebut.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm start
   ```

### Membuat installer `.exe`:
```bash
npm run dist
```
Hasilnya ada di folder `dist/`, berupa installer NSIS (`PB Mobile Windows Setup x.x.x.exe`).
