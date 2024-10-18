// Smooth Scroll when clicking on internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navigation on card clicks
document.querySelector(".raidey").addEventListener("click", () => {
  window.location.href = "raidey.html"; // Replace with the actual page for Raidey
});

document.querySelector(".joagu").addEventListener("click", () => {
  window.location.href = "joagu.html"; // Replace with the actual page for Joagu
});

document.querySelector(".panda").addEventListener("click", () => {
  window.location.href = "panda.html"; // Replace with the actual page for Panda
});
