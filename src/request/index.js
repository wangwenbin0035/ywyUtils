
// 回调函数
const callback = (name,cb) =>  setTimeout(() => cb(`Hello ${name}`),1000);

// Promise
const promiseCallback = name => {
  return new Promise((reslove) => {
    setTimeout(() => reslove(`Hello ${name} Promise`),1000)
  })
}

export default {
  callback,
  promiseCallback
}