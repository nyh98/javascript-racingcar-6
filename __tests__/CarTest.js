import Car from '../src/racingCar/domain/Car.js';

describe('Car 객체 테스트', () => {
  const CAR1 = new Car('jun');
  const CAR2 = new Car('bob');
  const STANDARD = 3;
  const MOVE = 4;
  const STOP = 3;

  test('4이상이면 전진 미만이면 정지', () => {
    CAR1.move(MOVE > STANDARD);
    CAR2.move(STOP > STANDARD);
    expect(CAR1.calculateDistance()).toBe(1);
    expect(CAR2.calculateDistance()).toBe(0);
  });
});
