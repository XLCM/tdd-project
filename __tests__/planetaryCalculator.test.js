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
    expect(birthDate.birthday).toEqual(63100800000);
  });

  test("should return difference between now and birthday in ms", () => {
    expect(birthDate.age).toBeGreaterThan(1367332933289);
  });

  birthDate = undefined;

  beforeEach(() => {
    let now = new Date("2022 January 1");
    birthDate = new PlanetaryCalculator("1972 January 1");
    birthDate.calculateAge();
    birthDate.calculateTimeLeft();
  });

  // EARTH TESTS
  test("should calculate earth age given birthdate", () => {
    expect(birthDate.planets.earth.yearsOld).toEqual(50);
  });

  test("should return difference between life expectancy and current age", () => {
    expect(birthDate.planets.earth.timeLeft).toEqual(28.79);
  });

  // MERCURY TESTS
  test("should calculate mercury age given earth birthdate", () => {
    expect(birthDate.planets.mercury.yearsOld).toEqual(208);
  });

  test("should return years left to live subtracting mercury years old from earth age", () => {
    expect(birthDate.planets.mercury.timeLeft).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.mercury.yearsOld
    );
  });

  // VENUS TESTS
  test("should calculate venus age given earth birthdate", () => {
    expect(birthDate.planets.venus.yearsOld).toEqual(81);
  });

  test("should return years left to live subtracting venus years old from earth age", () => {
    expect(birthDate.planets.venus.timeLeft).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.venus.yearsOld
    );
  });

  // MARS TESTS
  test("should calculate mars age given earth birthdate", () => {
    expect(birthDate.planets.mars.yearsOld).toEqual(27);
  });

  test("should return years left to live subtracting mars years old from earth age", () => {
    expect(birthDate.planets.mars.timeLeft).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.mars.yearsOld
    );
  });

  // JUPITER TESTS
  test("should calculate jupiter age given earth birthdate", () => {
    expect(birthDate.planets.jupiter.yearsOld).toEqual(4);
  });

  test("should return years left to live subtracting jupiter years old from earth age", () => {
    expect(birthDate.planets.jupiter.timeLeft).toEqual(74.79);
  });

  // SATURN TESTS
  test("should calculate saturn age given earth birthdate", () => {
    expect(birthDate.planets.saturn.yearsOld).toEqual(2);
  });

  test("should return years left to live subtracting jupiter years old from earth age", () => {
    expect(birthDate.planets.saturn.timeLeft).toEqual(
      birthDate.EarthLifeExpectancy - birthDate.planets.saturn.yearsOld
    );
  });

  // // Tests requiring nonconstant birthdate and age values

  // Mercury
  test("Mercury: should return time left to live on Mercury", () => {
    let birthDate = new PlanetaryCalculator("2018 September 4");
    expect(birthDate.planets.mercury.yearsLeft).toEqual(
      "You have 64.79 years left to live on Mercury."
    );
  });

  // // Earth
  // test("Earth: should return time left to live on Earth", () => {
  //   let birthDate = new PlanetaryCalculator("1878 September 4");
  //   expect(birthDate.planets.earth.yearsLeft()).toEqual(
  //     "You have lived 64.11 years longer than expected on Earth."
  //   );
  // });

  // // Venus
  // test("Venus: should return time left to live on Venus", () => {
  //   let birthDate = new PlanetaryCalculator("1878 September 4");
  //   expect(birthDate.planets.venus.yearsLeft()).toEqual(
  //     "You have lived 152.21 years longer than expected on Venus."
  //   );
  // });

  // // Mars
  // test("Mars: should return time left to live on Mars", () => {
  //   let birthDate = new PlanetaryCalculator("1778 September 4");
  //   expect(birthDate.planets.mars.yearsLeft()).toEqual(
  //     "You have lived 50.21 years longer than expected on Mars."
  //   );
  // });

  // // Jupiter
  // test("Jupiter: should return time left to live on Jupiter", () => {
  //   let birthDate = new PlanetaryCalculator("998 September 4");
  //   expect(birthDate.planets.jupiter.yearsLeft()).toEqual(
  //     "You have lived 7.21 years longer than expected on Jupiter."
  //   );
  // });

  // // Saturn
  // test("Jupiter: should return time left to live on Jupiter", () => {
  //   let birthDate = new PlanetaryCalculator("998 September 4");
  //   expect(birthDate.planets.jupiter.yearsLeft()).toEqual(
  //     "You have lived 7.21 years longer than expected on Jupiter."
  //   );
  // });
});
