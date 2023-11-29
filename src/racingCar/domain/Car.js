import { Console, Random } from '@woowacourse/mission-utils';

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

  calculateDistance() {
    return this.#position.length;
  }

  nowPosition() {
    Console.print(`${this.#name} : ${this.#position}`);
  }
}

export default Car;
