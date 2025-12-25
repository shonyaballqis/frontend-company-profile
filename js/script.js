const burger = document.getElementById("burger-menu");
const overlay = document.querySelector(".menu-overlay");
const closeBtn = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".menu-panel a");


/* Buka menu */
burger.addEventListener("click", () => {
  overlay.classList.add("active");
});

/* Tutup menu pakai silang */
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

/* Tutup menu kalau klik area gelap */
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});