// Pilih semua elemen dengan kelas "box"
const boxes = document.querySelectorAll('.box');

// Fungsi untuk mengatur observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Tambahkan kelas "show" jika elemen terlihat
      entry.target.classList.add('show');
      // Hapus kelas "hidden" untuk menghilangkan delay visibilitas
      entry.target.classList.remove('hidden');
      // Unobserve elemen untuk meningkatkan performa
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); // Elemen akan terdeteksi jika 10% terlihat

// Observe semua elemen yang dipilih
boxes.forEach(box => {
  observer.observe(box);
});
