function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("collapsed");
  }
}

// Dropdown auto scroll (untuk halaman ski.html)
const kelompok = document.getElementById("kelompok");

if (kelompok) {
  kelompok.addEventListener("change", function () {
    const targetId = this.value;

    if (targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
}
