import Car from '../src/racingCar/domain/Car.js';
import Race from '../src/racingCar/domain/Race.js';

describe('Race 클래스 테스트', () => {
  const MOVE = 4;
  const STOP = 3;

  test('가장 이동 많이한 거리 테스트', () => {
    //given
    const CAR1 = new Car('jun');
    const CAR2 = new Car('bob');
    const CAR3 = new Car('elie');
    const CARS = [CAR1, CAR2, CAR3];
    const RACE = new Race(CARS);

    //when
    CAR1.move(MOVE);
    CAR1.move(MOVE);
    CAR2.move(MOVE);
    CAR3.move(STOP);
    const FARTHEST_DISTANCE = RACE.findFarthestDistance();

    //then
    expect(FARTHEST_DISTANCE).toBe(2);
  });

  test('우승자 이름들을 잘 가져오는지 테스트', () => {
    //given
    const CAR1 = new Car('jun');
    const CAR2 = new Car('bob');
    const CAR3 = new Car('elie');
    const CARS = [CAR1, CAR2, CAR3];
    const RACE = new Race(CARS);

    //when
    CAR1.move(MOVE);
    CAR1.move(MOVE);
    CAR2.move(MOVE);
    CAR2.move(MOVE);
    CAR3.move(MOVE);
    const WINNERS = RACE.getWinners();

    //then
    expect(WINNERS).toContain(CAR1, CAR2);
  });
});
