import { Console } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = '';
  }

  move(dice) {
    if (dice) {
      this.#position += '-';
    }
  }

  validateWinner(FarthestDistance) {
    return this.calculateDistance() === FarthestDistance;
  }

  getName() {
    return this.#name;
  }

  calculateDistance() {
    return this.#position.length;
  }

  nowPosition() {
    Console.print(`${this.#name} : ${this.#position}`);
  }
}

export default Car;
