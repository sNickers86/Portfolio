// 🔁 Slideshow per container
document.querySelectorAll(".projecten-slideshow").forEach((slideshow) => {
  let slideIndex = 1;
  const slides = slideshow.querySelectorAll(".project-slide");
  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
  }

  prev?.addEventListener("click", () => showSlides(--slideIndex));
  next?.addEventListener("click", () => showSlides(++slideIndex));
});

// 💥 Explode text effect (veilig)
const explodeText = document.querySelector(".explode-text");
if (explodeText) {
  const text = explodeText.textContent;
  explodeText.textContent = "";

  [...text].forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.setProperty("--x", Math.floor(Math.random() * 100 - 50));
    span.style.setProperty("--y", Math.floor(Math.random() * 100 - 50));
    span.style.setProperty("--r", Math.floor(Math.random() * 360 - 180));
    explodeText.appendChild(span);
  });
}

// 🔄 Mobiele navigatie toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ✨ Mouse glow effect
const glow = document.createElement("div");
glow.classList.add("mouse-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});