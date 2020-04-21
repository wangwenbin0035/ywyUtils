import request from '../../src/request';

describe('request', () => {
  test('reqeust callback should get "Hello wwb"',done => {
    request.callback('wwb', result => {
      expect(result).toBe('Hello wwb')
      done()
    })
  })

  test('request promiseCallback should get "Hello wwb Promise"', () => {
    expect.assertions(1); // 确保至少有一个断言被调用，否则测试失败
    return request.promiseCallback('wwb').then(data => {
      expect(data).toBe('Hello wwb Promise')
    })
  })

});