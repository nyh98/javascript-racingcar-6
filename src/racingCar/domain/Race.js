import MESSAGES from './Messages.js';
import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class Race {
  static throwDice() {
    const NUMBER = Random.pickNumberInRange(0, 9);

    return NUMBER;
  }

  static start(carsArray, count) {
    Console.print(MESSAGES.play);

    for (let i = 0; i < count; i++) {
      carsArray.forEach((car) => {
        car.move(this.throwDice());
        car.printNowPosition();
      });

      Console.print('');
    }
  }

  static printWinner(carsArray) {
    const WINNER_NAMES = this.getWinnerNames(carsArray);
    const OUTPUT_NAME = WINNER_NAMES.join(',');
    Console.print(`${MESSAGES.win} ${OUTPUT_NAME}`);
  }

  static getWinnerNames(carsArray) {
    const WINNER_NAMES = [];
    const FARTHEST_DISTANCE = this.findFarthestDistance(carsArray);

    for (const CAR of carsArray) {
      if (CAR.getPosition() === FARTHEST_DISTANCE) {
        WINNER_NAMES.push(CAR.getName());
      }
    }

    return WINNER_NAMES;
  }

  static findFarthestDistance(carsArray) {
    let FarthestDistance = 0;

    carsArray.forEach((car) => {
      const CAR_DISTANCE = car.getPosition();
      if (CAR_DISTANCE > FarthestDistance) {
        FarthestDistance = CAR_DISTANCE;
      }
    });

    return FarthestDistance;
  }
}

export default Race;
