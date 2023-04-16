// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  let rez = ''
if (date === undefined) {
  rez = 'Unable to determine the time of year!'
} else {
  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) === 'Date') {
      throw Error("Invalid date!")
    } else {
      if (date.getMonth() > 10 || date.getMonth() < 2) {
        rez = 'winter'
      } else {
      if (date.getMonth() >= 2 && date.getMonth() < 5) {
        rez = 'spring'
      } else {
        if (date.getMonth() >= 5 && date.getMonth() < 8) {
          rez = 'summer'
        } else {
          rez = 'autumn'
        }
      }
    }

    }

  } else {
    throw Error("Invalid date!")
    // return 'Invalid date!'
  }
}
return rez
}

module.exports = {
  getSeason
};
