import { Console } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(diceNumber) {
    const STANDARD = 3;
    if (diceNumber > STANDARD) {
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
