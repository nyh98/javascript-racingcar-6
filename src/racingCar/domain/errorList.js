import MESSAGES from './Message.js';

const ERROR_LIST = Object.freeze({
  overName(divideNames) {
    divideNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(MESSAGES.overName);
      }
    });
  },

  allVacuum(divideNames) {
    divideNames.forEach((name) => {
      if (name.replace(/\s/g, '').length === 0) {
        throw new Error(MESSAGES.allVacuum);
      }
    });
  },

  allCheckName(divideNames) {
    this.overName(divideNames);
    this.allVacuum(divideNames);
  },
});

export default ERROR_LIST;
