const projectDescriptions = {
  "make it happen": "‘Make It Happen’ is een initiatief voor zelfontwikkeling, inspiratie en actie. Gericht op studenten en jonge makers.",
  "lightopia": "‘Lightopia’ is een creatief lichtkunstproject waarin kleur, beweging en interactie samenkomen in een audiovisuele installatie.",
  "best of 2024": "Een overzicht van mijn meest succesvolle en betekenisvolle projecten van het jaar 2024 – van concept tot uitvoering.",
  "portfolio opdracht": "dit is een opdacht die ik moest maken voor school om een portfolio te maken.",
  "memory": "ik heb dit spel gemaakt samen met arne, en we hebben hiervoor ook een tutorial gemaakt voor beginer programeurs."
};


// 📦 Popup elementen
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");

// 💡 Eventlistener per project
document.querySelectorAll(".project-slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    const title = slide.querySelector("h3").textContent.trim();
    const img = slide.querySelector("img");

    modalTitle.textContent = title;
    modalImg.src = img.src;
    modalImg.alt = img.alt;

    const key = title.toLowerCase();
    modalDesc.textContent = projectDescriptions[key] || "Beschrijving volgt binnenkort.";

    modal.style.display = "block";
  });
});

// ❌ Popup sluiten
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});