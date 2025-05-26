const abilities = [
  { name: "Death Skulls", cd: 6 },
  { name: "Touch of Death", cd: 9 },
  { name: "Soul Sap", cd: 3 },
  { name: "Necrosis Dump", cd: 0 },
  { name: "Soul Strike", cd: 4 }
];

let currentIndex = 0;

function getNextAbility() {
  while (true) {
    const ability = abilities[currentIndex % abilities.length];
    if (ability.cd <= 0) return ability;
    currentIndex++;
  }
}

function updateCooldowns() {
  for (let i = 0; i < abilities.length; i++) {
    if (abilities[i].cd > 0) abilities[i].cd--;
  }
}

function flashNext() {
  const next = getNextAbility();
  const div = document.getElementById("nextAbility");
  div.textContent = next.name;
  div.style.borderColor = "yellow";
}

setInterval(() => {
  updateCooldowns();
  flashNext();
  currentIndex++;
}, 600); // 1 tick
