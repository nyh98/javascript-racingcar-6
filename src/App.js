import INPUT_VIEW from './racingCar/domain/InputView.js';

class App {
  async play() {
    const CAR_NAMES = await INPUT_VIEW.carNames();
    const CYCLE_COUNT = await INPUT_VIEW.cycleCount();
  }
}

export default App;
