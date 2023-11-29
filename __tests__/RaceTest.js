import Car from '../src/racingCar/domain/Car.js';
import Race from '../src/racingCar/domain/Race.js';

describe('Race 클래스 테스트', () => {
  const CAR1 = new Car('jun');
  const CAR2 = new Car('bob');
  const ARRAY = [CAR1, CAR2];
  const STANDARD = 3;
  const MOVE = 4;
  const STOP = 3;

  test('가장 이동 많이한 거리 테스트', () => {
    CAR1.move(MOVE > STANDARD);
    CAR1.move(MOVE > STANDARD);
    CAR2.move(MOVE > STANDARD);
    const FARTHEST_DISTANCE = Race.findFarthestDistance(ARRAY);
    expect(FARTHEST_DISTANCE).toBe(2);
  });
});
