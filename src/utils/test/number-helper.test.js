
// Number utility helper

import NumberHelper from '../helpers-helper';

it('should get correct procentage', () => {
  const correctAnswers = 2;
  const total = 6;
  const res = 34;
  expect(NumberHelper.getProcentage(correctAnswers, total)).toEqual(res);
});

it('should get correct procentage too', () => {
  const correctAnswers = 6;
  const total = 6;
  const res = 100;
  expect(NumberHelper.getProcentage(correctAnswers, total)).toEqual(res);
});