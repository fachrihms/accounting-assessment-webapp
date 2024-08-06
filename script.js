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

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      const contentId = this.getAttribute("href").substring(1) + "-content";
      const contentSections = document.querySelectorAll(".container > div");
      contentSections.forEach((section) => {
        section.style.display = "none";
      });
      document.getElementById(contentId).style.display = "block";
      updateBreadcrumb(this.textContent);
    });
  });

  // Toggle dropdown menu for "Kuesioner Assessment & Improvement"
  const tasksMenu = document.getElementById("tasks-menu");
  const tasksDropdown = document.getElementById("tasks-dropdown");
  tasksMenu.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    tasksDropdown.style.display = tasksDropdown.style.display === "block" ? "none" : "block";
  });

  // Navigate to "Siklus Lingkungan Pengendalian" when sub-card is clicked
  const subcardLingkunganPengendalian = document.getElementById("subcard-lingkungan-pengendalian");
  subcardLingkunganPengendalian.addEventListener("click", function () {
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-lingkungan-pengendalian-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Lingkungan Pengendalian");
  });

  // Ensure link in dropdown_1 also navigates correctly
  const siklusLingkunganPengendalianLink = document.getElementById("siklus-lingkungan-pengendalian-link");
  siklusLingkunganPengendalianLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-lingkungan-pengendalian-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Lingkungan Pengendalian");
  });

  // Navigate to "Siklus Pendapatan dan Penagihan" when sub-card is clicked
  const subcardPendapatanDanPenagihan = document.getElementById("subcard-pendapatan-dan-penagihan");
  subcardPendapatanDanPenagihan.addEventListener("click", function () {
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-pendapatan-dan-penagihan-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Pendapatan dan Penagihan");
  });

  // Ensure link in dropdown_2 also navigates correctly
  const siklusPendapatanDanPenagihanLink = document.getElementById("siklus-pendapatan-dan-penagihan-link");
  siklusPendapatanDanPenagihanLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-pendapatan-dan-penagihan-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Pendapatan dan Penagihan");
  });

  // Navigate to "Siklus Pembelian dan Pengeluaran Kas" when sub-card is clicked
  const subcardPembelianDanPengeluaranKas = document.getElementById("subcard-pembelian-dan-pengeluaran-kas");
  subcardPembelianDanPengeluaranKas.addEventListener("click", function () {
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-pembelian-dan-pengeluaran-kas-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Pembelian dan Pengeluaran Kas");
  });

  // Ensure link in dropdown_3 also navigates correctly
  const siklusPembelianDanPengeluaranKasLink = document.getElementById("siklus-pembelian-dan-pengeluaran-kas-link");
  siklusPembelianDanPengeluaranKasLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-pembelian-dan-pengeluaran-kas-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Pembelian dan Pengeluaran Kas");
  });

  // Navigate to "Siklus Penerimaan dan Penggajian Karyawan" when sub-card is clicked
  const subcardPenerimaanDanPenggajianKaryawan = document.getElementById("subcard-penerimaan-dan-penggajian-karyawan");
  subcardPenerimaanDanPenggajianKaryawan.addEventListener("click", function () {
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-penerimaan-dan-penggajian-karyawan-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Penerimaan dan Penggajian Karyawan");
  });

  // Ensure link in dropdown_4 also navigates correctly
  const siklusPenerimaanDanPenggajianKaryawanLink = document.getElementById("siklus-penerimaan-dan-penggajian-karyawan-link");
  siklusPenerimaanDanPenggajianKaryawanLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const contentSections = document.querySelectorAll(".container > div");
    contentSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("siklus-penerimaan-dan-penggajian-karyawan-content").style.display = "block";
    updateBreadcrumb("Kuesioner Assessment & Improvement => Siklus Penerimaan dan Penggajian Karyawan");
  });

  function updateBreadcrumb(path) {
    const breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.textContent = path;
  }

  const dropdowns = document.querySelectorAll(".dropdown");
  const dropdownMenus = document.querySelectorAll('.menu-item[id$="-menu"]');

  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  }

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const targetDropdown = document.getElementById(this.id.replace("-menu", "-dropdown"));

      if (targetDropdown.classList.contains("show")) {
        targetDropdown.classList.remove("show");
      } else {
        closeAllDropdowns();
        targetDropdown.classList.add("show");
      }
    });
  });

  // Menutup dropdown ketika mengklik di luar
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".sidebar")) {
      closeAllDropdowns();
    }
  });
});

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  handleNavigation();
  handleSubCardClick();
});
