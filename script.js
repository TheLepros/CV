// Theme toggle
// Theme toggle (click anywhere on switch)
const themeButtons = document.querySelectorAll(".theme-btn");
const themeSwitch = document.querySelector(".theme-switch");

// Set theme function
function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  themeButtons.forEach((b) =>
    b.classList.toggle("active", b.dataset.theme === theme)
  );
}

// Initial theme
setTheme(document.body.getAttribute("data-theme") || "light");

// Click anywhere on the switch = toggle
themeSwitch.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
});

// Software bar animation
window.addEventListener("load", () => {
  document.querySelectorAll(".soft-fill").forEach((bar, index) => {
    const value = bar.getAttribute("data-progress");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 200 + index * 120);
  });

  // Circular progress animation
  const circles = document.querySelectorAll(".skill-circle");
  circles.forEach((wrap, index) => {
    const value = parseInt(wrap.getAttribute("data-value"), 10);
    const circle = wrap.querySelector(".ring-progress");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const offset = circumference - (value / 100) * circumference;

    setTimeout(() => {
      circle.style.transition = "stroke-dashoffset 1.2s ease-out";
      circle.style.strokeDashoffset = offset;
    }, 300 + index * 150);
  });
});
