import { PlanetaryCalculator } from "../src/js/planetaryCalculator.js";

describe("PlanetaryCalculator", () => {
  test("should create a 'now' date in ms to measure from", () => {
    let now = new Date().getTime();
    let planetaryCalculator = new PlanetaryCalculator(now);
    expect(planetaryCalculator.now).toEqual(now);
  });

  let birthDate;
  beforeEach(() => {
    birthDate = new PlanetaryCalculator("1978 September 4");
  });

  test("should create new object with birthday given a date and return in ms", () => {
    expect(birthDate.birthday).toEqual(273740400000);
  });

  test("should return difference between now and birthday in ms", () => {
    expect(birthDate.age).toBeGreaterThan(1367332933289);
  });

  test("should calculate earth age given birthdate", () => {
    expect(birthDate.planets.earth.yearsOld).toEqual(43.32);
  });
});
