import { Console } from '@woowacourse/mission-utils';

const INPUT_VIEW = Object.freeze({
  carNames() {
    const CAR_NAMES = Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const TRANSPER = CAR_NAMES.split(',');
    return TRANSPER;
  },
});
