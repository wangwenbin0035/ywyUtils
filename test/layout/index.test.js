import layouts from '../../src/layout';

describe('layout', () => {
  test('layout is MatchSnapshot', () => {
    expect(layouts).toMatchSnapshot();
  });
});