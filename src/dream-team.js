// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let rez = [], str1
  if (Array.isArray(arr)) {
    arr.forEach(n => {
      if (typeof n === 'string') {
        let arr1 = n.split('');
        str1 = ''
        arr1.forEach(n1 => {
          if (n1.charCodeAt(0) >= 65 && n1.charCodeAt(0) <= 90) {
            str1 = str1 + n1
          } else {
            if (n1.charCodeAt(0) >= 97 && n1.charCodeAt(0) <= 122) {
              str1 = str1 + n1.toUpperCase()
            }
          }
        });
        rez.push(str1[0])
        str1 = ''
      }
    });
  return rez.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
