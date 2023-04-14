// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let n = 0, n1 = 0, n2 = 0, s11 = s1, s22 = s2
  s1.split('').sort().join('');
  for (let i = 0; i < s1.length; i++) {
    let sw = new RegExp(`${s1[i]}`, 'g');
    n1 = (s11.match(sw) || []).length
    n2 = (s22.match(sw) || []).length
    n2 > 0 && n1 > 0 ? n1 >= n2 ? n = n + n2 : n = n + n1 : '' 
    s11 = s11.replace(new RegExp(`${s1[i]}`, 'g'), '')
    s22 = s22.replace(new RegExp(`${s1[i]}`, 'g'), '')
  }
  return n
}

module.exports = {
  getCommonCharacterCount
};
