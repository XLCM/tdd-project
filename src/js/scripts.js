import "../css/styles.scss";

import { PlanetaryCalculator } from "./planetaryCalculator.js";

// let myBirthday = new PlanetaryCalculator("1978 September 4");

// myBirthday();

// UI Logic

document.getElementById("submitBirthday").addEventListener("click", (event) => {
  event.preventDefault();
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let myBirthday = new PlanetaryCalculator(`${month} ${day} ${year}`);
  console.log(myBirthday);
  console.log(`${month - 1} ${day} ${year}`);

  let mercSection = document.getElementById("mercury");
  mercSection.innerHTML += `<p>My age on Mercury: ${myBirthday.planets.mercury.yearsOld}</p>`;
  mercSection.innerHTML += `<p>Years left to live on Mercury: ${myBirthday.planets.mercury.timeLeft()}</p>`;
  mercSection.innerHTML += `<p>${myBirthday.planets.mercury.yearsLeft()}</p>`;

  let venusSection = document.getElementById("venus");
  venusSection.innerHTML += `<p>My age on Venus: ${myBirthday.planets.venus.yearsOld}</p>`;
  venusSection.innerHTML += `<p>Years left to live on Venus: ${myBirthday.planets.venus.timeLeft()}</p>`;
  venusSection.innerHTML += `<p>${myBirthday.planets.venus.yearsLeft()}</p>`;

  let earthSection = document.getElementById("earth");
  earthSection.innerHTML += `<p>My age on Earth: ${myBirthday.planets.earth.yearsOld}</p>`;
  earthSection.innerHTML += `<p>Years left to live on Earth: ${myBirthday.planets.earth.timeLeft()}</p>`;
  earthSection.innerHTML += `<p>${myBirthday.planets.earth.yearsLeft()}</p>`;

  let marsSection = document.getElementById("mars");
  marsSection.innerHTML += `<p>My age on Mars: ${myBirthday.planets.mars.yearsOld}</p>`;
  marsSection.innerHTML += `<p>Years left to live on Mars: ${myBirthday.planets.mars.timeLeft()}</p>`;
  marsSection.innerHTML += `<p>${myBirthday.planets.mars.yearsLeft()}</p>`;

  let jupiterSection = document.getElementById("jupiter");
  jupiterSection.innerHTML += `<p>My age on Jupiter: ${myBirthday.planets.jupiter.yearsOld}</p>`;
  jupiterSection.innerHTML += `<p>Years left to live on Jupiter: ${myBirthday.planets.jupiter.timeLeft()}</p>`;
  jupiterSection.innerHTML += `<p>${myBirthday.planets.jupiter.yearsLeft()}</p>`;

  let saturnSection = document.getElementById("saturn");
  saturnSection.innerHTML += `<p>My age on Saturn: ${myBirthday.planets.saturn.yearsOld}</p>`;
  saturnSection.innerHTML += `<p>Years left to live on Saturn: ${myBirthday.planets.saturn.timeLeft()}</p>`;
  saturnSection.innerHTML += `<p>${myBirthday.planets.saturn.yearsLeft()}</p>`;
});
