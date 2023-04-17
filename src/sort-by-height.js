// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let i = 0, arr1 = new Array(), rez = new Array()
  arr.forEach(n => {
    n > 0 ? arr1.push(n) : ''
  });
  arr1.sort(function(a, b) {return a - b});
  arr.forEach(n => {
    if (n > 0) {
      rez.push(arr1[i])
      i++
    } else {
      rez.push(n)
    }
  });
return rez
}

module.exports = {
  sortByHeight
};
