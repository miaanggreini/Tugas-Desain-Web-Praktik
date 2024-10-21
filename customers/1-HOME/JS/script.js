// Mendapatkan elemen slider dan daftar gambar di dalamnya
let slider = document.querySelector(".slider"); // Elemen utama slider
let sliderList = slider.querySelector(".list"); // Daftar gambar/item di dalam slider

// Slide otomatis: Mengatur interval untuk memindahkan slider setiap 5 detik
let slideInterval = setInterval(function () {
  moveSlider("next"); // Pindahkan slider ke gambar berikutnya setiap kali interval berakhir
}, 5000); // 5000 milidetik = 5 detik

// Fungsi untuk menggerakkan slider
function moveSlider(direction) {
  // Mendapatkan semua elemen gambar (item) dalam slider
  let sliderItems = sliderList.querySelectorAll(".item");

  // Jika arah yang diinginkan adalah "next"
  if (direction === "next") {
    // Memindahkan gambar pertama ke akhir dari daftar gambar
    sliderList.appendChild(sliderItems[0]);
    // Menambahkan kelas 'next' untuk memicu animasi 'next'
    slider.classList.add("next");
  }
  // Jika arah yang diinginkan adalah "prev"
  else {
    // Memindahkan gambar terakhir ke awal dari daftar gambar
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    // Menambahkan kelas 'prev' untuk memicu animasi 'prev'
    slider.classList.add("prev");
  }

  // Setelah animasi selesai, hapus kelas 'next' atau 'prev' agar siap untuk animasi berikutnya
  slider.addEventListener(
    "animationend", // Peristiwa yang terjadi ketika animasi selesai
    function () {
      if (direction === "next") {
        slider.classList.remove("next"); // Hapus kelas 'next' setelah animasi 'next' selesai
      } else {
        slider.classList.remove("prev"); // Hapus kelas 'prev' setelah animasi 'prev' selesai
      }
    },
    { once: true } // Event listener ini hanya aktif sekali, lalu dihapus otomatis setelah dipanggil
  );
}
