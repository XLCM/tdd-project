export class PlanetaryCalculator {
  constructor(birthday) {
    this.now = new Date().getTime();
    this.birthday = new Date(birthday).getTime();
    this.age = parseInt(this.now - this.birthday);
    this.EarthLifeExpectancy = parseFloat(78.79);
    this.planets = {
      earth: {
        divisor: 31557600000,
      },
      mercury: {
        divisor: 7574031360,
      },
      venus: {
        divisor: 19565712000,
      },
      mars: {
        divisor: 59328288000,
      },
      jupiter: {
        divisor: 374273136000,
      },
      saturn: {
        divisor: 927793440000,
      },
    };
  }
  calculateAge() {
    for (let planet in this.planets) {
      this.planets[planet].yearsOld =
        parseFloat(Math.round(this.age / this.planets[planet].divisor) * 100) /
        100;
    }
  }
  calculateTimeLeft() {
    for (let planet in this.planets) {
      this.planets[planet].timeLeft = parseFloat(
        Math.round(
          (this.EarthLifeExpectancy - this.planets[planet].yearsOld) * 100
        ) / 100
      );
    }
  }
}
