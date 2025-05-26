if (!window.alt1) {
  alert("This app must be run inside the Alt1 Toolkit.");
}

const abilities = [
  "Death Skulls",
  "Touch of Death",
  "Soul Sap",
  "Necrosis Dump",
  "Soul Strike",
  "Auto Attack"
];

let currentIndex = 0;

function updateOverlay() {
  const nextAbility = abilities[currentIndex % abilities.length];
  document.getElementById("nextAbility").textContent = nextAbility;
  currentIndex++;
}

setInterval(updateOverlay, 600); // RS3 tick (600ms)
