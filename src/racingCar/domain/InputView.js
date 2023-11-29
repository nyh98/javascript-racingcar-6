import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async carNames() {
    const CAR_NAMES = await Console.readLineAsync(MESSAGES.inputNames);
    const DIVIDE_NAMES = CAR_NAMES.split(',');
    this.allValidateName(DIVIDE_NAMES);
    return DIVIDE_NAMES;
  },

  async turnCount() {
    const COUNT = await Console.readLineAsync(MESSAGES.inputCycle);
    this.validateCycle(COUNT);
    const CYCLE_COUNT = Number(COUNT);
    return CYCLE_COUNT;
  },

  validateOverName(divideNames) {
    divideNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(MESSAGES.overName);
      }
    });
  },

  validateAllBlank(divideNames) {
    divideNames.forEach((name) => {
      if (name.replace(/\s/g, '').length === 0) {
        throw new Error(MESSAGES.allVacuum);
      }
    });
  },

  allValidateName(divideNames) {
    this.validateOverName(divideNames);
    this.validateAllBlank(divideNames);
  },

  validateCycle(inputCycleCount) {
    const NOT_NUMBER = /[^\d]/g;
    if (NOT_NUMBER.test(inputCycleCount)) {
      throw new Error(MESSAGES.notNumber);
    }
  },
});

export default INPUT_VIEW;
