import Car from '../src/racingCar/domain/Car.js';

describe('Car 객체 테스트', () => {
  const MOVE = 4;
  const STOP = 3;

  test('4이상이면 전진 미만이면 정지', () => {
    //given
    const CAR1 = new Car('jun');
    const CAR2 = new Car('bob');

    //when
    CAR1.move(MOVE);
    CAR2.move(STOP);

    //then
    expect(CAR1.getPosition()).toBe(1);
    expect(CAR2.getPosition()).toBe(0);
  });
});
