import { Console } from '@woowacourse/mission-utils';
import ERROR_LIST from './errorList.js';
import MESSAGES from './Message.js';

const INPUT_VIEW = Object.freeze({
  async carNames() {
    const CAR_NAMES = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const DIVIDE_NAMES = CAR_NAMES.split(',');
    ERROR_LIST.overName(DIVIDE_NAMES);
    return DIVIDE_NAMES;
  },
});

export default INPUT_VIEW;
