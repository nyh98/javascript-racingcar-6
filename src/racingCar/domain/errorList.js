import MESSAGES from './Message.js';

const ERROR_LIST = Object.freeze({
  overName(divideNames) {
    divideNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(MESSAGES.overName);
      }
    });
  },
});

export default ERROR_LIST;
