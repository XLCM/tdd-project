export class PlanetaryCalculator {
  constructor(birthday) {
    this.now = new Date().getTime();
    this.birthday = new Date(birthday).getTime();
    this.age = parseInt(this.now - this.birthday);
    this.EarthLifeExpectancy = parseFloat(78.79);
    this.planets = {
      earth: {
        yearsOld: parseFloat(Math.floor((this.age / 31557600000) * 100) / 100),
        timeLeft: this.EarthLifeExpectancy - this.yearsOld,
      },
      mercury: {
        yearsOld: parseFloat(Math.floor((this.age / 7574031360) * 100) / 100),
        timeLeft: this.EarthLifeExpectancy - this.yearsOld,
      },
    };
  }
}
