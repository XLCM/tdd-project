import "../css/styles.scss";

import { PlanetaryCalculator } from "./planetaryCalculator.js";

// UI Logic

document.getElementById("submitBirthday").addEventListener("click", (event) => {
  event.preventDefault();
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let myBirthday = new PlanetaryCalculator(`${month} ${day} ${year}`);
  myBirthday.calculateAge();
  myBirthday.calculateTimeLeft();
  myBirthday.stateTimeLeft();

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
  mercSection.innerHTML += `<p><strong>Your age on Mercury:</strong> ${myBirthday.planets.Mercury.yearsOld}</p>
  <p>${myBirthday.planets.Mercury.timeLeftStatement}</p>`;

  // venus
  venusSection.innerHTML += `<p><strong>Your age on Venus:</strong> ${myBirthday.planets.Venus.yearsOld}</p>
  <p>${myBirthday.planets.Venus.timeLeftStatement}</p>`;

  // earth
  earthSection.innerHTML += `
  <p><strong>Your age on Earth:</strong> ${myBirthday.planets.Earth.yearsOld}</p>
  <p>${myBirthday.planets.Earth.timeLeftStatement}</p>`;

  // mars
  marsSection.innerHTML += `
  <p><strong>Your age on Mars:</strong> ${myBirthday.planets.Mars.yearsOld}</p>
  <p>${myBirthday.planets.Mars.timeLeftStatement}</p>`;

  // jupiter
  jupiterSection.innerHTML += `
  <p><strong>Your age on Jupiter:</strong> ${myBirthday.planets.Jupiter.yearsOld}</p>
  <p>${myBirthday.planets.Jupiter.timeLeftStatement}</p>`;

  // saturn
  saturnSection.innerHTML += `
  <p><strong>Your age on Saturn:</strong> ${myBirthday.planets.Saturn.yearsOld}</p>
  <p>${myBirthday.planets.Saturn.timeLeftStatement}</p>`;
});
