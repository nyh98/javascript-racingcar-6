import INPUT_VIEW from './racingCar/domain/InputView.js';
import Car from './racingCar/domain/Car.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const INPUT_NAMES = await INPUT_VIEW.carNames();
    const CYCLE_COUNT = await INPUT_VIEW.cycleCount();

    const CARS = INPUT_NAMES.map((name) => new Car(name));

    for (let i = 0; i < CYCLE_COUNT; i++) {
      CARS.forEach((car) => {
        car.moveCar();
        car.output();
      });
      Console.print('');
    }
  }
}

export default App;
