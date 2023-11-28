import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = '';
  }

  moveCar() {
    if (this.dice()) {
      this.#position += '-';
    }
  }

  dice() {
    const NUMBER = Random.pickNumberInRange(0, 9);
    return NUMBER > 3;
  }

  isWin() {}

  output() {
    Console.print(`${this.#name} : ${this.#position}`);
  }
}

export default Car;
