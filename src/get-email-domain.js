// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

  function getEmailDomain(email) {
    let s11 = ''
    s11 = email.slice(email.lastIndexOf('@') + 1);
    return s11
  }


module.exports = {
  getEmailDomain
};
