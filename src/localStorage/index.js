/*
 * @Author: wwb 
 * @Date: 2020-04-16 18:22:14 
 * @Last Modified by: wwb
 * @Last Modified time: 2020-04-16 18:27:05
 */

export default {
  getStroage: (name) => {
    if (!name) return;
    return window.localStorage.getItem(name);
  },

  setStorage: (name,content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },

  deleteStroage: (name) => {
    if (!name) return;
    window.localStorage.removeItem(name);
  }
}