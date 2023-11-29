import INPUT_VIEW from './racingCar/domain/InputView.js';
import Car from './racingCar/domain/Car.js';
import Race from './racingCar/domain/Race.js';

class App {
  async play() {
    const INPUT_NAMES = await INPUT_VIEW.carNames();
    const TURN_COUNT = await INPUT_VIEW.turnCount();

    const CARS = INPUT_NAMES.map((name) => new Car(name));

    Race.start(CARS, TURN_COUNT);
    Race.printWinner(CARS);
  }
}

export default App;
