let projectSlideIndex = 1;
showProjectSlides(projectSlideIndex);

window.plusProjectSlides = function (n) {
  showProjectSlides((projectSlideIndex += n));
};

function showProjectSlides(n) {
  const slides = document.getElementsByClassName("project-slide");
  if (n > slides.length) projectSlideIndex = 1;
  if (n < 1) projectSlideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[projectSlideIndex - 1].style.display = "block";
}

const glow = document.createElement("div");
glow.classList.add("mouse-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const explodeText = document.querySelector('.explode-text');
  const text = explodeText.textContent;
  explodeText.textContent = '';

  [...text].forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.setProperty('--x', Math.floor(Math.random() * 100 - 50)); // -50 tot +50
    span.style.setProperty('--y', Math.floor(Math.random() * 100 - 50));
    span.style.setProperty('--r', Math.floor(Math.random() * 360 - 180)); // rotatie
    explodeText.appendChild(span);
  });