import INPUT_VIEW from './racingCar/domain/InputView.js';
import Car from './racingCar/domain/Car.js';

class App {
  async play() {
    const CAR_NAMES = await INPUT_VIEW.carNames();
    const CYCLE_COUNT = await INPUT_VIEW.cycleCount();

    const CARS = CAR_NAMES.map((name) => new Car(name));
  }
}

export default App;
