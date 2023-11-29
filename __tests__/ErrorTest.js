import ERROR_LIST from '../src/racingCar/domain/ErrorList.js';

describe('자동차 이름 입력 에러 테스트', () => {
  const OVER_INPUT = ['yonghwan', 'jun', '강남'];
  const ALL_VACUUM_INPUT = ['  ', '_ ^ _', 'jun '];

  test('5글자 초과 이름 입력시 에러', () => {
    expect(() => ERROR_LIST.validateOverName(OVER_INPUT)).toThrow();
  });

  test('공백만 입력시 에러', () => {
    expect(() => ERROR_LIST.validateAllVacuum(ALL_VACUUM_INPUT)).toThrow();
  });

  test('자동차 이름 입력시 모든 에러 처리', () => {
    expect(() => ERROR_LIST.allCheckName(OVER_INPUT)).toThrow();
    expect(() => ERROR_LIST.allCheckName(ALL_VACUUM_INPUT)).toThrow();
  });
});

describe('시도할 횟수 입력 에러 테스트', () => {
  test('숫자가 아닌 문자 입력시 에러', () => {
    const SPECIAL_CHARACTER = '$7';
    const VACUUM = '7 ';
    const WORD = 'five';

    expect(() => ERROR_LIST.validateCycle(SPECIAL_CHARACTER)).toThrow();
    expect(() => ERROR_LIST.validateCycle(VACUUM)).toThrow();
    expect(() => ERROR_LIST.validateCycle(WORD)).toThrow();
  });
});
