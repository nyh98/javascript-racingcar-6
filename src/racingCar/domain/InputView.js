import { Console } from '@woowacourse/mission-utils';
import ERROR_LIST from './ErrorList.js';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async carNames() {
    const CAR_NAMES = await Console.readLineAsync(MESSAGES.inputNames);
    const DIVIDE_NAMES = CAR_NAMES.split(',');
    ERROR_LIST.allCheckName(DIVIDE_NAMES);
    return DIVIDE_NAMES;
  },

  async cycleCount() {
    const COUNT = await Console.readLineAsync(MESSAGES.inputCycle);
    ERROR_LIST.validateCycle(COUNT);
    const CYCLE_COUNT = Number(COUNT);
    return CYCLE_COUNT;
  },
});

export default INPUT_VIEW;
