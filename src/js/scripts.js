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
  mercSection.innerHTML += `<p><strong>Your age on Mercury:</strong> ${myBirthday.planets.mercury.yearsOld}</p>
  <p>Years left to live on Mercury:</strong> ${myBirthday.planets.mercury.timeLeft()}</p>
  <p>${myBirthday.planets.mercury.yearsLeft()}</p>`;

  // venus
  venusSection.innerHTML += `<p><strong>Your age on Venus:</strong> ${myBirthday.planets.venus.yearsOld}</p>
  <p><strong>Years left to live on Venus:</strong> ${myBirthday.planets.venus.timeLeft()}</p>
  <p>${myBirthday.planets.venus.yearsLeft()}</p>`;

  // earth
  earthSection.innerHTML += `
  <p><strong>Your age on Earth:</strong> ${myBirthday.planets.earth.yearsOld}</p>
  <p><strong>Years left to live on Earth:</strong> ${myBirthday.planets.earth.timeLeft()}</p>
  <p>${myBirthday.planets.earth.yearsLeft()}</p>`;

  // mars
  marsSection.innerHTML += `
  <p><strong>Your age on Mars:</strong> ${myBirthday.planets.mars.yearsOld}</p>
  <p><strong>Years left to live on Mars:</strong> ${myBirthday.planets.mars.timeLeft()}</p>
  <p>${myBirthday.planets.mars.yearsLeft()}</p>`;

  // jupiter
  jupiterSection.innerHTML += `
  <p><strong>Your age on Jupiter:</strong> ${myBirthday.planets.jupiter.yearsOld}</p>
  <p><strong>Years left to live on Jupiter:</strong> ${myBirthday.planets.jupiter.timeLeft()}</p>
  <p>${myBirthday.planets.jupiter.yearsLeft()}</p>`;

  // saturn
  saturnSection.innerHTML += `
  <p><strong>Your age on Saturn:</strong> ${myBirthday.planets.saturn.yearsOld}</p>
  <p><strong>Years left to live on Saturn:</strong> ${myBirthday.planets.saturn.timeLeft()}</p>
  <p>${myBirthday.planets.saturn.yearsLeft()}</p>`;
});
