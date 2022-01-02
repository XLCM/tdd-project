export class PlanetaryCalculator {
  constructor(birthday) {
    this.now = new Date().getTime();
    this.birthday = new Date(birthday).getTime();
    this.age = parseInt(this.now - this.birthday);
    this.planets = {
      earth: {
        yearsOld: parseFloat(Math.floor((this.age / 31557600000) * 100) / 100),
        lifeExpectancy: parseFloat(78.79),
        timeLeft: this.lifeExpectancy - this.yearsOld,
      },
    };
  }
}
