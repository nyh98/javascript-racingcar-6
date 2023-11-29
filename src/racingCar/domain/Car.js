import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = '';
  }

  move() {
    if (this.dice()) {
      this.#position += '-';
    }
  }

  calculateDistance() {
    return this.#position.length;
  }

  dice() {
    const NUMBER = Random.pickNumberInRange(0, 9);
    return NUMBER > 3;
  }

  nowPosition() {
    Console.print(`${this.#name} : ${this.#position}`);
  }
}

export default Car;
