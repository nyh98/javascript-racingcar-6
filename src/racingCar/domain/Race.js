import MESSAGES from './Messages.js';
import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  throwDice() {
    const NUMBER = Random.pickNumberInRange(0, 9);

    return NUMBER;
  }

  start(turnCount) {
    Console.print(MESSAGES.play);

    for (let i = 0; i < turnCount; i++) {
      this.#cars.forEach((car) => {
        car.move(this.throwDice());
        car.printNowPosition();
      });

      Console.print('');
    }
  }

  printWinner() {
    const WINNER_NAMES = this.getWinnerNames();
    const OUTPUT_NAME = WINNER_NAMES.join(',');
    Console.print(`${MESSAGES.win} ${OUTPUT_NAME}`);
  }

  getWinnerNames() {
    const WINNER_NAMES = [];
    const FARTHEST_DISTANCE = this.findFarthestDistance();

    for (const CAR of this.#cars) {
      if (CAR.getPosition() === FARTHEST_DISTANCE) {
        WINNER_NAMES.push(CAR.getName());
      }
    }

    return WINNER_NAMES;
  }

  findFarthestDistance() {
    let FarthestDistance = 0;

    this.#cars.forEach((car) => {
      const CAR_DISTANCE = car.getPosition();
      if (CAR_DISTANCE > FarthestDistance) {
        FarthestDistance = CAR_DISTANCE;
      }
    });

    return FarthestDistance;
  }
}

export default Race;
