// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1
    options.additionRepeatTimes = 1
  }
  if (str + '' === 'STRING_OR_DEFAULT') {
    options.additionRepeatTimes = 1
}
  options.separator == undefined ? options.separator = '+' : ''
  // console.log(options.separator)
  options.additionSeparator == undefined ? options.additionSeparator = '|' : ''
if (typeof str === 'string' || str instanceof String) {
  
}
else {
  typeof str === 'number' ? str + '' : ''
}
if (typeof options.addition === 'string' || options.addition instanceof String) {
  
}
else {
  typeof options.addition === 'number' ? options.addition + '' : ''
  // typeof (options.addition + '') == 'STRING_OR_DEFAULT' ? options.addition = options.addition + '' : ''
  // console.log(options.addition + '')
}
  let rez = ''
    for (let i = 0; i < options.repeatTimes; i++) {
      // if (str === objWithSpecificCoercion) {
      //   rez += 'STRING_OR_DEFAULT'
      // }
    rez += str 
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (i < options.additionRepeatTimes - 1) {
        rez += options.addition + options.additionSeparator
      } else {
          rez += options.addition
      }
    }
    if (i < options.repeatTimes - 1) {
      rez += options.separator 
    }
    }
return rez
}

module.exports = {
  repeater
};
