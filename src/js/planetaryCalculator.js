export class PlanetaryCalculator {
  constructor(birthday) {
    this.now = new Date().getTime();
    this.birthday = new Date(birthday).getTime();
    this.age = parseInt(this.now - this.birthday);
    this.EarthLifeExpectancy = parseFloat(78.79);
    this.planets = {
      Earth: {
        name: "Earth",
        divisor: 31557600000,
      },
      Mercury: {
        name: "Mercury",
        divisor: 7574031360,
      },
      Venus: {
        name: "Venus",
        divisor: 19565712000,
      },
      Mars: {
        name: "Mars",
        divisor: 59328288000,
      },
      Jupiter: {
        name: "Jupiter",
        divisor: 374273136000,
      },
      Saturn: {
        name: "Saturn",
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
  stateTimeLeft() {
    for (let planet in this.planets) {
      if (this.planets[planet].timeLeft > 0) {
        this.planets[planet].timeLeftStatement = `<p><strong>Years left to live on ${this.planets[planet].name}:</strong> ${this.planets[planet].timeLeft}</p>`;
      } else {
        this.planets[planet].timeLeftStatement = `<p><strong>Years lived past your life expectancy on ${this.planets[planet].name}:</strong> ${-this.planets[planet].timeLeft}</p>`;
      }
    }
  }
}
