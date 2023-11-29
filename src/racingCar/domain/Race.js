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
    const WINNER = this.winner(carsArray);
    const OUTPUT_NAME = WINNER.join(',');
    Console.print(`${MESSAGES.win} ${OUTPUT_NAME}`);
  }

  static winner(carsArray) {
    const WINNER_NAMES = [];
    const FARTHEST_DISTANCE = this.findFarthestDistance(carsArray);

    for (const CAR of carsArray) {
      if (CAR.validateWinner(FARTHEST_DISTANCE)) {
        WINNER_NAMES.push(CAR.getName());
      }
    }

    return WINNER_NAMES;
  }

  static findFarthestDistance(carsArray) {
    let count = 0;

    carsArray.forEach((car) => {
      const CAR_DISTANCE = car.calculateDistance();
      if (CAR_DISTANCE > count) {
        count = CAR_DISTANCE;
      }
    });

    return count;
  }
}

export default Race;
