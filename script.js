// Simulasi data dinamis
document.getElementById("visitors").textContent = Math.floor(Math.random() * 1000);
document.getElementById("sales").textContent = Math.floor(Math.random() * 10000000);

// Fungsi untuk menangani menu aktif dan konten
function handleNavigation() {
  const menuItems = document.querySelectorAll(".menu-item");
  const homeContent = document.getElementById("home-content");
  const projectManagementContent = document.getElementById("project-management-content");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Hapus kelas 'active' dari semua menu item
      menuItems.forEach((link) => link.classList.remove("active"));

      // Tambahkan kelas 'active' ke menu item yang diklik
      this.classList.add("active");

      // Tampilkan konten yang sesuai
      if (this.getAttribute("href") === "#project-management") {
        homeContent.style.display = "none";
        projectManagementContent.style.display = "block";
      } else {
        homeContent.style.display = "block";
        projectManagementContent.style.display = "none";
      }
    });
  });
}

// Fungsi untuk menangani klik pada sub-card
function handleSubCardClick() {
  const subCards = document.querySelectorAll(".sub-card");
  subCards.forEach((card) => {
    card.addEventListener("click", function () {
      alert("Anda mengklik " + this.textContent);
    });
  });
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  handleNavigation();
  handleSubCardClick();
});
