// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  // throw new NotImplementedError('Not implemented');
  let rez = 0
  if (Array.isArray(cats)) {
    cats.forEach(n01 => {
      if (Array.isArray(n01)) {
        n01.forEach(n => {
          if (typeof n === 'string') {
            n === '^^' ? rez++ : '' 
          }
        });
      } else {
        cats.forEach(n => {
          if (typeof n === 'string') {
            n === '^^' ? rez++ : '' 
          }
        });
      }
    });
  } else {
    return 0
  }
  
return rez
}

module.exports = {
  countCats
};
