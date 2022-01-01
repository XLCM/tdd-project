import { PlanetaryCalculator } from "../src/js/planetaryCalculator.js";

describe("PlanetaryCalculator", () => {
  test("should create a 'now' date in ms to measure from", () => {
    let now = new Date().getTime();
    let planetaryCalculator = new PlanetaryCalculator(now);
    expect(planetaryCalculator.now).toEqual(now);
  });

  test("should create new object with birthday given a date and return in ms", () => {
    let birthday = "1978 September 4";
    let birthDate = new PlanetaryCalculator(birthday);
    expect(birthDate.birthday).toEqual(273740400000);
  });
});
