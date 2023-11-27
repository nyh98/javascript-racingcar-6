import MESSAGES from './Message.js';

const ERROR_LIST = Object.freeze({
  checkOverName(divideNames) {
    divideNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(MESSAGES.overName);
      }
    });
  },

  checkAllVacuum(divideNames) {
    divideNames.forEach((name) => {
      if (name.replace(/\s/g, '').length === 0) {
        throw new Error(MESSAGES.allVacuum);
      }
    });
  },

  allCheckName(divideNames) {
    this.checkOverName(divideNames);
    this.checkAllVacuum(divideNames);
  },

  checkCycle(inputCycleCount) {
    const NOT_NUMBER = /[^\d]/g;
    if (NOT_NUMBER.test(inputCycleCount)) {
      throw new Error(MESSAGES.notNumber);
    }
  },
});

export default ERROR_LIST;
