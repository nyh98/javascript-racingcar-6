import MESSAGES from './Messages.js';
import { Console } from '@woowacourse/mission-utils';

class Race {
  static start(array, count) {
    Console.print(MESSAGES.play);
    for (let i = 0; i < count; i++) {
      array.forEach((car) => {
        car.move();
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
