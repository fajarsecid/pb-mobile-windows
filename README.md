# Piercing Blow Mobile - Patched (Windows Edition)

Versi Windows Desktop dari **PB Mobile Patched** (*Pbmobile_3.3_Android_patched.apk*), lengkap dengan seluruh fitur, fungsi, dan asset modifikasi tanpa ada yang dikurang-kurangi!

## Fitur & Kelengkapan:
1. **Full Asset Parity**: Menggunakan aset game asli dan script yang sudah di-patch (`game.html`, `jogo.html`, `bundle.patched.js`, `game.patched.js`, `logic.js`).
2. **JavaScript Bridge Emulation**: Menyediakan objek `window.PBAndroid` (`poll()`, `getHwid()`) agar script modifikasi berjalan persis seperti di aplikasi Android.
3. **Vibration / Feedback**: Mendukung getaran perangkat melalui API gamepad rumble jika kontroller terhubung, atau fallback mulus.
4. **Desktop UI Optimization**: Dijalankan menggunakan Electron framework dengan jendela ukuran 1024x768 (atau resizable), pencahayaan & WebGL hardware accelerated.

---

## Cara Menjalankan di PC Windows:

### Prasyarat:
Pastikan PC Windows Anda sudah menginstal **Node.js** (versi 16 atau yang lebih baru). Anda dapat mengunduhnya dari [nodejs.org](https://nodejs.org/).

### Langkah Instalasi & Menjalankan:
1. Ekstrak atau salin folder `windows_version` ke PC Windows Anda.
2. Buka **Command Prompt (CMD)** atau **PowerShell** di dalam folder tersebut.
3. Install dependencies (Electron & builder):
   ```bash
   npm install
   ```
4. Jalankan aplikasi game:
   ```bash
   npm start
   ```

### Cara Membuat File `.exe` Standalone (Portable / Installer):
Jika Anda ingin membuat file `.exe` mandiri yang bisa dijalankan di komputer Windows manapun tanpa perlu install Node.js:
- Untuk membuat folder aplikasi ter-pack:
  ```bash
  npm run build
  ```
- Atau gunakan `electron-packager` / `electron-builder` untuk menghasilkan installer / file `.exe`.
