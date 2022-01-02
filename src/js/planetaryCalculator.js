export class PlanetaryCalculator {
  constructor(birthday) {
    this.now = new Date().getTime();
    this.birthday = new Date(birthday).getTime();
    this.age = parseInt(this.now - this.birthday);
    this.EarthLifeExpectancy = parseFloat(78.79);
    this.planets = {
      earth: {
        yearsOld: parseFloat(Math.floor((this.age / 31557600000) * 100) / 100),
        lifeExpectancy: 78.89,
        timeLeft() {
          return this.lifeExpectancy - this.yearsOld;
        },
        yearsLeft() {
          if (this.timeLeft() > 0) {
            return `You have ${this.timeLeft()} years left to live on Earth.`;
          } else {
            return `You have lived ${-this.timeLeft()} years longer than expected on Earth.`;
          }
        },
      },
      mercury: {
        yearsOld: parseFloat(Math.floor((this.age / 7574031360) * 100) / 100),
        lifeExpectancy: 78.79,
        timeLeft() {
          return this.lifeExpectancy - this.yearsOld;
        },
        yearsLeft() {
          if (this.timeLeft() > 0) {
            return `You have ${this.timeLeft()} years left to live on Mercury.`;
          } else {
            return `You have lived ${-this.timeLeft()} years longer than expected on Mercury.`;
          }
        },
      },
      venus: {
        yearsOld: parseFloat(Math.floor((this.age / 19565712000) * 100) / 100),
        lifeExpectancy: 78.79,
        timeLeft() {
          return this.lifeExpectancy - this.yearsOld;
        },
      },
      mars: {
        yearsOld: parseFloat(Math.floor((this.age / 59328288000) * 100) / 100),
        lifeExpectancy: 78.79,
        timeLeft() {
          return this.lifeExpectancy - this.yearsOld;
        },
      },
      jupiter: {
        yearsOld: parseFloat(Math.floor((this.age / 374273136000) * 100) / 100),
        lifeExpectancy: 78.79,
        timeLeft() {
          return this.lifeExpectancy - this.yearsOld;
        },
      },
      saturn: {
        yearsOld: parseFloat(Math.floor((this.age / 927793440000) * 100) / 100),
        lifeExpectancy: 78.79,
        timeLeft() {
          return this.lifeExpectancy - this.yearsOld;
        },
      },
    };
  }
  // timeLeft(age) {
  //   return this.EarthLifeExpectancy - age;
  // }
}
