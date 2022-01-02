import "../css/styles.scss";

console.log("scripts.js loaded");

import { PlanetaryCalculator } from "./planetaryCalculator.js";

let temp = new PlanetaryCalculator("1978 September 4");

console.log(`Current time: ${temp.now}`);
console.log(`Birthday: ${temp.birthday}`);
console.log(`Age: ${temp.age}`);
console.log(`Current time: ${temp.now}`);
console.log(`Earth Age: ${temp.planets.earth.yearsOld}`);
console.log(`Earth Age type: ${typeof temp.planets.earth.yearsOld}`);
console.log(`Earth life expectancy: ${temp.planets.earth.lifeExpectancy}`);
console.log(
  `Earth life expectancy type: ${typeof temp.planets.earth.yearsOld}`
);
console.log(`Earth time left: ${parseFloat(temp.planets.earth.timeLeft)}`);
console.log(`Earth time left type: ${typeof temp.planets.earth.timeLeft}`);
