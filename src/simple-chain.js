// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  str: '',

  getLength() {
    this.n = this.str.split('~~').length;
    return this.n;
  },
  addLink(value) {
    // console.log(value)
    if (value === undefined){
    this.str.length == 0 ? this.str = this.str + '(  )' :
    this.str = this.str + '~~(  )'
    // console.log(this.str)
    } else {
    this.str.length == 0 ? this.str = this.str + '( ' + value + ' )' :
    this.str = this.str + '~~( ' + value + ' )'
    this.n = this.str.split('~~').length;
    // console.log(this.str)
  }
  return this;
  },
  removeLink(position) { 
    // console.log(this.n)
    // console.log(position)
    if (!(position > 0 && position < this.n && Number.isInteger(position))) {
      this.str = '';
      throw new Error("You can't remove incorrect link!")
    }
    position = position - 1;
    this.str = this.str.split('~~').slice(0, position).concat(this.str.split('~~').slice(position + 1)).join('~~');
    this.n = this.str.split('~~').length;
    return this;
  },
  
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  
  finishChain() {
    rez = this.str
    this.str = '';
    return rez;
  }
};

module.exports = {
  chainMaker
};
