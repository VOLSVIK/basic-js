// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 let n = 1, rez = 1
 function name(arr, n) {
   console.log(arr);
   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       n++
         // console.log(n + 'n==S');
         // console.log(arr[i]);
         name(arr[i], n)
         // console.log(n + 'n==E');
       n > rez ? rez = n : ''
         // console.log(rez + '===!');
       n--
     }
   }
   return rez
 }
 class DepthCalculator {
 
   calculateDepth(arr) {
     rez = 1
     return name(arr, 1)
   }
 
 }

module.exports = {
  DepthCalculator
};
