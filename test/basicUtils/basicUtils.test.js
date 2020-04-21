import basicUtils from '../../src/basicUtils/basicUtils';

describe('basicUtils', () => {
  // 快照对比
  test('basicUtils is MatchSnapshot', () => {
    expect(basicUtils).toMatchSnapshot();
  });

  test('wwb is string',() => {
    expect(basicUtils.getType('wwb')).toBe('String')
  })

  test('wwb is isString toBe true', () => {
    expect(basicUtils.isString('wwb')).toBeTruthy()
  });

  test('123 is isString toBe false', () => {
    expect(basicUtils.isString(123)).toBeFalsy()
  });

});

