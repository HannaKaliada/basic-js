const chainMaker = {
  chain: [],
  resultChain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
    }
    else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined
      || typeof position != "number"
      || parseInt(position) != position) {
        this.chain = [];
        throw Error;
    }
    else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.resultChain = this.chain.join('~~');
    this.chain = [];
    return this.resultChain;
  }
};
module.exports = chainMaker;
