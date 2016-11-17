const chai = require('chai');
const asserttype = require('../asserttype.js');

chai.use(asserttype);
const expect = chai.expect;
const should = chai.should();

describe('asserttype', () => {

  describe('Number', () => {
    it('should be a function', () => {
      expect(expect(1).to.be.number).to.be.a('function');
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
      'foo'.should.not.be.number();
      expect([1, 2, 3]).not.to.be.number();
      [1, 2, 3].should.not.be.number();
    });
  });

  describe('String', () => {
    it('should be a function', () => {
      expect(expect('test').to.be.string).to.be.a('function');
    });

    it('should assert strings', () => {
      expect('foo').to.be.string();
      'foo'.should.be.string();
    });

    it('should throw error when it fails to assert strings', () => {
      expect(() => expect(1).to.be.string()).to.throw(Error);
    });

    it('should be false when the actual value is not a string', () => {
      expect(2).not.to.be.string();
      2.0.should.not.be.string();
      expect([1, 2, 3]).not.to.be.string();
      [1, 2, 3].should.not.be.string();
    });
  });

});