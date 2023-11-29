import MESSAGES from './Messages.js';
import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  rollDice() {
    const NUMBER = Random.pickNumberInRange(0, 9);

    return NUMBER;
  }

  start(turnCount) {
    Console.print(MESSAGES.play);

    for (let i = 0; i < turnCount; i++) {
      this.#cars.forEach((car) => {
        car.move(this.rollDice());
        car.printNowPosition();
      });

      Console.print('');
    }

    return this.getWinners();
  }

  printWinner(cars) {
    const WINNER_NAMES = cars.map((car) => car.getName());
    const OUTPUT_NAME = WINNER_NAMES.join(',');
    Console.print(`${MESSAGES.win} ${OUTPUT_NAME}`);
  }

  getWinners() {
    const FARTHEST_DISTANCE = this.findFarthestDistance();
    return this.#cars.filter((car) => car.getPosition() === FARTHEST_DISTANCE);
  }

  findFarthestDistance() {
    const POSITIONS = this.#cars.map((car) => car.getPosition());
    const FARTHEST_DISTANCE = Math.max(...POSITIONS);

    return FARTHEST_DISTANCE;
  }
}

export default Race;
