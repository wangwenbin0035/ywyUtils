import localStorage from '../../src/localStorage';

describe('localStorage', () => {
  test('localStorage is MatchSnapshot', () => {
    expect(localStorage).toMatchSnapshot();
  });
});