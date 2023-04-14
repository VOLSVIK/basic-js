// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let str1 = '', n = 1
  for (let i = 0; i < str.length; i++) {
    if (i > 0) {
    if (str[i] == str[i-1]) {
      n++
    } else {
      if (n > 1) {
        str1 = str1 + n + str[i-1];
      } else {
        str1 = str1 + str[i-1];
      }
      n = 1
    }
    if (str.length -1 == i) {
      if (n > 1) {
        str1 = str1 + n + str[i];
      } else {
        str1 = str1 + str[i];
      }
    }
    }
  }
  return str1
}

module.exports = {
  encodeLine
};
