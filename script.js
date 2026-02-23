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

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (scrollBtn) {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("collapsed");

  if (!sidebar.classList.contains("collapsed")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.add("collapsed");
  overlay.style.display = "none";
}
