// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    if (arr instanceof Array) {
      let contr = 0
      let arr1 = new Array()
      let arr2 = new Array()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
          contr = 1
        }
        if (arr[i] == '--double-next') {
          if (i < arr.length - 1) {
            arr1 = arr1.concat(arr[i + 1])
          }
        }
  
        if (arr[i] != '--double-next') {
          if (contr != 1 || arr[i] == '--discard-next') {
            arr1 = arr1.concat(arr[i])
  
           }  else {
            contr = 0
          }
        } else {
  
        }
      }
  
  
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i + 1] == '--double-prev') {
          if (arr1[i] != '--discard-next') {
            arr2 = arr2.concat(arr1[i])
          } else {
            
          }
  
          }
        if (arr1[i] != '--discard-prev' && arr1[i] != '--double-prev' && arr1[i] != '--discard-next') {
          if (arr1[i + 1] != '--discard-prev') {
            arr2 = arr2.concat(arr1[i])
          }
        }
      }
    return arr2
    } else {
      throw new Error("'arr' parameter must be an instance of the Array!")
      // return "'arr' parameter must be an instance of the Array!"
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
    // return "'arr' parameter must be an instance of the Array!"
  }
}

module.exports = {
  transform
};
