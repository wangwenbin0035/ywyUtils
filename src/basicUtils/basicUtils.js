import querystring from 'querystring';
/**
 * @method isString
 * @param obj
 * @returns {boolean}
 * @desc 判断传入对象是否是字符串类型
 */

const getType = para => {
  return Object.prototype.toString.call(para).slice(8,-1)  
}
console.log(getType('wwb'))

const isString = (obj) => {
  return toString.call(obj) == '[object String]';
};
console.log(isString('wwb'),'判断传入对象是否是字符串类型')

/**
 * @method isDate
 * @param obj
 * @returns {boolean}
 * @desc 判断传入对象是否是字日期类型
 */
// const isDate = (obj) => {
//   return isDate.call(obj) == '[object Date]';
// };
// console.log(isDate('2020-04-16'),'判断传入对象是否是字日期类型')


/**
 * @param {function} 请求函数
 */
const createEffects = (servicesFun) => function *({ payload, callback },{ put, call }) {  
  if(typeof servicesFun !== 'function') {
    return console.error(new Error(`servicesFun: ${servicesFun} is not function`));
  }
  const response = yield call(servicesFun, payload);
  if(callback && typeof callback === 'function') {
    callback(response);
  };
  return response;
}


/**
 * @param {string} ?id=123 此格式字符串
 */
const resolveSearch = (search) => {
  if (typeof search !== 'string') {
    return {};
  }
  if (!search.split('?')[1] || !search) {
    return {};
  }
  return querystring.parse(search.split('?')[1]);
}

/**
  @param {len} 随机数长度,默认4位
 */

const randChar = (len = 4) => {
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',result = '';
  characters = characters.split('');
  for( let i = 0 ; i < len; i++ ){
    result += characters[Math.floor(Math.random()*characters.length)]
  }
  return result;
}

/**
 * json obj 比较
 * @param {*} obj1 
 * @param {*} obj2 
 * @param {*} except 不比较项
 */
const objCompare = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || obj1 === null) {
    return false;
  }
  if (typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }
  // get all key
  var aProps = Object.getOwnPropertyNames(obj1);  
  var bProps = Object.getOwnPropertyNames(obj2);
  if (aProps.length !== bProps.length) {  
    return false;  
  }  
  for (let i = 0; i < aProps.length; i++) {  
    let propName = aProps[i];  
    if ((obj1[propName] !== obj2[propName])) {  
      return false;  
    }  
  }  
  return true;
}



export default {
  getType,
  isString,
  createEffects,
  resolveSearch,
  randChar,
  objCompare,
}