import MESSAGES from './Messages.js';
import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class Race {
  static dice() {
    const NUMBER = Random.pickNumberInRange(0, 9);
    const STANDARD = 3;

    return NUMBER > STANDARD;
  }

  static start(array, count) {
    Console.print(MESSAGES.play);

    for (let i = 0; i < count; i++) {
      array.forEach((car) => {
        car.move(this.dice());
        car.nowPosition();
      });

      Console.print(MESSAGES.vacuum);
    }
  }

  static winnerPrint(array) {
    const WINNER = this.winner(array);
    const OUTPUT_NAME = WINNER.join(',');
    Console.print(`${MESSAGES.win} ${OUTPUT_NAME}`);
  }

  static winner(array) {
    const WINNER_NAMES = [];
    const FARTHEST_DISTANCE = this.findFarthestDistance(array);

    for (const CAR of array) {
      if (CAR.validateWinner(FARTHEST_DISTANCE)) {
        WINNER_NAMES.push(CAR.getName());
      }
    }

    return WINNER_NAMES;
  }

  static findFarthestDistance(array) {
    let count = 0;

    array.forEach((car) => {
      const CAR_DISTANCE = car.calculateDistance();
      if (CAR_DISTANCE > count) {
        count = CAR_DISTANCE;
      }
    });

    return count;
  }
}

export default Race;
