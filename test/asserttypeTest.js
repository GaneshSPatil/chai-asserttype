const chai = require('chai');
const asserttype = require('../asserttype.js');

chai.use(asserttype);
const expect = chai.expect;
const should = chai.should();

describe('asserttype', () => {

  describe('Number', () => {
    it('should be a function', () => {
      expect(expect('test').to.be.string).to.be.a('function');
    });

    it('should assert numbers', () => {
      expect(0).to.be.number();
      0.0.should.be.number();
    });

    it('should throw error when it fails to assert numbers', () => {
      expect(() => expect('foo').to.be.number()).to.throw(Error);
    });

    it('should be false when the actual value is not a number', () => {
      expect('foo').not.to.be.number();
      'foo'.should.not.be.zero;
      expect([1, 2, 3]).not.to.be.number();
      [1, 2, 3].should.not.be.number();
    });
  });

});