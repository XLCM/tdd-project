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

  // beforeEach(() => {
  //   let now = 1641073333289;
  //   let birthday = 273740400000;
  // });

  test("should return difference between now and birthday in ms", () => {
    let birthday = "1978 September 4";
    let birthDate = new PlanetaryCalculator(birthday);
    let now = new Date().getTime();
    expect(birthDate.age).toBeGreaterThan(1367332933289);
  });
});
