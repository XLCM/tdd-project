export class PlanetaryCalculator {
  constructor(birthday) {
    this.now = new Date().getTime();
    this.birthday = new Date(birthday).getTime();
    this.age = this.now - this.birthday;
    this.planets = {
      earth: {
        age: this.age / 31557600000,
      },
    };
  }
}
