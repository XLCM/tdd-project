import "../css/styles.scss";

import { PlanetaryCalculator } from "./planetaryCalculator.js";

// UI Logic

document.getElementById("submitBirthday").addEventListener("click", (event) => {
  event.preventDefault();
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let myBirthday = new PlanetaryCalculator(`${month} ${day} ${year}`);

  // get targets for text
  let mercSection = document.getElementById("mercury");
  let venusSection = document.getElementById("venus");
  let earthSection = document.getElementById("earth");
  let marsSection = document.getElementById("mars");
  let jupiterSection = document.getElementById("jupiter");
  let saturnSection = document.getElementById("saturn");

  // clear text sections after each submit
  let sections = Array.from(document.getElementsByClassName("planet"));
  sections.forEach((section) => {
    section.innerHTML = "";
  });

  // populate text sections
  // mercury
  mercSection.innerHTML += `
  <p>My age on Mercury: ${myBirthday.planets.mercury.yearsOld}</p>
  <p>Years left to live on Mercury: ${myBirthday.planets.mercury.timeLeft()}</p>
  <p>${myBirthday.planets.mercury.yearsLeft()}</p>`;

  // venus
  venusSection.innerHTML += `
  <p>My age on Venus: ${myBirthday.planets.venus.yearsOld}</p>
  <p>Years left to live on Venus: ${myBirthday.planets.venus.timeLeft()}</p>
  <p>${myBirthday.planets.venus.yearsLeft()}</p>`;

  // earth
  earthSection.innerHTML += `
  <p>My age on Earth: ${myBirthday.planets.earth.yearsOld}</p>
  <p>Years left to live on Earth: ${myBirthday.planets.earth.timeLeft()}</p>
  <p>${myBirthday.planets.earth.yearsLeft()}</p>`;

  // mars
  marsSection.innerHTML += `
  <p>My age on Mars: ${myBirthday.planets.mars.yearsOld}</p>
  <p>Years left to live on Mars: ${myBirthday.planets.mars.timeLeft()}</p>
  <p>${myBirthday.planets.mars.yearsLeft()}</p>`;

  // jupiter
  jupiterSection.innerHTML += `
  <p>My age on Jupiter: ${myBirthday.planets.jupiter.yearsOld}</p>
  <p>Years left to live on Jupiter: ${myBirthday.planets.jupiter.timeLeft()}</p>
  <p>${myBirthday.planets.jupiter.yearsLeft()}</p>`;

  // saturn
  saturnSection.innerHTML += `
  <p>My age on Saturn: ${myBirthday.planets.saturn.yearsOld}</p>
  <p>Years left to live on Saturn: ${myBirthday.planets.saturn.timeLeft()}</p>
  <p>${myBirthday.planets.saturn.yearsLeft()}</p>`;
});
