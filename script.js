// SIDEBAR TOGGLE (pakai class active, bukan collapsed)
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Tutup Sidebar (klik area abu)
function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

// Supaya klik di dalam sidebar tidak ikut menutup
const sidebarElement = document.getElementById("sidebar");
if (sidebarElement) {
  sidebarElement.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

// Dropdown auto scroll (SKI)
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

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
