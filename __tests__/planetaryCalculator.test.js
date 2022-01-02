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
    expect(birthDate.planets.earth.yearsOld).toEqual(43.33);
  });

  test("should return earth life expectancy for males", () => {
    expect(birthDate.EarthLifeExpectancy).toEqual(78.79);
  });

  test("should return difference between life expectancy and current age", () => {
    expect(birthDate.planets.earth.timeLeft()).toEqual(35.56);
  });

  test("should return years left to live on earth", () => {
    expect(birthDate.planets.earth.yearsLeft()).toEqual(
      "You have 35.56 years left to live on Earth."
    );
  });

  // MERCURY TESTS
  test("should calculate mercury age given earth birthdate", () => {
    expect(birthDate.planets.mercury.yearsOld).toEqual(180.53);
  });

  test("should return years left to live subtracting mercury years old from earth age", () => {
    expect(birthDate.planets.mercury.timeLeft()).toEqual(
      birthDate.EarthLifeExpectancy - birthDate.planets.mercury.yearsOld
    );
  });

  test("should return years left to live on mercury", () => {
    expect(birthDate.planets.mercury.yearsLeft()).toEqual(
      "You have lived 101.74 years longer than expected on Mercury."
    );
  });

  // VENUS TESTS
  test("should calculate venus age given earth birthdate", () => {
    expect(birthDate.planets.venus.yearsOld).toEqual(69.88);
  });

  test("should return years left to live subtracting venus years old from earth age", () => {
    expect(birthDate.planets.venus.timeLeft()).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.venus.yearsOld
    );
  });

  test("should return years left to live on venus", () => {
    expect(birthDate.planets.venus.yearsLeft()).toEqual(
      "You have 8.91 years left to live on Venus."
    );
  });

  // MARS TESTS
  test("should calculate mars age given earth birthdate", () => {
    expect(birthDate.planets.mars.yearsOld).toEqual(23.04);
  });

  test("should return years left to live subtracting mars years old from earth age", () => {
    expect(birthDate.planets.mars.timeLeft()).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.mars.yearsOld
    );
  });

  test("should return years left to live on mars", () => {
    expect(birthDate.planets.mars.yearsLeft()).toEqual(
      "You have 55.75 years left to live on Mars."
    );
  });

  // JUPITER TESTS
  test("should calculate jupiter age given earth birthdate", () => {
    expect(birthDate.planets.jupiter.yearsOld).toEqual(3.65);
  });

  test("should return years left to live subtracting jupiter years old from earth age", () => {
    expect(birthDate.planets.jupiter.timeLeft()).toEqual(
      birthDate.EarthLifeExpectancy - birthDate.planets.jupiter.yearsOld
    );
  });

  test("should return years left to live on jupiter", () => {
    expect(birthDate.planets.jupiter.yearsLeft()).toEqual(
      "You have 75.14 years left to live on Jupiter."
    );
  });

  // SATURN TESTS
  test("should calculate saturn age given earth birthdate", () => {
    expect(birthDate.planets.saturn.yearsOld).toEqual(1.47);
  });

  test("should return years left to live subtracting jupiter years old from earth age", () => {
    expect(birthDate.planets.jupiter.timeLeft()).toEqual(
      birthDate.EarthLifeExpectancy - birthDate.planets.jupiter.yearsOld
    );
  });

  test("should return years left to live on saturn", () => {
    expect(birthDate.planets.saturn.yearsLeft()).toEqual(
      "You have 77.32 years left to live on Saturn."
    );
  });
});
