// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n += '', n1 = 0, n2 = 0
  for (let i = 0; i < str.length+1; i++) {
    str = n += ''
    str = str.slice(0, i) + str.slice(i + 1);
    n1 = parseInt(str, 10);
    n1 >= n2 ? n2 = n1 : n2 = n2
  }
  return n2
}

module.exports = {
  deleteDigit
};
