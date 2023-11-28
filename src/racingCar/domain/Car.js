import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = '';
  }

  racingStart(cars, cycleCount) {
    cars.forEach((name) => {
      if (this.dice()) {
        this.#position;
      }
    });
  }

  dice() {
    const NUMBER = Random.pickNumberInRange(0, 9);
    return NUMBER > 3;
  }
}

export default Car;
