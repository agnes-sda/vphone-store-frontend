document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product, .product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.textContent.trim().toLowerCase();

      productCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filterValue === "all") {
          card.style.display = "flex"; 
        } else if (category === filterValue) {
          card.style.display = "flex"; 
        } else {
          card.style.display = "none"; 
        }
      });
    });
  });
});
