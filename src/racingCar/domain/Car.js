import { Console } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(diceNumber) {
    if (diceNumber > 3) {
      this.#position++;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  printNowPosition() {
    Console.print(`${this.#name} : ${'-'.repeat(this.#position)}`);
  }
}

export default Car;
