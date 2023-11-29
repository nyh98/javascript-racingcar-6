import MESSAGES from './Messages.js';

const ERROR_LIST = Object.freeze({
  validateOverName(divideNames) {
    divideNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(MESSAGES.overName);
      }
    });
  },

  validateAllVacuum(divideNames) {
    divideNames.forEach((name) => {
      if (name.replace(/\s/g, '').length === 0) {
        throw new Error(MESSAGES.allVacuum);
      }
    });
  },

  allCheckName(divideNames) {
    this.validateOverName(divideNames);
    this.validateAllVacuum(divideNames);
  },

  validateCycle(inputCycleCount) {
    const NOT_NUMBER = /[^\d]/g;
    if (NOT_NUMBER.test(inputCycleCount)) {
      throw new Error(MESSAGES.notNumber);
    }
  },
});

export default ERROR_LIST;
