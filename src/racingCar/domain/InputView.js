import { Console } from '@woowacourse/mission-utils';
import ERROR_LIST from './ErrorList.js';

const INPUT_VIEW = Object.freeze({
  async carNames() {
    const CAR_NAMES = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) :'
    );
    const DIVIDE_NAMES = CAR_NAMES.split(',');
    ERROR_LIST.allCheckName(DIVIDE_NAMES);
    return DIVIDE_NAMES;
  },

  async cycleCount() {
    const COUNT = await Console.readLineAsync('시도할 횟수는 몇 회인가요? :');
    ERROR_LIST.checkCycle(COUNT);
    const CYCLE_COUNT = Number(COUNT);
    return CYCLE_COUNT;
  },
});

export default INPUT_VIEW;
