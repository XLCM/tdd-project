import { PlanetaryCalculator } from "../src/js/planetaryCalculator.js";

describe("PlanetaryCalculator", () => {
  test("should create new object with birthday given a date and return in ms", () => {
    let birthday = "1978 September 4";
    let birthDate = new PlanetaryCalculator(birthday);
    expect(birthDate.birthday).toEqual(273740400000);
  });
});
