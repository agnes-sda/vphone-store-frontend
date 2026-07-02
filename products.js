document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product, .product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 1. Ubah tampilan tombol aktif
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // 2. Ambil kategori dari tombol yang diklik
      // Kita cek textContent tombolnya biar aman (diubah ke huruf kecil semua)
      const filterValue = this.textContent.trim().toLowerCase();

      // 3. Saring produknya
      productCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filterValue === "all") {
          card.style.display = "flex"; // Tampilkan semua
        } else if (category === filterValue) {
          card.style.display = "flex"; // Tampilkan yang cocok
        } else {
          card.style.display = "none"; // Sembunyikan yang gak cocok
        }
      });
    });
  });
});
