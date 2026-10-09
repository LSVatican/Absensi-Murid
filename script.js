// Function untuk Jam & Tanggal Real-time
function updateClock() {
  const now = new Date();

  // Format Waktu (HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} WIB`;

  // Format Tanggal Bahasa Indonesia
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('id-ID', options);
  document.getElementById('date').textContent = dateString;
}

// Jalankan jam tiap 1 detik
setInterval(updateClock, 1000);
updateClock(); // Inisialisasi awal
