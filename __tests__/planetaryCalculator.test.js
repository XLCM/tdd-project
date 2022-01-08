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
    birthDate.stateTimeLeft();
  });

  // EARTH TESTS
  test("Earth: should calculate earth age given birthdate", () => {
    expect(birthDate.planets.Earth.yearsOld).toEqual(50);
  });

  test("Earth: should return difference between life expectancy and current age", () => {
    expect(birthDate.planets.Earth.timeLeft).toEqual(28.79);
  });

  test("Earth: should return years left to live r/t life expectancy", () => {
    expect(birthDate.planets.Earth.timeLeftStatement).toEqual("<p><strong>Years left to live on Earth:</strong> 28.79</p>");
  });

  // MERCURY TESTS
  test("Mercury: should calculate mercury age given earth birthdate", () => {
    expect(birthDate.planets.Mercury.yearsOld).toEqual(208);
  });

  test("Mercury: should return years left to live subtracting mercury years old from earth age", () => {
    expect(birthDate.planets.Mercury.timeLeft).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.Mercury.yearsOld
    );
  });

  test("Mercury: should return years left to live r/t life expectancy", () => {
    expect(birthDate.planets.Mercury.timeLeftStatement).toEqual("<p><strong>Years lived past your life expectancy on Mercury:</strong> 129.21</p>");
  });

  // VENUS TESTS
  test("Venus: should calculate venus age given Earth birthdate", () => {
    expect(birthDate.planets.Venus.yearsOld).toEqual(81);
  });

  test("Venus: should return years left to live subtracting venus years old from earth age", () => {
    expect(birthDate.planets.Venus.timeLeft).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.Venus.yearsOld
    );
  });

  test("Venus: should return years left to live r/t life expectancy", () => {
    expect(birthDate.planets.Venus.timeLeftStatement).toEqual("<p><strong>Years lived past your life expectancy on Venus:</strong> 2.21</p>");
  });

  // MARS TESTS
  test("Mars: should calculate Mars age given earth birthdate", () => {
    expect(birthDate.planets.Mars.yearsOld).toEqual(27);
  });

  test("Mars: should return years left to live subtracting mars years old from earth age", () => {
    expect(birthDate.planets.Mars.timeLeft).toBeCloseTo(
      birthDate.EarthLifeExpectancy - birthDate.planets.Mars.yearsOld
    );
  });

  test("Mars: should return years left to live r/t life expectancy", () => {
    expect(birthDate.planets.Mars.timeLeftStatement).toEqual("<p><strong>Years left to live on Mars:</strong> 51.79</p>");
  });

  // JUPITER TESTS
  test("Jupiter: should calculate Jupiter age given earth birthdate", () => {
    expect(birthDate.planets.Jupiter.yearsOld).toEqual(4);
  });

  test("Jupiter: should return years left to live subtracting jupiter years old from earth age", () => {
    expect(birthDate.planets.Jupiter.timeLeft).toEqual(74.79);
  });

  test("Jupiter: should return years left to live r/t life expectancy", () => {
    expect(birthDate.planets.Jupiter.timeLeftStatement).toEqual("<p><strong>Years left to live on Jupiter:</strong> 74.79</p>");
  });

  // SATURN TESTS
  test("Saturn: should calculate saturn age given earth birthdate", () => {
    expect(birthDate.planets.Saturn.yearsOld).toEqual(2);
  });

  test("Saturn: should return years left to live subtracting jupiter years old from earth age", () => {
    expect(birthDate.planets.Saturn.timeLeft).toEqual(
      birthDate.EarthLifeExpectancy - birthDate.planets.Saturn.yearsOld
    );
  });

  test("Saturn: should return years left to live r/t life expectancy", () => {
    expect(birthDate.planets.Saturn.timeLeftStatement).toEqual("<p><strong>Years left to live on Saturn:</strong> 76.79</p>");
  });

  // Tests requiring nonconstant birthdate and age values

  // Mercury
  test("Mercury: should return years left to live r/t life expectancy", () => {
    let birthDate = new PlanetaryCalculator("2018 September 4");
    birthDate.calculateAge();
    birthDate.calculateTimeLeft();
    birthDate.stateTimeLeft();
    expect(birthDate.planets.Mercury.timeLeftStatement).toEqual("<p><strong>Years left to live on Mercury:</strong> 64.79</p>");
  });

  // Earth
  test("Earth: should return years left to live r/t life expectancy", () => {
    let birthDate = new PlanetaryCalculator("1878 September 4");
    birthDate.calculateAge();
    birthDate.calculateTimeLeft();
    birthDate.stateTimeLeft();
    expect(birthDate.planets.Earth.timeLeftStatement).toEqual("<p><strong>Years lived past your life expectancy on Earth:</strong> 64.21</p>");
  });

  // Venus
  test("Venus: should return years left to live r/t life expectancy", () => {
    let birthDate = new PlanetaryCalculator("1878 September 4");
    birthDate.calculateAge();
    birthDate.calculateTimeLeft();
    birthDate.stateTimeLeft();
    expect(birthDate.planets.Venus.timeLeftStatement).toEqual("<p><strong>Years lived past your life expectancy on Venus:</strong> 152.21</p>");
  });

  // Mars
  test("Mars: should return years left to live r/t life expectancy", () => {
    let birthDate = new PlanetaryCalculator("1778 September 4");
    birthDate.calculateAge();
    birthDate.calculateTimeLeft();
    birthDate.stateTimeLeft();
    expect(birthDate.planets.Mars.timeLeftStatement).toEqual("<p><strong>Years lived past your life expectancy on Mars:</strong> 50.21</p>");
  });

  // Jupiter
  test("Jupiter: should return years left to live r/t life expectancy", () => {
    let birthDate = new PlanetaryCalculator("998 September 4");
    birthDate.calculateAge();
    birthDate.calculateTimeLeft();
    birthDate.stateTimeLeft();
    expect(birthDate.planets.Jupiter.timeLeftStatement).toEqual("<p><strong>Years lived past your life expectancy on Jupiter:</strong> 7.21</p>");
  });

// Saturn can't really be tested because it's time cycle is too long for earch and .date()

  // // Saturn
  // test("Saturn: should return years left to live r/t life expectancy", () => {
  //   let birthDate = new PlanetaryCalculator("2 September 4");
  //   birthDate.now = new Date("9022 January 1").getTime();
  //   birthDate.calculateAge();
  //   birthDate.calculateTimeLeft();
  //   birthDate.stateTimeLeft();
  //   expect(birthDate.planets.Saturn.timeLeftStatement).toEqual("<p><strong>Years lived past your life expectancy on Saturn:</strong> 7.21</p>");
  // });

});
