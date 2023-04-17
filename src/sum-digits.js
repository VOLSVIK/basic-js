// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let nstr = n + '', rez = 10
  while (rez >= 10) {
    rez = 0
    for (let i = 0; i < nstr.length; i++) {
      rez += parseInt(nstr.split('')[i], 10);
      console.log(rez);
    }
    nstr = rez + ''
  }
  return rez
}

module.exports = {
  getSumOfDigits
};
