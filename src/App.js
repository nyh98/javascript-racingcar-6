import INPUT_VIEW from './racingCar/domain/InputView.js';
import Car from './racingCar/domain/Car.js';
import Race from './racingCar/domain/Race.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const INPUT_NAMES = await INPUT_VIEW.carNames();
    const CYCLE_COUNT = await INPUT_VIEW.cycleCount();

    const CARS = INPUT_NAMES.map((name) => new Car(name));

    Race.start(CARS, CYCLE_COUNT);
  }
}

export default App;
