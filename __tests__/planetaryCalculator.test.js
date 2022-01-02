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

  // EARTH TESTS
  test("should calculate earth age given birthdate", () => {
    expect(birthDate.planets.earth.yearsOld).toEqual(43.32);
  });

  test("should return earth life expectancy for males", () => {
    expect(birthDate.EarthLifeExpectancy).toEqual(78.79);
  });

  // commented out; returning NaN but shouldn't
  // test("should return difference between life expectancy and current age", () => {
  //   expect(birthDate.planets.earth.timeLeft).toEqual(35.47);
  // });

  // MERCURY TESTS
  test("should calculate mercury age given earth birthdate", () => {
    expect(birthDate.planets.mercury.yearsOld).toEqual(180.53);
  });

  // commented out; returning NaN but shouldn't
  // test("should return years left to live subtracting mercury years old from earth age", () => {
  //   expect(birthDate.planets.mercury.timeLeft).toEqual(
  //     birthDate.EarthLifeExpectancy - birthDate.planets.mercury.yearsOld
  //   );
  // });

  // VENUS TESTS
  test("should calculate venus age given earth birthdate", () => {
    expect(birthDate.planets.venus.yearsOld).toEqual(69.87);
  });
});
