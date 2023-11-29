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

  static winner() {}

  static findFarthestDistance(array) {
    let count = 0;
    array.forEach((car) => {
      if (car.calculateDistance() > count) {
        count = car.calculateDistance();
      }
    });
    return count;
  }
}

export default Race;
